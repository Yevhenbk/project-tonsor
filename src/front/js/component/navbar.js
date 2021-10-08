import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.scss";

import Role from "./role.jsx";
import Login from "./login.jsx";

export const Navbar = () => {
	return (
		<div className="location-nav">
			<Link to="/demo" className="img-button-logo btn" />
			<div className="button-nav-gen">
				<Login />
				<Role />
			</div>
		</div>
	);
};
