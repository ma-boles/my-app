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

/*test("Renders the BookingPage heading", () => {
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

/*test("fetchAPI returns the expected time slots", () => {
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
*/

/*describe('BookingForm', () => {
  // Mock the handleSubmit function
  const handleSubmit = jest.fn();

  beforeEach(() => {
    render(<BookingForm onSubmit={handleSubmit} />);
  });

  it('should render all form elements', () => {
    // Test that all form elements are present
    expect(screen.getByLabelText('First Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name:')).toBeInTheDocument();

    // Add similar checks for other form elements
  });

  it('should allow user input and update state', () => {
    // Simulate user input for the First Name field
    const firstNameInput = screen.getByLabelText('First Name:');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput.value).toBe('John');
    
    const lastNameInput = screen.getByLabelText('Last Name:');
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    expect(lastNameInput.value).toBe('Doe');
    // You can add similar tests for other input fields
  });

  it('should display errors when form is submitted with invalid data', () => {
    // Simulate form submission
    fireEvent.click(submit);

    // Check for error messages for First Name and Last Name
    expect(screen.getByText('First Name is required')).toBeInTheDocument();
    expect(screen.getByText('Last Name is required')).toBeInTheDocument();

    // You can add similar tests for other input fields and validation messages
  });

  it('should call handleSubmit function when the form is submitted with valid data', () => {
    // Simulate valid form input
    fireEvent.change(screen.getByLabelText('First Name:'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name:'), { target: { value: 'Doe' } });
    // Add valid input for other fields

    // Simulate form submission
    fireEvent.click(screen.getByLabelText('reserve'));
    // Verify that handleSubmit was called
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    // You can also add additional assertions related to the form data that should be passed to handleSubmit
  });
});
*/

describe('NookingForm', () => {
  // Mock the necessary functions and data
  const handleSubmit = jest.fn();
  const handleChangeForm = jest.fn();
  const handleChangeDate = jest.fn();
  const currentDate = new Date().toISOString().slice(0, 10);
  const options = ['Option 1', 'Option 2']; // Replace with your actual options
  const occasionsOptions = ['Occasion 1', 'Occasion 2']; // Replace with your actual occasion options

  beforeEach(() => {
    render(
      <BookingForm
        handleSubmit={handleSubmit}
        handleChangeForm={handleChangeForm}
        handleChangeDate={handleChangeDate}
        currentDate={currentDate}
        options={options}
        occasionsOptions={occasionsOptions}
      />
    );
  });

  it('should allow user input and update the email field', () => {
    const emailInput = screen.getByLabelText('Email:');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');
  });

  it('should allow user input and update the phone field', () => {
    const phoneInput = screen.getByLabelText('Phone:');
    fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });
    expect(phoneInput.value).toBe('123-456-7890');
  });

  it('should allow user input and update the date field', () => {
    const dateInput = screen.getByLabelText('Date:');
    fireEvent.change(dateInput, { target: { value: '2023-09-26' } });
    expect(dateInput.value).toBe('2023-09-26');
  });

  it('should allow user input and update the time field', () => {
    const timeSelect = screen.getByLabelText('Time:');
    fireEvent.change(timeSelect, { target: { value: 'Option 2' } });
    expect(timeSelect.value).toBe('Option 2');
  });

  it('should allow user input and update the guests field', () => {
    const guestsInput = screen.getByLabelText('Guests:');
    fireEvent.change(guestsInput, { target: { value: '5' } });
    expect(guestsInput.value).toBe('5');
  });

  it('should allow user input and update the occasion field', () => {
    const occasionSelect = screen.getByLabelText('Occasion:');
    fireEvent.change(occasionSelect, { target: { value: 'Occasion 2' } });
    expect(occasionSelect.value).toBe('Occasion 2');
  });

  it('should call handleSubmit when the form is submitted with valid data', () => {
    // Simulate valid form input
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone:'), { target: { value: '123-456-7890' } });
    fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2023-09-26' } });
    fireEvent.change(screen.getByLabelText('Time:'), { target: { value: 'Option 2' } });
    fireEvent.change(screen.getByLabelText('Guests:'), { target: { value: '5' } });
    fireEvent.change(screen.getByLabelText('Occasion:'), { target: { value: 'Occasion 2' } });

    // Simulate form submission
    fireEvent.click(screen.getByLabelText('reserve'));

    // Verify that handleSubmit was called
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    // You can also add additional assertions related to the form data that should be passed to handleSubmit
  });

  // Add more test cases for validation and error messages as needed
});
