import os

DATABASE_URL = os.environ.get("DATABASE_URL", "postgresql://delta_drill:FetVulture@78_2407@localhost:5432/dev_drillbot_db")

# Alembic configuration
class AlembicConfig:
    def __init__(self):
        self.script_location = 'backend/alembic'
        self.version_locations = ['backend/alembic/versions']
        self.url = DATABASE_URL
        self.file_template = "yyyymmdd_%%(revision)s_%(message)s.py"

alembic_cfg = AlembicConfig()

# This is a basic structure. For a real project, you'd typically use
# alembic.config.Config and manage more settings.
