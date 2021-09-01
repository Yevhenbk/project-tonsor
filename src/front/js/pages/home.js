import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/modals.scss";
import Login from "../component/login.jsx";
import Register from "../component/register.jsx";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<Login />
			<Register />
		</div>
	);
};
