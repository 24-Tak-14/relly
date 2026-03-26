// Placeholder for the form to create/edit pipelines
import React from 'react';

const PipelineForm: React.FC = () => {
  return (
    <div>
      <h3>Pipeline Configuration</h3>
      <form>
        <div>
          <label htmlFor="pipelineName">Pipeline Name:</label>
          <input type="text" id="pipelineName" name="pipelineName" />
        </div>
        {/* Add more form fields for pipeline configuration */}
        <button type="submit">Save Pipeline</button>
      </form>
    </div>
  );
};

export default PipelineForm;
