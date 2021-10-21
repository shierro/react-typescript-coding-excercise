export type AppState = {
  darkMode: boolean;
}

export type ACTION_TYPES = 'TOGGLE_THEME';

export type Action = {
  type: ACTION_TYPES;
  payload?: any;
}

export type RootContextType = {
  rootState: AppState;
  rootDispatch: React.Dispatch<Action>;
}
