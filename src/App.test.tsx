import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: 'Jacob Wu-Chen' })).toBeInTheDocument();
});
