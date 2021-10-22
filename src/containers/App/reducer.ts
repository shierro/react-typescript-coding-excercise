import { Action, AppState } from '../../types';

function reducer(state: AppState, action: Action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      document.documentElement.classList[state.darkMode ? 'remove' : 'add']('dark');
      return { ...state, darkMode: !state.darkMode };
    default:
      throw new Error();
  }
}

export default reducer;
