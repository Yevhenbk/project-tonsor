from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class ACCOUNT(db.Model):
    __tablename__="account"
    id = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.String(120), unique=True, nullable=False) 
    name = db.Column(db.String(120), unique=True, nullable=False)
    lastname = db.Column(db.String(120), unique=True, nullable=False)
    phone_number = db.Column(db.String(9), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    _password = db.Column(db.String(80), unique=False, nullable=False)
    address = db.Column(db.String(120), unique=True, nullable=False)
    ciudad = db.Column(db.String(100), unique=True, nullable=False)
    cp = db.Column(db.String(5), unique=True, nullable=False)
    is_barber = db.Column(db.Boolean(), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    #relacion entre tablas
    fkAccoun_Review = relationship("REVIEW")
    fkAccoun_Barber = relationship("BARBER")
    fkAccount_cita = relationship("CITA")


class REVIEW(db.Model):
    __tablename__="review"
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(120), unique=True, nullable=False)
    id_account = db.Column(db.Integer, ForeignKey("account.id"))
    id_barber = db.Column(db.Integer, ForeignKey("barber.id"))

    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

class BARBER(db.Model):
    __tablename__="barber"
    id = db.Column(db.Integer, primary_key=True)
    _password = db.Column(db.String(80), unique=False, nullable=False)
    radio = db.Column(db.Integer(120), nullable=False)
    id_coustomer = db.Column(db.Integer, ForeignKey("account.id"))
    #relaciones
    fkBarber_review = relationship("REVIEW")
    fkBarber_SERVICIOS = relationship("BARBER_SERCIVIO")

    is_active = db.Column(db.Boolean(), unique=False, nullable=False)




class SERVICIOS(db.Model):
    __tablename__="servicios"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    #relaciones
    fkServicios_Bservicios = relationship("BARBER_SERCIVIO")
  
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

class BARBER_SERCIVIO(db.Model):
    __tablename__="barber_servicio"
    id = db.Column(db.Integer, primary_key=True)
    precio = db.Column(db.Integer(120), nullable=False)
    descuento = db.Column(db.Integer(120), nullable=False)
    tiempo = db.Column(db.Integer(120), nullable=False)
    description = db.Column(db.String(120), unique=True, nullable=False)
    id_barber = db.Column(db.Integer, ForeignKey("barber.id"))
    id_servicio = db.Column(db.Integer, ForeignKey("servicios.id"))
    #relaciones
    fkBservicios_cita = relationship("CITA")

    is_active = db.Column(db.Boolean(), unique=False, nullable=False)


class CITA(db.Model):
    __tablename__="cita"
    id = db.Column(db.Integer, primary_key=True)
    dia_cita = db.Column(db.Date, nullable=False)
    id_barber_servicio = db.Column(db.Integer, ForeignKey("barber_servicio.id"))
    id_account = db.Column(db.Integer, ForeignKey("account.id"))

    is_active = db.Column(db.Boolean(), unique=False, nullable=False)