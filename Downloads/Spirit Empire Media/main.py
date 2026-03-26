
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Literal

# Assuming the app instance is here as per the test file import
app = FastAPI()

# In-memory storage for tasks (for simplicity, until DB is fully set up)
# In a real app, this would be replaced by database operations
tasks_db: Dict[int, Dict] = {}
next_task_id = 1

# Pydantic models
class TaskCreate(BaseModel):
    name: str
    status: Literal["queued", "running", "completed", "failed"] = "queued" # Default status

class TaskUpdateStatus(BaseModel):
    status: Literal["queued", "running", "completed", "failed"]

class Task(BaseModel):
    id: int
    name: str
    status: str

# --- API Endpoints ---

@app.post("/tasks/", response_model=Task)
def create_task(task: TaskCreate):
    global next_task_id
    new_task = {
        "id": next_task_id,
        "name": task.name,
        "status": task.status
    }
    tasks_db[next_task_id] = new_task
    next_task_id += 1
    return new_task

@app.get("/tasks/{task_id}", response_model=Task)
def get_task(task_id: int):
    task = tasks_db.get(task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return task

@app.put("/tasks/{task_id}/status", response_model=Task)
def update_task_status(task_id: int, status_update: TaskUpdateStatus):
    task = tasks_db.get(task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    # Basic validation of status transition (can be expanded)
    allowed_statuses = ["queued", "running", "completed", "failed"]
    if status_update.status not in allowed_statuses:
        raise HTTPException(status_code=422, detail=f"Invalid status: {status_update.status}. Allowed statuses are: {', '.join(allowed_statuses)}")

    task["status"] = status_update.status
    tasks_db[task_id] = task # Update in our in-memory db
    return task

# --- Example Root Endpoint ---
@app.get("/")
def read_root():
    return {"message": "AI Video Generation Pipeline API"}

# --- Placeholder for other parts of the app ---
# e.g., Pipeline models, etc.
# For now, we focus solely on the task status API part to satisfy the test.
