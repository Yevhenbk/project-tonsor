"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from sqlalchemy import exc
from api.utils import generate_sitemap, APIException
from api.models import db, Account, Review, Barber, Services, Barber_Services, Appointment, Client

api = Blueprint('api', __name__)


@api.route('/account', methods=['GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200


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
    if not (name and lastname and phone_number and password and email and address and city and cp):
        return ({'error': 'Some fields are missing'}), 400
    #hasta aqui todo funciona bien, SEGURO
    
    account = Account(
        img=img, 
        name=name, 
        lastname=lastname, 
        phone_number=phone_number,
        email=email, 
        _password=password,
        address=address,
        city=city,
        cp=cp,
        is_barber=False,
        is_active=True
    )
    
    try:
        account.create()
        #return jsonify(account.to_dict()), 201
    except exc.IntegrityError:
        return ({'error': 'This email / phone number is already in use'}), 400
    client = Client(id_account=account.id)
    try:
        client.create()
        return jsonify(client.to_dict()), 201
    except exc.IntegrityError:
        return ({'error': 'This email / phone number is already in use'}), 400
    
    #barber = Barber(id_account=account.id)

    #try:
    #    barber.create()
    #    return jsonify(barber.to_dict()), 201
    #except exc.ItegrityError:
    #    return ({'error': 'This email / phone number is already in use'}), 400