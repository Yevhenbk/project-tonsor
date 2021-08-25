
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
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    
    have_barber = relationship("Barber", back_populates="account")
    have_client = relationship("Client", back_populates="account")

    

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
            "city": self.ciudad, 
            "cp": self.cp
        }


class Client(db.Model):
    __tablename__="client"
    id = db.Column(db.Integer, primary_key=True)

    id_account = db.Column(db.Integer, ForeignKey("account.id"))

    have_appointment = relationship("Appointment", backref="client")
    have_review = relationship("Review", backref="client")


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
            "text": self.text,
            "ratings": self.ratings 
        }

class Barber(db.Model):
    __tablename__="barber"
    id = db.Column(db.Integer, primary_key=True)
    radio = db.Column(db.Integer, nullable=False)

    have_account = db.Column(db.Integer, ForeignKey("account.id"))
    have_review = relationship("Review", backref="barber")
    have_barber_services = relationship("Barber_Services", backref="barber")

    def __repr__(self):
        return f'Barber {self.barber}'
    
    def serialize (self):
        return {
            "id": self.id, 
            "radio": self.radio
        }

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
            "name": self.name, 
            "description": self.description
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

    have_barber = relationship("Barber",  backref="barberServices")
    have_appointment = relationship("Appointment", backref="barber_services")

    def __repr__(self):
        return f'Barber_Services {self.barber_services}'
    
    def serialize (self):
        return {
            "id": self.id, 
            "cost": self.cost, 
            "discount": self.discount, 
            "date": self.date, 
            "description": self.description
        }



class Appointment(db.Model):
    __tablename__="appointment"
    id = db.Column(db.Integer, primary_key=True)
    date_appointment = db.Column(db.Date, nullable=False)
    id_barber_Services = db.Column(db.Integer, ForeignKey("barberServices.id"))
    id_client = db.Column(db.Integer, ForeignKey("client.id"))



    def __repr__(self):
        return f'Appointment {self.appointment}'

    
    def serialize (self):
        return {
            "id": self.id, 
            "date_Appointment": self.date_appointment
        }
    