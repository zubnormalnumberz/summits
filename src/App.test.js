import { screen, render } from '@testing-library/react';
import App from './App';

test('renders Hello, World!', () => {
  render(<App />);
  const linkElement = screen.getByText(/development/i);
  expect(linkElement).toBeInTheDocument();
});
