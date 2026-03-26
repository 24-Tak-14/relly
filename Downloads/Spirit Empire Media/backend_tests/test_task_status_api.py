
from fastapi.testclient import TestClient
from main import app  # Assuming your FastAPI app instance is in main.py

client = TestClient(app)

def test_create_and_get_task_status():
    # Create a dummy pipeline or task first if necessary for context
    # For now, assume we can create a task directly

    # Test initial task creation and status
    response = client.post("/tasks/", json={"name": "video_render_task", "status": "queued"})
    assert response.status_code == 200
    task_id = response.json()["id"]
    assert response.json()["name"] == "video_render_task"
    assert response.json()["status"] == "queued"

    # Test updating task status to running
    response = client.put(f"/tasks/{task_id}/status", json={"status": "running"})
    assert response.status_code == 200
    assert response.json()["status"] == "running"

    # Test updating task status to completed
    response = client.put(f"/tasks/{task_id}/status", json={"status": "completed"})
    assert response.status_code == 200
    assert response.json()["status"] == "completed"

    # Test updating task status to failed
    response = client.put(f"/tasks/{task_id}/status", json={"status": "failed"})
    assert response.status_code == 200
    assert response.json()["status"] == "failed"

    # Test getting task status
    response = client.get(f"/tasks/{task_id}")
    assert response.status_code == 200
    assert response.json()["status"] == "failed"

def test_invalid_status_update():
    # Assume a task exists or create one
    response = client.post("/tasks/", json={"name": "another_task", "status": "queued"})
    task_id = response.json()["id"]

    # Attempt to update with an invalid status
    response = client.put(f"/tasks/{task_id}/status", json={"status": "processing"})
    assert response.status_code == 422 # Or 400, depending on FastAPI validation setup

def test_task_status_history():
    # This test would require a more complex backend setup to track history
    # For now, we can assert that status updates are reflected
    response = client.post("/tasks/", json={"name": "history_task", "status": "queued"})
    task_id = response.json()["id"]

    client.put(f"/tasks/{task_id}/status", json={"status": "running"})
    client.put(f"/tasks/{task_id}/status", json={"status": "completed"})

    response = client.get(f"/tasks/{task_id}")
    assert response.status_code == 200
    assert response.json()["status"] == "completed" # Ensure the latest status is fetched

# Note: The actual backend implementation for /tasks/ and /tasks/{task_id}/status
# needs to be created in main.py or a dedicated router file.
# These tests are designed to FAIL until the backend logic is implemented.

# Test to ensure tasks are not created with invalid statuses initially
def test_create_task_with_invalid_status():
    response = client.post("/tasks/", json={"name": "invalid_status_task", "status": "unknown"})
    assert response.status_code == 422 # Expecting validation error

# Test to ensure task creation without status defaults to a sensible value (e.g., queued)
def test_create_task_without_status():
    response = client.post("/tasks/", json={"name": "default_status_task"})
    assert response.status_code == 200
    assert response.json()["status"] == "queued" # Assuming "queued" is the default


