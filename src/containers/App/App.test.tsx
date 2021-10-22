import { render, screen } from '@testing-library/react';
import App from '.';
import { FOOTER_TEXT, TITLE } from '../../constants/copy';

test('renders the basic structure', () => {
  render(<App />);
  const bodyElement = screen.getByRole('main');
  const darkModeSwitchEl = screen.getByTestId('darkModeSwitch');
  const titleEl = screen.getByText(TITLE);
  const footerText = screen.getByText(FOOTER_TEXT);
  
  expect(bodyElement).toBeInTheDocument();
  expect(darkModeSwitchEl).toBeInTheDocument();
  expect(titleEl).toBeInTheDocument();
  expect(footerText).toBeInTheDocument();
});

test('Toggle Dark mode', () => {
  render(<App />);
  const darkModeSwitchEl = screen.getByTestId('darkModeSwitch');
  // const htmlElement = screen.getByRole('html');
  const htmlElement = document.querySelector('html');
  darkModeSwitchEl.click();
  expect(htmlElement?.classList.contains('dark')).toBe(false);
  darkModeSwitchEl.click();
  expect(htmlElement).toHaveClass('dark');
});
