from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import declarative_base, sessionmaker, relationship
from sqlalchemy.sql import func
import os

# Load database credentials from environment variables or use defaults
DATABASE_URL = os.environ.get("DATABASE_URL", "postgresql://delta_drill:FetVulture@78_2407@localhost:5432/dev_drillbot_db")

Base = declarative_base()

# --- User and Role Models ---
class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now(), server_default=func.now())

    roles = relationship("Role", secondary="user_roles", back_populates="users")

class Role(Base):
    __tablename__ = 'roles'
    id = Column(Integer, primary_key=True)
    name = Column(String, unique=True, nullable=False) # e.g., 'admin', 'creator', 'viewer'

    users = relationship("User", secondary="user_roles", back_populates="roles")

class UserRoles(Base):
    __tablename__ = 'user_roles'
    user_id = Column(Integer, ForeignKey('users.id'), primary_key=True)
    role_id = Column(Integer, ForeignKey('roles.id'), primary_key=True)

# --- Pipeline Models ---
class Pipeline(Base):
    __tablename__ = 'pipelines'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now(), server_default=func.now())

    stages = relationship("Stage", back_populates="pipeline", cascade="all, delete-orphan")

class Stage(Base):
    __tablename__ = 'stages'
    id = Column(Integer, primary_key=True)
    pipeline_id = Column(Integer, ForeignKey('pipelines.id'), nullable=False)
    name = Column(String, nullable=False)
    order = Column(Integer, nullable=False) # Sequence of the stage
    parameters = Column(String) # e.g., JSON string for stage configuration
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now(), server_default=func.now())

    pipeline = relationship("Pipeline", back_populates="stages")
    tasks = relationship("Task", back_populates="stage", cascade="all, delete-orphan")

# --- Task and Asset Models ---
class Task(Base):
    __tablename__ = 'tasks'
    id = Column(Integer, primary_key=True)
    stage_id = Column(Integer, ForeignKey('stages.id'), nullable=False)
    name = Column(String, nullable=False)
    status = Column(String, nullable=False, default='queued') # e.g., queued, running, completed, failed
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now(), server_default=func.now())
    output_path = Column(String) # Path to the generated output file

    stage = relationship("Stage", back_populates="tasks")
    assets = relationship("Asset", back_populates="task", cascade="all, delete-orphan")

class Asset(Base):
    __tablename__ = 'assets'
    id = Column(Integer, primary_key=True)
    task_id = Column(Integer, ForeignKey('tasks.id'), nullable=False)
    name = Column(String, nullable=False)
    path = Column(String, nullable=False) # File path or URL
    type = Column(String) # e.g., 'video', 'audio', 'image'
    metadata = Column(String) # e.g., JSON string for additional info
    uploaded_at = Column(DateTime(timezone=True), server_default=func.now())

    task = relationship("Task", back_populates="assets")

# --- Database Setup ---
# In a real application, you would typically have a separate engine/session setup
# This is a basic example to ensure models can be defined.
try:
    engine = create_engine(DATABASE_URL)
    Base.metadata.create_all(engine)
    print("Database models defined and tables created (if they didn't exist).")
except Exception as e:
    print(f"Error setting up database models: {e}")

# Example session maker (to be used in application logic)
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()
