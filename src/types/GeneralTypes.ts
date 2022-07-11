import { MouseEvent, ReactNode } from "react";

export type HasChildren = {
  children?: ReactNode;
};

export type isClickable = {
  onClick?: ((event: MouseEvent) => void) | (() => void);
};

export type Reducer<State, Action> = (state: State, action: Action) => State;
