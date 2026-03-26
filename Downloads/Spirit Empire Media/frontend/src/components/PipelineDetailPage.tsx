// Placeholder for the detail view of a single pipeline
import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming routing is set up

const PipelineDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get pipeline ID from URL

  return (
    <div>
      <h2>Pipeline Details: {id}</h2>
      <p>Details for pipeline {id} will be displayed here.</p>
      {/* Placeholder for pipeline details */}
    </div>
  );
};

export default PipelineDetailPage;
