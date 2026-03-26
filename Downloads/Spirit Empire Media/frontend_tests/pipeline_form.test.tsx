// Test for PipelineForm component
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PipelineForm from '../../frontend/src/components/PipelineForm';

describe('PipelineForm', () => {
  it('renders the pipeline configuration heading', () => {
    render(<PipelineForm />);
    expect(screen.getByText('Pipeline Configuration')).toBeInTheDocument();
  });

  it('allows input for pipeline name', () => {
    render(<PipelineForm />);
    const input = screen.getByLabelText('Pipeline Name:');
    fireEvent.change(input, { target: { value: 'My New Pipeline' } });
    expect(input).toHaveValue('My New Pipeline');
  });

  it('has a save button', () => {
    render(<PipelineForm />);
    expect(screen.getByRole('button', { name: 'Save Pipeline' })).toBeInTheDocument();
  });
});
