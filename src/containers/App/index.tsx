import React from 'react';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import { Action, AppState, RootContextType } from '../../types';

const initialState: AppState = {
  darkMode: true,
};

export const RootContext = React.createContext({} as RootContextType);

function reducer(state: AppState, action: Action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      document.documentElement.classList[state.darkMode ? 'remove' : 'add']('dark');
      return { ...state, darkMode: !state.darkMode };
    default:
      throw new Error();
  }
}

function Body() {
  return (
    <main className="bg-white dark:bg-gray-400">
      <h1 className="text-lg py-8 dark:text-white">Add Challenge Name Here</h1>
      <section />
    </main>
  );
}

const Container: React.FC = ({ children }) => (
  <div
    className="
      App
      min-h-screen
      justify-between
      flex
      flex-col
      bg-gray-100
      dark:bg-gray-500"
  >
    {children}
  </div>
);

function App() {
  const [rootState, rootDispatch] = React.useReducer(reducer, initialState);
  const initialValue = {
    rootState,
    rootDispatch,
  };
  return (
    <RootContext.Provider value={initialValue}>
      <Container>
        <Header />
        <Body />
        <Footer />
      </Container>
    </RootContext.Provider>
  );
}

export default App;
