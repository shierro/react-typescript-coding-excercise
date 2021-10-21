import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.svg';
import { RootContext } from '.';

function Header() {
  const { rootState, rootDispatch = () => true } = useContext(RootContext);
  return (
    <header className="header p-4 flex flex-row items-center border-b-2 bg-gray-50 justify-between">
      <div className="flex flex-row justify-center items-center">
        <img 
          src={logo} 
          width="80" 
          className="max-w-screen-sm animate-spin-slow" 
          alt="React Logo" 
        />
        <h1 className="font-serif text-lg sm:text-2xl">React Coding Exercises</h1>
      </div>
      <button 
        className="px-4"
        onClick={() => rootDispatch({ type: 'TOGGLE_THEME' })}
      >
        <FontAwesomeIcon 
          size="2x" 
          icon={faMoon} 
          color={rootState.darkMode ? '#FFA500' : ''} 
        />
      </button>
    </header>
  );
}

export default Header;
