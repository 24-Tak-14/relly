// Test for PipelineDetailPage component
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PipelineDetailPage from '../../frontend/src/components/PipelineDetailPage';

describe('PipelineDetailPage', () => {
  it('renders pipeline details with dynamic ID', () => {
    const testId = 'pipeline-123';
    render(
      <MemoryRouter initialEntries={[`/pipelines/${testId}`]}>
        <Routes>
          <Route path="/pipelines/:id" element={<PipelineDetailPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(`Pipeline Details: ${testId}`)).toBeInTheDocument();
  });

  it('displays a placeholder message', () => {
    render(
      <MemoryRouter initialEntries={['/pipelines/test-id']}>
        <Routes>
          <Route path="/pipelines/:id" element={<PipelineDetailPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Details for pipeline test-id will be displayed here.')).toBeInTheDocument();
  });
});
