"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from datetime import timedelta

from flask import Flask, request, jsonify, url_for, Blueprint
from sqlalchemy import exc
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

from werkzeug.security import check_password_hash, generate_password_hash

from api.utils import generate_sitemap, APIException
from api.models import db, Account, Review, Barber, Services, Barber_Services, Appointment, Client

from geopy.geocoders import Nominatim
geolocator = Nominatim(user_agent="barberApp")

import cloudinary
import cloudinary.uploader
import cloudinary.api
import os

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

import random
from geopy.geocoders import Nominatim
geolocator=Nominatim(user_agent="tonsor")

api = Blueprint('api', __name__)


@api.route('/login', methods=['POST'])
def login():
    email = request.json.get(
        'email', None
    )
    password = request.json.get(
        'password', None
    )
    if not (email and password):
        return ({'error': 'Wrong email or password'}), 400

    user = Account.get_by_email(email)
    print(user)
    if not user: return ({'error': 'usuario no encontrado'}), 400

    
    if user.is_client:
        client = Client.get_by_id_account(user.id)
        print(user.name)
        print(check_password_hash(user._password, password))
        if client and user.is_active and check_password_hash(user._password, password):
            token = create_access_token(identity=client.id, expires_delta=timedelta(minutes=120))
            return {'token': token, 'role': 1, "name":user.name}, 200

    else:
        barber = Barber.get_by_id_account(user.id)

        if barber and user.is_active and check_password_hash(user._password, password):
            token = create_access_token(identity=barber.id, expires_delta=timedelta(minutes=120))
            return {'token': token, 'role': 2, "name":user.name}, 200

    
    return ({'error': 'Wrong email or password'}), 400


@api.route('/client', methods=['POST'])
def create_client():
    img = request.json.get(
        'img', None
    )
    name = request.json.get(
        'name', None
    ) 
    lastname = request.json.get(
        'lastname', None
    ) 
    phone_number = request.json.get(
        'phone_number', None
    ) 
    email = request.json.get(
        'email', None
    )
    password = request.json.get(
        'password', None
    ) 
    address = request.json.get(
        'address', None
    )
    city = request.json.get(
        'city', None
    ) 
    cp = request.json.get(
        'cp', None
    )
    print(name, lastname, phone_number, email, password, address, city, cp)
    if not (name and lastname and phone_number and password and email and address and city and cp):
        return ({'error': 'Some fields are missing'}), 400
    
    
    account = Account(
        img=img, 
        name=name, 
        lastname=lastname, 
        phone_number=phone_number,
        email=email, 
        _password=generate_password_hash(password, method='pbkdf2:sha256', salt_length=16),
        address=address,
        city=city,
        cp=cp,
        is_client=True,
        is_active=True
    )
    print(account)
    
    
    try:
        account.create()
        
    except exc.IntegrityError:
        return ({'error': 'This email / phone number is already in use'}), 400
    
    client = Client(id_account=account.id)
    try:
        client.create()
        return jsonify(client.to_dict()), 201
    except exc.IntegrityError:
        return ({'error': 'This email / phone number is already in use'}), 400


@api.route('/client/<int:id>', methods=['GET'])
@jwt_required()
def get_client_profile(id):
    current_user = get_jwt_identity()

    if current_user == id: 
        client = Client.get_by_id(id)

        if client:
            return jsonify(client.to_dict()), 200

        return({'error': 'Not fount'})
    
    return({'error': 'Access denied'}), 401


@api.route('/barber', methods=['POST'])
def create_barber():
    img = request.json.get(
        'img', None
    )
    name = request.json.get(
        'name', None
    ) 
    lastname = request.json.get(
        'lastname', None
    ) 
    phone_number = request.json.get(
        'phone_number', None
    ) 
    email = request.json.get(
        'email', None
    )
    password = request.json.get(
        'password', None
    ) 
    address = request.json.get(
        'address', None
    )
    city = request.json.get(
        'city', None
    ) 
    cp = request.json.get(
        'cp', None
    )
    
    if not (name and lastname and phone_number and password and email and address and city and cp):
        return ({'error': 'Some fields are missing'}), 400

    location = geolocator.geocode(address + " " + city)
    
    location2 = geolocator.geocode(location)
    

    account = Account(
        img=img, 
        name=name, 
        lastname=lastname, 
        phone_number=phone_number,
        email=email, 
        _password=generate_password_hash(password, method='pbkdf2:sha256', salt_length=16),
        address=address,
        city=city,
        cp=cp,
        is_client=False,
        is_active=True
    )
    

    try:
        account.create()
        
    except exc.IntegrityError:
        return ({'error': 'This email / phone number is already in use'}), 400
        
    barber = Barber(
        id_account=account.id,
        lat=location2.latitude, 
        long=location2.longitude, 

    )
    print(barber)
    try:
        barber.create()
        return jsonify(barber.to_dict()), 201
    except exc.IntegrityError:
        return ({'error': 'This email / phone number is already in use'}), 400


