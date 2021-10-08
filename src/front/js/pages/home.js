import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import bigote_02 from "../../img/bigote_02.png";
import { Buscador } from "../component/buscador.js";
import Register from "../component/registerBarber.jsx";

export const Home = () => {
	return (
		<div className="father-div">
			<div className="header-nav" />
			<Buscador />
			<img className="emo-barb" src={bigote_02} />
			<h1 className="h1-header">Manter tu cabello siempre perfecto ahora es fácil</h1>
			<p className="p-dark text-center">
				TONSOR hace que sea muy sencillo mantener un look siempre perfecto, aun cuando no tengas tiempo y
				estando desde la comodidad de tu casa. Sólo tienes que selecionar tu ubicación, hora y servicio que
				deseas; del resto nos encarnamos nosotros.
			</p>

			<div className="body-service text-center">
				<h1 className="h1-header position-h1 d-flex ">
					SELECCIONA &nbsp;
					<span style={{ color: "#242331" }}>TU SERVICIO</span>
				</h1>
				<div className="div-service row gy-2">
					<div className="col-4">
						<div className="btn img-service-global img-beard" />
						<p className="p-dark">Corte de cabello y Barbería</p>
					</div>
					<div className="col-4">
						<div className="btn img-back img-service-global" />
						<p className="p-dark">Depilación de espalda</p>
					</div>
					<div className="col-4">
						<div className="btn img-chest img-service-global" />
						<p className="p-dark">Depilación de torso</p>
					</div>
					<div className="col-4">
						<div className="btn img-leg img-service-global" />
						<p className="p-dark">Depilación de piernas</p>
					</div>
					<div className="col-4">
						<div className="btn img-manicure img-service-global" />
						<p className="p-dark">Manicure</p>
					</div>
					<div className="col-4">
						<div className="btn img-pedicure img-service-global" />
						<p className="p-dark">Pedicure</p>
					</div>
				</div>
			</div>
			<div className="body-service row justify-content-center m-lg">
				<div className="barber-card col-8" />
				<div className="register-barb col-4">
					<h1 className="h1-header">
						¿Eres un Profesional?{" "}
						<span style={{ color: "#242331" }}>Únete a nuestro equipo de TONSORES</span>
					</h1>
					<p className="p-dark">
						Unirte a nuestro equipo es muy sencillo, sólo debes registrarte y seleccionar los servicios que
						deseas ofrecer.{" "}
					</p>
					<div className="butt-log-barb">
						<Register />
					</div>
				</div>
			</div>
		</div>
	);
};
