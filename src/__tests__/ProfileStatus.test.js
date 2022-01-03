import ProfileStatus from '../components/Profile/ProfileInfo/ProfileStatusHook';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Testing ProfileStatus Component', () => {

  test('status from props should be in the state' ,() => {
    render(<ProfileStatus status="Wer will, der kann" />);
    const statusText = screen.getByText(/Wer will, der kann/i);

    expect(statusText).toHaveTextContent(/Wer will, der kann/i);
  });

  test('input should be displayed in editMode instead of span', () => {
    const component = render(<ProfileStatus status="Wer will, der kann" />);
    const span = component.getByTestId(/span/i);
    userEvent.click(span);
    const input = component.getByTestId(/input/i);
    
    expect(input.value).toBe('Wer will, der kann');
  });

  test('callback should be called', () => {
    const mockFn = jest.fn();
    const component = render(<ProfileStatus status="Wer will, der kann" updateStatus={mockFn} />);
    
    const span = component.getByTestId(/span/i);
    userEvent.click(span);
    const input = component.getByTestId(/input/i);

    fireEvent.change(input, {
      target: { value: 'test' }
    });
    fireEvent.blur(input);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});