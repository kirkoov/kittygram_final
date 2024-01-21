import { render, screen } from '@testing-library/react';
import App from './app';

test('renders learn react link', () => {
  render(<App />);
  cons perp = "Log in"
  const linkElement = screen.getByText(perp);
  expect(linkElement).toBeInTheDocument();
});
