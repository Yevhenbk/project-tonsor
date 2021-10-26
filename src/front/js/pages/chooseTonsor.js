import React, { useContext, useEffect } from "react";
import "../../styles/chooseTonsor.scss";
import mustache_img from "../../img/bigote_02.png";
import { Context } from "../store/appContext";
import { BarberCard } from "../component/barberCard.js";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Carousel from "react-bootstrap/Carousel";

import CortePelo from "../../img/cortePelo.png";
import Barba from "../../img/barba.png";
import Cut from "../../img/tonsorcut.png";

export const ChooseTonsor = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getBarbers();
	}, []);
	console.log(store);

	return (
		<div className="services_views ">
			<Carousel>
				<Carousel.Item interval={1000}>
					<img className="d-block w-100" src={Cut} alt="First slide" />
					<Carousel.Caption>
						<h3>Tu mejor look sin salir de casa</h3>
						<p>Nuestro equipo de Tonsores lo forman los mejores peluqueros</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className="d-block w-100" src={Barba} alt="Second slide" />
					<Carousel.Caption>
						<h3>Barbería</h3>
						<p>Nuestros Tonsores cuidarán de barba</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={CortePelo} alt="Third slide" />
					<Carousel.Caption>
						<h3>Corte de pelo</h3>
						<p>Manten tu look siempre perfecto.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			<div className="mustache-container">
				<img className="mustache_img" src={mustache_img} />
			</div>
			<div className="choose-tonsor-container">
				<h1 className="choose_tonsor_title">ELIGE TU TONSOR</h1>
			</div>

			<div className="barber_container_profiles">
				{store.barbers.map((barber, index) => {
					//if(type_service==barber.services)
					console.log(barber, "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
					return (
						<BarberCard
							key={`barber-${index}`}
							name={barber.name}
							services={barber.services}
							id={barber.id}
						/>
					);
				})}
			</div>

			<Map id="mapid" center={[40.4167, -3.70325]} zoom={6} scrollWheelZoom={false}>
				<TileLayer
					attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{store.barbers.map((barber, index) => {
					if (barber.lat != null && barber.long != null) {
						return (
							<Marker position={[barber.lat, barber.long]}>
								<Popup>
									<BarberCard
										key={`barber-${index}`}
										name={barber.name}
										services={barber.services}
										id={barber.id}
									/>
								</Popup>
							</Marker>
						);
					}
				})}
			</Map>
		</div>
	);
};
