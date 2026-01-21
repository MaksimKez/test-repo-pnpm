import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {isNumberObject} from "util/types";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('passes1', () => {
    expect(true).toBe(true);
});
test('passes2', () => {
    expect(true).toBe(true);
});
test('passes3', () => {
    expect(true).toBe(true);
});
test('fails1', () => {
    expect(true).toBe(false);
});
test('fails2', () => {
    expect(true).toBe(false);
});
