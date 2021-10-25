import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss";
import LogoPositivo from "../../img/tonsor-logo-positivo.png";
//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
	return (
		<div className="footer-css">
			<div className="container-div">
				<Link to="/">
					<img className="img-logo-footer" src={LogoPositivo} />
				</Link>
			</div>

			<div className="container_about_us">
				<Link className="p-color-gl p-font-tit" to="/aboutus" style={{ textDecoration: "none" }}>
					¿Quíenes Somos?
				</Link>
				<div>
					<Link className="p-color-gl p-font-text" to="/conduse" style={{ textDecoration: "none" }}>
						Condiciones de Uso
					</Link>
					<Link className="p-color-gl p-font-text" to="/politcs" style={{ textDecoration: "none" }}>
						Politica de Privacidad
					</Link>
				</div>
			</div>

			<div className="container-contact-us">
				<Link className="p-color-gl p-font-tit  " to="/contactus" style={{ textDecoration: "none" }}>
					Contacta con Nosotros
				</Link>

				<div className="p-color-gl">
					<Link to="https://www.instagram.com/?hl=es" className="fontaw-icons btn">
						<FontAwesomeIcon icon={faInstagram} />
					</Link>
					<Link src={"https://es-es.facebook.com/"} className="fontaw-icons btn">
						<FontAwesomeIcon icon={faFacebook} />
					</Link>
					<Link url="https://es.tiktok.com/" className="fontaw-icons btn">
						<FontAwesomeIcon icon={faTiktok} />
					</Link>
					<Link url="https://es.tiktok.com/" className="fontaw-icons btn">
						<FontAwesomeIcon icon={faWhatsapp} />
					</Link>
				</div>
			</div>
		</div>
	);
};
