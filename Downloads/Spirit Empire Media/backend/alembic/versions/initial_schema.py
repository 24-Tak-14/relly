from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = 'initial'
down_revision = None
branch_labels = None
depends_on = None

def upgrade():
    # Example: Create tables based on models
    op.create_table(
        'users',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('username', sa.String, unique=True, nullable=False),
        sa.Column('email', sa.String, unique=True, nullable=False),
        sa.Column('hashed_password', sa.String, nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.func.now()),
        sa.Column('updated_at', sa.DateTime(timezone=True), onupdate=sa.func.now(), server_default=sa.func.now())
    )
    op.create_table(
        'roles',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.String, unique=True, nullable=False)
    )
    op.create_table(
        'user_roles',
        sa.Column('user_id', sa.Integer, ForeignKey('users.id'), primary_key=True),
        sa.Column('role_id', sa.Integer, ForeignKey('roles.id'), primary_key=True)
    )
    # Add other tables (pipelines, stages, tasks, assets) here...

def downgrade():
    # Drop tables in reverse order
    op.drop_table('user_roles')
    op.drop_table('roles')
    op.drop_table('users')
    # Drop other tables...
