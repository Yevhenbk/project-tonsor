from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
import os
import sys
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy import Column, ForeignKey, Integer, VARCHAR, Table, DateTime
#from werkzeug.security import check_password_hash

db = SQLAlchemy()

class Account(db.Model):
    __tablename__="account"
    id = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.VARCHAR, unique=True, nullable=False) 
    name = db.Column(db.VARCHAR, unique=True, nullable=False)
    lastname = db.Column(db.VARCHAR, unique=True, nullable=False)
    phone_number = db.Column(db.VARCHAR, unique=True, nullable=False)
    email = db.Column(db.VARCHAR, unique=True, nullable=False)
    _password = db.Column(db.VARCHAR, unique=False, nullable=False)
    address = db.Column(db.VARCHAR, unique=True, nullable=False)
    ciudad = db.Column(db.VARCHAR, unique=True, nullable=False)
    cp = db.Column(db.VARCHAR, unique=True, nullable=False)
    is_barber = db.Column(db.Boolean(), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    #relacion entre tablas
    fkAccoun_Review = relationship("Review")
    fkAccoun_Barber = relationship("Barber")
    fkAccount_cita = relationship("Cita")

    def __repr__(self):
        return '<Account %r>' % self.account
    
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
    text = db.Column(db.VARCHAR, unique=True, nullable=False)
    id_account = db.Column(db.Integer, ForeignKey("account.id"))
    id_barber = db.Column(db.Integer, ForeignKey("barber.id"))

    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<Review %r>' % self.review
    
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
    _password = db.Column(db.VARCHAR, unique=False, nullable=False)
    radio = db.Column(db.Integer, nullable=False)
    id_coustomer = db.Column(db.Integer, ForeignKey("account.id"))
    #relaciones
    fkBarber_review = relationship("Review")
    fkBarber_SERVICIOS = relationship("Barber_Servicio")

    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<Barber %r>' % self.barber
    
    def serialize (self):
        return {
            "id": self.id, 
            "password": self.password, 
            "radio": self.radio,
            "id_coustomer":self.raid_coustomer
        }

class Servicios(db.Model):
    __tablename__="servicios"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.VARCHAR, nullable=False)
    description = db.Column(db.VARCHAR, nullable=True)
    #relaciones
    fkServicios_Bservicios = relationship("Barber_Servicio")
  
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<Servicios %r>' % self.servicios

    def serialize (self):
        return {
            "id": self.id, 
            "name": self.name, 
            "description": self.description
        }

class Barber_Servicio(db.Model):
    __tablename__="barber_servicio"
    id = db.Column(db.Integer, primary_key=True)
    precio = db.Column(db.Integer, nullable=False)
    descuento = db.Column(db.Integer, nullable=False)
    tiempo = db.Column(db.Integer, nullable=False)
    description = db.Column(db.VARCHAR, unique=True, nullable=False)
    id_barber = db.Column(db.Integer, ForeignKey("barber.id"))
    id_servicio = db.Column(db.Integer, ForeignKey("servicios.id"))
    #relaciones
    fkBservicios_cita = relationship("Cita")

    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<Barber_Servicio %r>' % self.barber_servicio
    
    def serialize (self):
        return {
            "id": self.id, 
            "precio": self.precio, 
            "descuento": self.descuento, 
            "tiempo": self.tiempo, 
            "description": self.description,
            "id_barber": self.id_barber,
            "id_servicio": self.id_servicio
        }



class Cita(db.Model):
    __tablename__="cita"
    id = db.Column(db.Integer, primary_key=True)
    dia_cita = db.Column(db.Date, nullable=False)
    id_barber_servicio = db.Column(db.Integer, ForeignKey("barber_servicio.id"))
    id_account = db.Column(db.Integer, ForeignKey("account.id"))

    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<Cita %r>' % self.cita

    def serialize (self):
        return {
            "id": self.id, 
            "dia_cita": self.dia_cita, 
            "id_barber_servicio": self.id_barber_servicio,
            "id_account": self.id_account
        }