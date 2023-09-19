import { render, screen } from '@testing-library/react';
import App from './App';
import BookingPage from "./Pages/BookingPage";

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

test("Renders the BookingPage heading", () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Reservations Form");
  expect(headingElement).toBeInTheDocument();
})

test("Renders updateTimes", () => {
  const updateTimes = jest.fn();
  render (<BookingPage onSubmit={updateTimes} />)
})

test("Renders initializeTimes", () => {
  const initializeTimes = jest.fn();
  render (<BookingPage onSubmit = {initializeTimes}/>)
})