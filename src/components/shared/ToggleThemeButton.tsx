import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { FC } from "react";
import "twin.macro";

import { ThemeAction, useThemeContext } from "../../contexts/ThemeContext";

export const ToggleThemeButton: FC = ({ ...props }) => {
  const { theme, dispatch } = useThemeContext();

  const handleToggleTheme = () => {
    dispatch({
      type: theme.color === "light" ? "dark" : "light",
    });
  };

  return (
    <button
      type="button"
      tw="transition p-1 rounded-full text-slate-400 hover:text-white focus:(outline-none ring-2 ring-offset-2 ring-offset-slate-800 ring-white)"
      onClick={() => handleToggleTheme()}
      {...props}
    >
      <span tw="sr-only">Toggle dark theme</span>
      {theme.color === "light" ? (
        <MoonIcon tw="h-6 w-6" aria-hidden="true" />
      ) : (
        <SunIcon tw="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
};
