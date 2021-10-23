export type AppState = {
  darkMode: boolean;
}

export type ACTION_TYPES = 'TOGGLE_THEME';

export type Action = {
  type: ACTION_TYPES;
  payload?: unknown;
}

export type RootContextType = {
  rootState: AppState;
  rootDispatch: React.Dispatch<Action>;
}

export type EXERCISE_STATUS = 'BACKLOG' | 'IN_PROGRESS' | 'DONE';

export type Exercise = {
  title: string;
  status: EXERCISE_STATUS;
  startedAt?: Date;
  finishedAt?: Date;
};
