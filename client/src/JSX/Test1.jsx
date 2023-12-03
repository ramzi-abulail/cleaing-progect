import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactUs from './ContactUs';

describe('ContactUs Component', () => {
  it('renders ContactUs component properly', () => {
    render(<ContactUs />);
    
    // Check if certain elements are rendered
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('Feel Free To Send Message To Us In Case You Have Problem Or You Want Support Us')).toBeInTheDocument();
    expect(screen.getByLabelText('Your email')).toBeInTheDocument();
    expect(screen.getByLabelText('Subject')).toBeInTheDocument();
    expect(screen.getByLabelText('Your message')).toBeInTheDocument();
    expect(screen.getByText('Send')).toBeInTheDocument();
  });

  it('validates form submission', () => {
    render(<ContactUs />);
    
    // Get form inputs
    const emailInput = screen.getByLabelText('Your email');
    const subjectInput = screen.getByLabelText('Subject');
    const messageInput = screen.getByLabelText('Your message');
    const submitButton = screen.getByText('Send');

    // Mock user input
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Testing subject' } });
    fireEvent.change(messageInput, { target: { value: 'Testing message' } });

    // Simulate form submission
    fireEvent.click(submitButton);

    // Add assertions for form submission - you might adjust these based on your actual form validation
    expect(emailInput).toHaveValue('test@example.com');
    expect(subjectInput).toHaveValue('Testing subject');
    expect(messageInput).toHaveValue('Testing message');
  });
});