@api.route('/barber/<int:id>', methods=['GET'])
def get_barber_profile(id):
    barber = Barber.get_by_id(id)
    

    if barber:
        return jsonify(barber.to_dict()), 200

    return({'error': 'Not fount'})



@api.route('/barber_services', methods=['POST'])
@jwt_required()
def add_new_service():
    print()
    #congif cloudinary
    cloudinary.config(
        cloud_name= os.getenv('CLOUD_NAME'),
        api_key= os.getenv('API_KEY'),
        api_secret= os.getenv('API_SECRET')
    )
    img = request.files.get(
        'file', None
    )
    name = request.form.get(
        'name', None
    ) 
    cost = request.form.get(
        'cost', None
    ) 
    start_hour = request.form.get(
        'start_hour', None
    ) 
    end_hour = request.form.get(
        'end_hour', None
    )
    monday = request.form.get(
        'monday', None
    ) 
    tuesday = request.form.get(
        'tuesday', None
    )
    wednesday = request.form.get(
        'wednesday', None
    ) 
    thursday = request.form.get(
        'thursday', None
    )
    friday = request.form.get(
        'friday', None
    ) 
    saturday = request.form.get(
        'saturday', None
    )
    sunday = request.form.get(
        'sunday', None
    ) 
    category = request.form.get(
        'category', None
    )
    description = request.form.get(
        'description', None
    ) 
    #validar la extension del archivo
    if img and img.filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS:
            print("si")
            upload_result = cloudinary.uploader.upload(img)
            if upload_result:
                image_url = upload_result.get('secure_url')
                file_name = img.filename
    
    print(request.form)
    #if id_barber=True:
    if not (name and cost and start_hour and end_hour and category):
        return ({'error': 'Some fields are missing'}), 400
    barber_services = Barber_Services(
        img=img, 
        name=name, 
        cost=cost, 
        start_hour=start_hour,
        end_hour=end_hour, 
        monday=monday,
        tuesday=tuesday,
        wednesday=wednesday,
        thursday=thursday,
        friday=friday,
        saturday=saturday,
        sunday=sunday,
        category=category,
        description=description,
        id_barber=id_barber
    )
    print(barber_services.to_dict())

    try:
        barber_created = barber_services.create()
        return jsonify(barber_created.to_dict()), 201
        
    except exc.IntegrityError:
        return ({'error': 'Unexpected error'}), 400



@api.route('/barber', methods=['GET'])
def get_barber_all():
    barbers = Barber.get_all()
    print(barbers,"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    
    if barbers:
        barbers_to_dict = [barber.to_dict() for barber in barbers ]
        return jsonify(barbers_to_dict), 200 

    return jsonify({'error': 'Barbers no fount¡¡¡¡'}), 404

#new
@api.route('barber/<int:id>/review', methods=['POST'])
@jwt_required()#user must be loging
def create_review(id):
    text = request.json.get('text', None)
    ratings = random.randint(1,5)
    client_id= get_jwt_identity()
    if not text :
        return({'error': 'Some info are missing'}), 409
    
    print(client_id)
    print(id)

    review_client= Review(
        text=text, 
        ratings=ratings,
        id_barber=id,
        id_client=client_id) 

    try:
        review_client.create()
        return jsonify(review_client.serialize()), 201
    except exc.IntegrityError:
        return ({'error': 'Review can not save up'}), 500

@api.route('/barber/<int:id>/review', methods=['GET'])
def get_review_by_id(id):
    reviews = Review.query.filter_by(id_barber=id)
    print(reviews,"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    #account = Account.get_by_id(id)
    #account.name
    if reviews:
        reviews_to_dict=[]
        for review in reviews:
            user=Client.query.filter_by(id=review.id_client).first().to_dict()
            review_to_dict=review.serialize()
            review_to_dict["client_name"]=user["name"]
            review_to_dict["client_img"]=user["img"]
            reviews_to_dict.append(review_to_dict)
        return jsonify(reviews_to_dict), 200 

    return jsonify({'error': 'reviews no fount¡¡¡¡'}), 404


#barbers appointment
@api.route('/appointment', methods=['POST'])
@jwt_required()
def add_new_appointment():
    print("llego")
    date_appointment = request.json.get(
        'date_appointment', None
    ) 

    if not (date_appointment):
        return ({'error': 'Some fields are missing'}), 400
    appointment = Appointment( 
        date_appointment=date_appointment
    )

    try:
        appointment_created = appointment.create()
        return jsonify(appointment_created.to_dict()), 201
        
    except exc.IntegrityError:
        return ({'error': 'Unexpected error'}), 400


@api.route('/appointment', methods=['GET'])
def get_appointment_request():
    barber_services = Barber_Services.query.filter_by(id_barber=1).all()
    appointments = []

    for service in barber_services:
        for appointment in Appointment.query.filter_by(id_barber_Services=service.id).all():
            appointments.append(appointment.to_dict())
    
    if appointments:
        return jsonify(appointments), 200
    
    return({"error": "Not found"}), 404