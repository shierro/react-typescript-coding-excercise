import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

import logo from '../../../../assets/images/logo.svg';
import { RootContext } from '../../index';
import { TITLE } from '../../../../constants/copy';

const Container: React.FC = (props) => (
  <header 
    className="
      header 
      p-4 
      flex 
      flex-row 
      items-center 
      border-b-2 
      bg-gray-50 
      justify-between 
      dark:bg-gray-700"
  >
    {props.children}
  </header>
)

const LeftSection: React.FC = (props) => (
  <div 
    className="
      flex 
      flex-row 
      justify-center 
      items-center"
  >
    {props.children}
  </div>
)

const RightSection: React.FC = (props) => (
  <div className="px-4">
    {props.children}
  </div>
)

const Title: React.FC = (props) => (
  <h1 
    className="
      font-serif 
      text-lg 
      sm:text-2xl
      dark:text-white"
  >
    {props.children}
  </h1>
)

function Header() {
  const { rootState, rootDispatch } = useContext(RootContext);
  return (
    <Container>
      <LeftSection>
        <img 
          src={logo} 
          width="80" 
          className="max-w-screen-sm animate-spin-slow" 
          alt="React Logo" 
        />
        <Title>{TITLE}</Title>
      </LeftSection>
      <RightSection>
        <button
          data-testid="darkModeSwitch"
          onClick={() => rootDispatch({ type: 'TOGGLE_THEME' })}
        >
          <FontAwesomeIcon 
            size="2x" 
            icon={faMoon} 
            color={rootState.darkMode ? '#FFA500' : ''} 
          />
        </button>
      </RightSection>
    </Container>
  );
}

export default Header;
