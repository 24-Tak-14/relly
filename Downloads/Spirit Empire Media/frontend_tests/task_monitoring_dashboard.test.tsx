// Test for TaskMonitoringDashboard component
import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskMonitoringDashboard from '../../frontend/src/components/TaskMonitoringDashboard';

describe('TaskMonitoringDashboard', () => {
  it('renders the task monitoring heading', () => {
    render(<TaskMonitoringDashboard />);
    expect(screen.getByText('Task Monitoring')).toBeInTheDocument();
  });

  it('displays a placeholder message', () => {
    render(<TaskMonitoringDashboard />);
    expect(screen.getByText('Real-time status of generation tasks will be displayed here.')).toBeInTheDocument();
  });
});
