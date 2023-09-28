import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BookingPage from "./Pages/BookingPage";
import BookingForm from './components/BookingForm';
import { fetchAPI } from './api';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders the BookingPage heading", () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Reservations Form");
  expect(headingElement).toBeInTheDocument();
})

test("Renders updateTimes", () => {
  const updateTimes = jest.fn();
  render (<BookingForm onSubmit={updateTimes} />)
})

test("Renders initializeTimes when onSubmit is called", () => {
  const initializeTimes = jest.fn();
  const { getByTestId } = render (<BookingForm onSubmit = {initializeTimes}/>);
  const submitButton = getByTestId("submit");
  fireEvent.click(submitButton);

  expect(initializeTimes).toHaveBeenCalledTimes(1);
})



test("fetchAPI returns the expected time slots", () => {
  const mockDate = new Date("2023-09-23T12:00:00"); 

  const mockSeededRandom = jest.fn();
  mockSeededRandom.mockReturnValueOnce(0.3); 
  mockSeededRandom.mockReturnValueOnce(0.7); 

  const result = fetchAPI(mockDate, mockSeededRandom);

  expect(result).toEqual(["17:30", "18:00", "19:30", "20:00", "21:30", "22:00", "22:30"]);
});


describe('BookingForm', () => {
  const handleSubmit = jest.fn();

  beforeEach(() => {
    render(<BookingForm onSubmit={handleSubmit} />);
  });

  it('should render all form elements', () => {
    expect(screen.getByLabelText('First Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name:')).toBeInTheDocument();
  });

  it('should allow user input and update state', () => {
    const firstNameInput = screen.getByLabelText('First Name:');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput.value).toBe('John');
    
    const lastNameInput = screen.getByLabelText('Last Name:');
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    expect(lastNameInput.value).toBe('Doe');
  });

  it('should display errors when form is submitted with invalid data', () => {
    fireEvent.click(submit);

    expect(screen.getByText('First Name is required')).toBeInTheDocument();
    expect(screen.getByText('Last Name is required')).toBeInTheDocument();
  });

  it('should call handleSubmit function when the form is submitted with valid data', () => {
    fireEvent.change(screen.getByLabelText('First Name:'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name:'), { target: { value: 'Doe' } });

    fireEvent.click(screen.getByLabelText('reserve'));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
*/

describe('NookingForm', () => {
  const handleSubmit = jest.fn();
  const handleChangeForm = jest.fn();
  const handleChangeDate = jest.fn();
  const currentDate = new Date().toISOString().slice(0, 10);
  const options = ['Option 1', 'Option 2']; 
  const occasionsOptions = ['Occasion 1', 'Occasion 2']; 

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
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone:'), { target: { value: '123-456-7890' } });
    fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2023-09-26' } });
    fireEvent.change(screen.getByLabelText('Time:'), { target: { value: 'Option 2' } });
    fireEvent.change(screen.getByLabelText('Guests:'), { target: { value: '5' } });
    fireEvent.change(screen.getByLabelText('Occasion:'), { target: { value: 'Occasion 2' } });

    fireEvent.click(screen.getByLabelText('reserve'));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

});
