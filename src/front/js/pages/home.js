import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/modals.scss";
import Login from "../component/login.jsx";
import RegisterClient from "../component/registerClient.jsx";
import Role from "../component/role.jsx";
import RegisterBarber from "../component/registerBarber.jsx";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<Login />
			<Role />
			<RegisterClient />
			<RegisterBarber />
		</div>
	);
};
