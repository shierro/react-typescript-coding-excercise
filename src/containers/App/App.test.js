import { render, screen } from '@testing-library/react';
import App from '.';

test('renders the basic structure', () => {
  render(<App />);
  const bodyElement = screen.getByRole('main');
  const headerElement = screen.getByText('React Coding Exercises');
  const footerElement = screen.getByText('Baked with Love');
  expect(bodyElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
  expect(headerElement).toBeInTheDocument();
});
