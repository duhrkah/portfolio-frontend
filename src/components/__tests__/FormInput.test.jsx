import React from 'react';
import { render, screen } from '@testing-library/react';
import FormInput from '../FormInput';

describe('FormInput', () => {
  const defaultProps = {
    label: 'Test Label',
    name: 'test',
    value: '',
    onChange: jest.fn(),
  };

  it('renders correctly with required props', () => {
    render(<FormInput {...defaultProps} />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('shows required indicator when required', () => {
    render(<FormInput {...defaultProps} required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('displays error message when error is provided', () => {
    const errorMessage = 'This is an error';
    render(<FormInput {...defaultProps} error={errorMessage} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('applies error styling when error is present', () => {
    render(<FormInput {...defaultProps} error="Error" />);
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveClass('border-red-500');
  });
}); 