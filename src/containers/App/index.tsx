import React from 'react';

import './App.css';

import Header from './Header';
import Footer from './Footer';

import { Action, AppState, RootContextType } from '../../types';

const initialState: AppState = {
  darkMode: false,
}

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
    <main className="bg-white">
      <h1 className="text-lg py-8">Add Challenge Name Here</h1>
      <section></section>
    </main>
  )
}

function App() {
  const [rootState, rootDispatch] = React.useReducer(reducer, initialState);
  const initialValue = {
    rootState,
    rootDispatch,
  }
  return (
    <RootContext.Provider value={initialValue}>
      <div className="App min-h-screen justify-between flex flex-col bg-gray-100">
        <Header />
        <Body />
        <Footer />
      </div>
    </RootContext.Provider>
  );
}

export default App;
