
import os
import sys
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import create_engine
from sqlalchemy import create_engine
from sqlalchemy.dialect.postgresql import VARCHAR, Decimal
from sqlalchemy import Column, ForeignKey, Integer, Table, DateTime
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
    ciudad = db.Column(db.VARCHAR, unique=False, nullable=False)
    cp = db.Column(db.VARCHAR, unique=False, nullable=False)
    is_barber = db.Column(db.Boolean(), unique=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    #relacion entre tablas
    fkAccoun_Review = relationship("Review")
    fkAccoun_Barber = relationship("Barber")
    fkAccount_Appointment = relationship("Appointment")

    def __repr__(self):
        return f'Account {self.account}'
    
    def serialize (self):
        return {
            "id": self.id,
            "img": self.img, 
            "name": self.name, 
            "lastname":self.lastname, 
            "phone_number": self.phone_number,
            "email": self.email, 
            "password": self.password,
            "address": self.address, 
            "ciudad": self.ciudad, 
            "cp": self.cp, 
            "is_barber": self.is_barber, 
            "is_active": self.is_active
        }


class Review(db.Model):
    __tablename__="review"
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.VARCHAR, unique=False, nullable=True)
    id_account = db.Column(db.Integer, ForeignKey("account.id"))
    id_barber = db.Column(db.Integer, ForeignKey("barber.id"))
    ratings = db.Column(db.Integer, unique=False, nullable=True)


    def __repr__(self):
        return f'Review {self.review}'
    
    def serialize (self):
        return {
            "id": self.id, 
            "text": self.text, 
            "id_account": self.id_account, 
            "id_barber": self.id_barber
        }

class Barber(db.Model):
    __tablename__="barber"
    id = db.Column(db.Integer, primary_key=True)
    radio = db.Column(db.Integer, nullable=False)
    id_customer = db.Column(db.Integer, ForeignKey("account.id"))
    #relaciones
    fkBarber_review = relationship("Review")
    fkBarber_Services = relationship("Barber_Services")

    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'Barber {self.barber}'
    
    def serialize (self):
        return {
            "id": self.id, 
            "password": self.password, 
            "radio": self.radio,
            "id_customer":self.radio_customer
        }

class Services(db.Model):
    __tablename__="services"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.VARCHAR, nullable=False)
    #relaciones
    fkServices_BServices = relationship("Barber_Services")
  
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'Services {self.services}'


    def serialize (self):
        return {
            "id": self.id, 
            "name": self.name, 
            "description": self.description
        }

class Barber_Services(db.Model):
    __tablename__="barber_services"

    id = db.Column(db.Integer, primary_key=True)
    cost = db.Column(db.Decimal, nullable=False)
    discount = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    description = db.Column(db.VARCHAR, unique=False, nullable=False)
    id_barber = db.Column(db.Integer, ForeignKey("barber.id"))
    id_services = db.Column(db.Integer, ForeignKey("Services.id"))
    have_Barber = relationship("Barber")
    #relaciones
    fkBServices_Appointment = relationship("Appointment")

    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'Barber_Services {self.barber_services}'
    
    def serialize (self):
        return {
            "id": self.id, 
            "cost": self.cost, 
            "discount": self.discount, 
            "date": self.date, 
            "description": self.description,
            "id_barber": self.id_barber,
            "id_Services": self.id_Services
        }



class Appointment(db.Model):
    __tablename__="appointment"
    id = db.Column(db.Integer, primary_key=True)
    date_appointment = db.Column(db.Date, nullable=False)
    id_barber_Services = db.Column(db.Integer, ForeignKey("barber_services.id"))
    id_account = db.Column(db.Integer, ForeignKey("account.id"))



    def __repr__(self):
        return f'Appointment {self.appointment}'

    
    def serialize (self):
        return {
            "id": self.id, 
            "date_Appointment": self.date_appointment, 
            "id_barber_Services": self.id_barber_services,
            "id_account": self.id_account
        }