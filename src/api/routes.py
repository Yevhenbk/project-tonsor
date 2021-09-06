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

    
    if user.is_client:
        client = Client.get_by_id_account(user.id)
        print(client)
        print(check_password_hash(user._password, password))
        if client and user.is_active and check_password_hash(user._password, password):
            token = create_access_token(identity=client.id, expires_delta=timedelta(minutes=120))
            return {'token': token}, 200

    else:
        barber = Barber.get_by_id_account(user.id)

        if barber and user.is_active and check_password_hash(user._password, password):
            token = create_access_token(identity=barber.id, expires_delta=timedelta(minutes=120))
            return {'token': token}, 200

    
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
    #hasta aqui todo funciona bien, SEGURO
    
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
        
    barber = Barber(id_account=account.id)
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


    