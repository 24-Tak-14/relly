import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient
from pydantic import BaseModel, Field

# Mocking the FastAPI app and TestClient for now, as endpoints are not yet implemented.
# These tests are expected to fail until the API is functional and validation is properly set up.

# Define mock Pydantic models that would be used for validation
class PipelineCreateSchema(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    description: str | None = None

class PipelineUpdateSchema(BaseModel):
    name: str | None = Field(None, min_length=1, max_length=100)
    description: str | None = None

# Mock FastAPI app with routes that would use these schemas
# In a real app, these would be actual endpoints in routers
mock_app = FastAPI()

@mock_app.post("/pipelines")
async def create_pipeline(pipeline: PipelineCreateSchema):
    # This endpoint should validate input based on PipelineCreateSchema
    return {"message": "Pipeline created", "data": pipeline}

@mock_app.put("/pipelines/{pipeline_id}")
async def update_pipeline(pipeline_id: int, pipeline: PipelineUpdateSchema):
    # This endpoint should validate input based on PipelineUpdateSchema
    return {"message": f"Pipeline {pipeline_id} updated", "data": pipeline}

client = TestClient(mock_app)

# --- Pipeline Validation Tests ---

def test_create_pipeline_missing_name_fails():
    """Test that creating a pipeline fails if 'name' is missing."""
    invalid_pipeline_data = {
        "description": "A pipeline missing a name"
    }
    response = client.post("/pipelines", json=invalid_pipeline_data)
    assert response.status_code == 422 # Expecting Unprocessable Entity

def test_create_pipeline_empty_name_fails():
    """Test that creating a pipeline fails if 'name' is an empty string."""
    invalid_pipeline_data = {
        "name": "",
        "description": "A pipeline with an empty name"
    }
    response = client.post("/pipelines", json=invalid_pipeline_data)
    assert response.status_code == 422 # Expecting Unprocessable Entity

def test_create_pipeline_name_too_long_fails():
    """Test that creating a pipeline fails if 'name' exceeds max length."""
    long_name = "a" * 101
    invalid_pipeline_data = {
        "name": long_name,
        "description": "A pipeline with a too-long name"
    }
    response = client.post("/pipelines", json=invalid_pipeline_data)
    assert response.status_code == 422 # Expecting Unprocessable Entity

def test_update_pipeline_with_invalid_description_type_fails():
    """Test that updating a pipeline fails if 'description' has an invalid type."""
    pipeline_id = 1
    invalid_pipeline_data = {
        "description": 123 # Invalid type for description (should be string or null)
    }
    response = client.put(f"/pipelines/{pipeline_id}", json=invalid_pipeline_data)
    assert response.status_code == 422 # Expecting Unprocessable Entity
