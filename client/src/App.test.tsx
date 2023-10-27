import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search engine heading and input field', () => {
  render(<App />);
  const headingElement = screen.getByText(/Search Engine for Game Cards/i);
  expect(headingElement).toBeInTheDocument();

  const inputElement = screen.getByPlaceholderText(/Search for a card/i);
  expect(inputElement).toBeInTheDocument();
});