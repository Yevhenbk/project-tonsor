"""empty message

Revision ID: 506c0372cd2c
Revises: 
Create Date: 2021-11-06 10:52:44.297624

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '506c0372cd2c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('account',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('img', sa.VARCHAR(), nullable=True),
    sa.Column('name', sa.VARCHAR(), nullable=False),
    sa.Column('lastname', sa.VARCHAR(), nullable=False),
    sa.Column('phone_number', sa.VARCHAR(), nullable=False),
    sa.Column('email', sa.VARCHAR(), nullable=False),
    sa.Column('_password', sa.VARCHAR(), nullable=False),
    sa.Column('address', sa.VARCHAR(), nullable=False),
    sa.Column('city', sa.VARCHAR(), nullable=False),
    sa.Column('cp', sa.VARCHAR(), nullable=False),
    sa.Column('is_client', sa.Boolean(), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('phone_number')
    )
    op.create_table('services',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.VARCHAR(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('barber',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('radio', sa.Integer(), nullable=True),
    sa.Column('id_account', sa.Integer(), nullable=True),
    sa.Column('lat', sa.Float(), nullable=True),
    sa.Column('long', sa.Float(), nullable=True),
    sa.ForeignKeyConstraint(['id_account'], ['account.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('client',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_account', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id_account'], ['account.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('barberServices',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('img', sa.VARCHAR(), nullable=True),
    sa.Column('cost', sa.Numeric(), nullable=False),
    sa.Column('discount', sa.Integer(), nullable=True),
    sa.Column('start_hour', sa.DateTime(), nullable=False),
    sa.Column('end_hour', sa.DateTime(), nullable=False),
    sa.Column('monday', sa.Boolean(), nullable=True),
    sa.Column('tuesday', sa.Boolean(), nullable=True),
    sa.Column('wednesday', sa.Boolean(), nullable=True),
    sa.Column('thursday', sa.Boolean(), nullable=True),
    sa.Column('friday', sa.Boolean(), nullable=True),
    sa.Column('saturday', sa.Boolean(), nullable=True),
    sa.Column('sunday', sa.Boolean(), nullable=True),
    sa.Column('category', sa.Enum('Pigmentacion', 'Depilacion de espalda', 'Corte de pelo', 'Manicura', 'Depilacion de torso', 'Depilacion de piernas', 'Pedicura', name='service_category'), nullable=False),
    sa.Column('description', sa.VARCHAR(), nullable=True),
    sa.Column('id_barber', sa.Integer(), nullable=True),
    sa.Column('id_services', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id_barber'], ['barber.id'], ),
    sa.ForeignKeyConstraint(['id_services'], ['services.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('review',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('text', sa.VARCHAR(), nullable=True),
    sa.Column('ratings', sa.Integer(), nullable=True),
    sa.Column('id_client', sa.Integer(), nullable=True),
    sa.Column('id_barber', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id_barber'], ['barber.id'], ),
    sa.ForeignKeyConstraint(['id_client'], ['client.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('appointment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('date_appointment', sa.DateTime(), nullable=False),
    sa.Column('id_barber_Services', sa.Integer(), nullable=True),
    sa.Column('id_client', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id_barber_Services'], ['barberServices.id'], ),
    sa.ForeignKeyConstraint(['id_client'], ['client.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('appointment')
    op.drop_table('review')
    op.drop_table('barberServices')
    op.drop_table('client')
    op.drop_table('barber')
    op.drop_table('services')
    op.drop_table('account')
    # ### end Alembic commands ###