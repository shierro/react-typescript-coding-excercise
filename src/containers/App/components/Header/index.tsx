import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

import logo from '../../../../assets/images/logo.svg';
import { RootContext } from '../../index';
import { TITLE } from '../../../../constants/copy';

const Container: React.FC = ({ children }) => (
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
    {children}
  </header>
);

const LeftSection: React.FC = ({ children }) => (
  <div
    className="
      flex
      flex-row
      justify-center
      items-center"
  >
    {children}
  </div>
);

const RightSection: React.FC = ({ children }) => (
  <div className="px-4">
    {children}
  </div>
);

const Title: React.FC = ({ children }) => (
  <h1
    className="
      font-serif
      text-lg
      sm:text-2xl
      dark:text-white"
  >
    {children}
  </h1>
);

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
          type="button"
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
