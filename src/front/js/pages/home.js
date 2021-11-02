import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import bigote_02 from "../../img/bigote_02.png";
import vector from "../../img/VECTOR-PELUQUERO-CUT.png";
import { Buscador } from "../component/buscador.js";
import RegisterBarber from "../component/registerBarber.jsx";

import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="father-div">
			<div className="header-nav" />
			<Buscador />

			<div className="mostache-container">
				<img className="emo-barb" src={bigote_02} />
				<h1 className="h1-header">Manter tu cabello siempre perfecto ahora es fácil</h1>
				<p className="p-dark text-center">
					TONSOR hace que sea muy sencillo mantener un look siempre perfecto, aun cuando no tengas tiempo y
					estando desde la comodidad de tu casa. Sólo tienes que selecionar tu ubicación, hora y servicio que
					deseas; del resto nos encarnamos nosotros.
				</p>
			</div>

			<div className="body-service ">
				<h1 className="h1-header position-h1 d-flex ">SELECCIONA</h1>
				<h1 className="h1-service d-flex">TU SERVICIO</h1>

				<div className="div-service ">
					<div className="btn-services-container">
						<Link to="/chooseTonsor">
							<button className="img-service-global img-beard " />
							<p className="p-service ">Corte de cabello y Barbería</p>
						</Link>
					</div>

					<div className="btn-services-container">
						<Link to="/chooseTonsor">
							<button className=" img-back img-service-global" />
							<p className="p-service">Depilación de espalda</p>
						</Link>
					</div>

					<div className="btn-services-container">
						<Link to="/chooseTonsor">
							<button className="img-chest img-service-global" />
							<p className="p-service">Depilación de torso</p>
						</Link>
					</div>

					<div className="btn-services-container">
						<Link to="/chooseTonsor">
							<button className=" img-leg img-service-global" />
							<p className="p-service">Depilación de piernas</p>
						</Link>
					</div>

					<div className="btn-services-container">
						<Link to="/chooseTonsor">
							<button className=" img-manicure img-service-global" />
							<p className="p-service">Manicura</p>
						</Link>
					</div>

					<div className="btn-services-container">
						<Link to="/chooseTonsor">
							<button className=" img-pedicure img-service-global" />
							<p className="p-service">Pedicura</p>
						</Link>
					</div>
				</div>
			</div>

			<div className=" body-register-barber-container ">
				<div className="h1-profesional">
					<h1 className="h1-header profesional-title">¿ERES UN PROFESIONAL?</h1>
					<h1 className="tonsores-team">ÚNETE A NUESTRO EQUIPO DE TONSORES</h1>
				</div>

				<div className="barber-register-txt-vector">
					<div className="barber-card ">
						<RegisterBarber />
					</div>

					<div className="register-barb ">
						<div className="butt-log-barb">
							<div className="p-container-tonsores">
								<p className="p-dark p-tonsores ">
									Unirte a nuestro equipo es muy fácil.
									<br /> Sólo tienes que registrarte, seleccionar tu horario y los servicios que
									quieres ofrecer. Lo siguiente que tienes que hacer es empezar a cambiar looks.
								</p>
							</div>
							<div className="img-container-tonsores">
								<img className="img-cut " src={vector} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
