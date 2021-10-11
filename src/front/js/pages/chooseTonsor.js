import React, { useContext, useEffect } from "react";
import "../../styles/chooseTonsor.scss";
import mustache_img from "../../img/bigote_02.png";
import { Context } from "../store/appContext";
import { BarberCard } from "../component/barberCard.js";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const ChooseTonsor = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getBarbers();
	}, []);
	console.log(store);

	return (
		<div className="services_views ">
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

			<Map id="mapid" center={[40.4167, -3.70325]} zoom={13} scrollWheelZoom={false}>
				<TileLayer
					attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[40.4167, -3.70325]}>
					<Popup>
						<BarberCard />
					</Popup>
				</Marker>
			</Map>
		</div>
	);
};
