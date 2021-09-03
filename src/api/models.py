
import os
import sys
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from sqlalchemy.dialects.postgresql import VARCHAR
from sqlalchemy import Column, ForeignKey, Integer, Table, DateTime, Numeric
#from werkzeug.security import check_password_hash

db = SQLAlchemy()

class Account(db.Model):
    __tablename__="account"
    id = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.VARCHAR, unique=False, default=False, nullable=True) 
    name = db.Column(db.VARCHAR, unique=False, nullable=False)
    lastname = db.Column(db.VARCHAR, unique=False, nullable=False)
    phone_number = db.Column(db.VARCHAR, unique=True, nullable=False)
    email = db.Column(db.VARCHAR, unique=True, nullable=False)
    _password = db.Column(db.VARCHAR, unique=False, nullable=False)
    address = db.Column(db.VARCHAR, unique=False, nullable=False)
    city = db.Column(db.VARCHAR, unique=False, nullable=False)
    cp = db.Column(db.VARCHAR, unique=False, nullable=False)
    is_client = db.Column(db.Boolean(), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    
    have_barber = relationship("Barber", backref="account")
    have_client = relationship("Client", backref="account")

    

    def __repr__(self):
        return f'Account {self.name}'
    
    def serialize (self):
        return {
            "id": self.id,
            "img": self.img, 
            "name": self.name, 
            "lastname":self.lastname, 
            "phone_number": self.phone_number,
            "email": self.email,
            "address": self.address, 
            "city": self.city, 
            "cp": self.cp
        }

    @classmethod
    def get_by_id(cls, id):
        account = cls.query.get(id)
        return account

    @classmethod
    def get_by_email(cls, email):
        account = cls.query.filter_by(email=email).one_or_none()
        return account

    def create(self):
        db.session.add(self)
        db.session.commit()

class Client(db.Model):
    __tablename__="client"
    id = db.Column(db.Integer, primary_key=True)
    id_account = db.Column(db.Integer, ForeignKey("account.id"))

    have_appointment = relationship("Appointment", backref="client")
    have_review = relationship("Review", backref="client")

    def __repr__(self):
        return f'Client {self.id}'

    def to_dict(self):
        client = Account.get_by_id(self.id_account)

        return {
            "id": self.id,
            "img": client.img, 
            "name": client.name, 
            "lastname":client.lastname, 
            "phone_number": client.phone_number,
            "email": client.email,
            "address": client.address, 
            "city": client.city, 
            "cp": client.cp
        }

    @classmethod
    def get_by_id(cls, id):
        client = cls.query.get(id)
        return client

    @classmethod
    def get_by_id_account(cls, id):
        client = cls.query.filter_by(id_account = id).one_or_none()
        return client

    def create(self):
        db.session.add(self)
        db.session.commit()


class Review(db.Model):
    __tablename__="review"
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.VARCHAR, unique=False, nullable=True)
    ratings = db.Column(db.Integer, unique=False, nullable=True)

    id_client = db.Column(db.Integer, ForeignKey("client.id"))
    id_barber = db.Column(db.Integer, ForeignKey("barber.id"))

    def __repr__(self):
        return f'Review {self.review}'
    
    def serialize (self):
        return {
            "id": self.id, 
            "id_client": self.id_client,
            "text": self.text,
            "ratings": self.ratings 
        }


class Barber(db.Model):
    __tablename__="barber"
    id = db.Column(db.Integer, primary_key=True)
    radio = db.Column(db.Integer, nullable=True)
    id_account = db.Column(db.Integer, ForeignKey("account.id"))

    have_review = relationship("Review", backref="barber")
    have_barber_services = relationship("Barber_Services", back_populates="barber", overlaps="barber, have_barber_services")

    def __repr__(self):
        return f'Barber {self.id}'

    def serialize (self):
        return {
            "id": self.id,
            "id_account": self.id_account, 
            "radio": self.radio
        }


    def to_dict(self):
        barber = Account.get_by_id(self.id_account)

        return {
            "id": self.id,
            "img": barber.img, 
            "name": barber.name, 
            "lastname":barber.lastname, 
            "phone_number": barber.phone_number,
            "email": barber.email,
            "address": barber.address, 
            "city": barber.city, 
            "cp": barber.cp
        }

    @classmethod
    def get_by_id(cls, id):
        barber = cls.query.get(id)
        return barber

    @classmethod
    def get_by_id_account(cls, id):
        barber = cls.query.filter_by(id_account = id).one_or_none()
        return barber

    def create(self):
        db.session.add(self)
        db.session.commit()
    
    @classmethod
    def get_all(cls):
        print("get all")
        barbers = cls.query.all()
        return barbers


class Services(db.Model):
    __tablename__="services"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.VARCHAR, unique=False, nullable=False)

    have_barber_services = relationship("Barber_Services", backref="services")

    def __repr__(self):
        return f'Services {self.services}'

    def serialize (self):
        return {
            "id": self.id, 
            "name": self.name
        }


class Barber_Services(db.Model):
    __tablename__="barberServices"
    id = db.Column(db.Integer, primary_key=True)
    cost = db.Column(db.Numeric, nullable=False)
    discount = db.Column(db.Integer, nullable=True)
    date = db.Column(db.DateTime, nullable=False)
    description = db.Column(db.VARCHAR, unique=False, nullable=False)
    id_barber = db.Column(db.Integer, ForeignKey("barber.id"))
    id_services = db.Column(db.Integer, ForeignKey("services.id"))

    have_barber = relationship("Barber",  backref="barberServices", overlaps="barber, have_barber_services")
    have_appointment = relationship("Appointment", backref="barberServices")

    def __repr__(self):
        return f'Barber_Services {self.barberServices}'
    
    def serialize (self):
        return {
            "id": self.id, 
            "cost": self.cost, 
            "discount": self.discount, 
            "date": self.date, 
            "description": self.description, 
            "id_barber": self.id_barber
        }


class Appointment(db.Model):
    __tablename__="appointment"
    id = db.Column(db.Integer, primary_key=True)
    date_appointment = db.Column(db.DateTime, nullable=False)
    id_barber_Services = db.Column(db.Integer, ForeignKey("barberServices.id"))
    id_client = db.Column(db.Integer, ForeignKey("client.id"))

    def __repr__(self):
        return f'Appointment {self.appointment}'

    def serialize (self):
        return {
            "id": self.id, 
            "date_Appointment": self.date_appointment, 
            "id_barber_Services":self.id_barber_Services,
            "id_client": self.id_client 
        }
    