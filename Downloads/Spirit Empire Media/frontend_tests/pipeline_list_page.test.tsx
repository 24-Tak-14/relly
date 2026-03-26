// Test for PipelineListPage component
import React from 'react';
import { render, screen } from '@testing-library/react';
import PipelineListPage from '../../frontend/src/components/PipelineListPage';

describe('PipelineListPage', () => {
  it('renders the pipeline management heading', () => {
    render(<PipelineListPage />);
    expect(screen.getByText('Pipeline Management')).toBeInTheDocument();
  });

  it('displays a placeholder message', () => {
    render(<PipelineListPage />);
    expect(screen.getByText('List of pipelines will be displayed here.')).toBeInTheDocument();
  });
});
