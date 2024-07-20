import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const title = screen.getByText(/Uncover weight loss methods for all menopause stages/i);
  expect(title).toBeInTheDocument();
});
