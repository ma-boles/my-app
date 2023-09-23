import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BookingPage from "./Pages/BookingPage";
import BookingForm from './components/BookingForm';
import { fetchAPI } from './api';

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
/*
test("Renders updateTimes", () => {
  const updateTimes = jest.fn();
  render (<BookingForm onSubmit={updateTimes} />)
})
/*
test("Renders initializeTimes when onSubmit is called", () => {
  const initializeTimes = jest.fn();
  const { getByTestId } = render (<BookingForm onSubmit = {initializeTimes}/>);
  const submitButton = getByTestId("submit");
  fireEvent.click(submitButton);

  expect(initializeTimes).toHaveBeenCalledTimes(1);
})*/

// Import any necessary libraries and functions
// For example, if you're using Jest:
// import { initializeTimes } from './yourModule';

test("fetchAPI returns the expected time slots", () => {
  // Mock a specific date for testing purposes
  const mockDate = new Date("2023-09-23T12:00:00"); // You can choose any date and time for testing

  // Mock the seededRandom function to return predictable random values
  const mockSeededRandom = jest.fn();
  mockSeededRandom.mockReturnValueOnce(0.3); // First call returns 0.3
  mockSeededRandom.mockReturnValueOnce(0.7); // Second call returns 0.7

  // Call the initializeTimes function with the mock date and random function
  const result = fetchAPI(mockDate, mockSeededRandom);

  // Assert that the result matches the expected value
  expect(result).toEqual(["17:30", "18:00", "19:30", "20:00", "21:30", "22:00", "22:30"]);
});
