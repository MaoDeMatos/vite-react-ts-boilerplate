import { Dispatch, FC, createContext, useContext, useReducer } from "react";

import { HasChildren, Reducer } from "../types/GeneralTypes";

import { useDetectTheme } from "../hooks/useDetectTheme";

// There can be multiple types of themes:
// - color (light, dark, soft dark, deuteranopia...)
// - font (size, family...)
// - shape (rounded-sm, rounded-lg, square)
// etc...
export type ThemeColorValue = "light" | "dark";
// export type ThemeShapeValue = "rounded" | "square";

export type ThemeVariant = ThemeColorValue;
// | ThemeShapeValue;

export interface ThemeAction {
  type: ThemeVariant;
  // payload: Partial<ThemeState>
}

type ThemeState = {
  color: ThemeColorValue;
  // shape: ThemeShapeValue;
  classes: string;
};

const FilterThemeClasses = (
  state: ThemeState,
  filter: ThemeVariant,
  replacement: ThemeVariant
) => {
  const classes = state.classes
    .split(" ")
    .filter(className => className !== filter);
  classes.push(replacement);
  return {
    ...state,
    color: replacement,
    classes: classes.join(" "),
  } as ThemeState;
};

const themeReducer: Reducer<ThemeState, ThemeAction> = (state, action) => {
  const { type } = action;

  switch (type) {
    case "light": {
      return FilterThemeClasses(state, type, "light");
    }
    case "dark": {
      return FilterThemeClasses(state, type, "dark");
    }
    default: {
      return state;
    }
  }
};

const ThemeCtx = createContext<{
  theme: ThemeState;
  dispatch: Dispatch<ThemeAction>;
}>(null!);

export const ThemeContextProvider: FC<HasChildren> = props => {
  const isDark = useDetectTheme();

  const defaultTheme: ThemeState = {
    color: isDark ? "dark" : "light",
    classes: isDark ? "dark" : "light",
  };

  const [state, dispatch] = useReducer(themeReducer, defaultTheme);

  return (
    <ThemeCtx.Provider
      value={{ theme: state, dispatch: dispatch }}
      {...props}
    />
  );
};

export function useThemeContext() {
  return useContext(ThemeCtx);
}
