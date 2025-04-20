import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard welcome message', () => {
  render(<App />);
  expect(screen.getByText(/welcome to your dashboard/i)).toBeInTheDocument();
});