import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import { AppState, RootContextType } from '../../types';
import reducer from './reducer';
import HomePage from '../HomePage';

const initialState: AppState = {
  darkMode: true,
};

export const RootContext = React.createContext({} as RootContextType);

function Body() {
  return (
    <main className="bg-white dark:bg-gray-500">
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
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
      <Router>
        <Container>
          <Header />
          <Body />
          <Footer />
        </Container>
      </Router>
    </RootContext.Provider>
  );
}

export default App;
