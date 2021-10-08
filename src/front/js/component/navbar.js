import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.scss";
import LogoPositivo from "../../img/tonsor-logo-positivo.png";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/">
				<img className="navbar-brand " src={LogoPositivo} />
			</Link>
			<div className="navbar-btn">
				<Link to="/demo">
					<button className="btn btn-primary navbar-btn-login navbar-btn">Login </button>
				</Link>
				<Link to="/demo">
					<button className="btn btn-primary navbar-btn">Regístrate </button>
				</Link>
			</div>
			{/*<div className="location-nav">
			<Link to="/demo" className="img-button-logo btn" />
			<div className="button-nav-gen"><Login />
				<Role /></div>
		</div>*/}
		</nav>
	);
};
