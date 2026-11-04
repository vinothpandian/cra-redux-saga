import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import App from './App';
import store from './store';
import { changeName } from './redux/actions';
vi.mock('axios', () => ({ default: { get: vi.fn() } }));
beforeEach(() => {
  window.location.hash = '#/';
  store.dispatch(changeName('you'));
  vi.clearAllMocks();
});
it('updates the name through Redux and the asynchronous saga', async () => {
  axios.get.mockResolvedValue({ data: { name: 'Random Test' } });
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText('Your name'), { target: { value: 'Typed Test' } });
  fireEvent.click(screen.getByRole('button', { name: 'Update name!' }));
  expect(await screen.findByText('Typed Test')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Random name!' }));
  expect(await screen.findByText('Random Test')).toBeInTheDocument();
  expect(axios.get).toHaveBeenCalledWith('https://uinames.com/api/?amount=1');
});
it('keeps hash navigation to the package directory', async () => {
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: 'Packages', exact: true }));
  expect(await screen.findByRole('link', { name: 'redux-saga', exact: true })).toHaveAttribute('href', 'https://redux-saga.js.org/');
});
