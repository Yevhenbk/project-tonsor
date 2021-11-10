import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import { Context } from "../store/appContext.js";

import GetClientAppointment from "./getClientAppointment.js";

export const GetBarberServices = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.get_barber_services();
	}, []);
	console.log(store);

	return (
		<div className="getServices">
			{store.barber_services.map((img, name, index) => {
				console.log(img, name, "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
				return (
					<div key={`get_barber_services-${index}`}>
						<div className="getServices">
							<div>{get_barber_services.img}</div>
							<p>{get_barber_services.name}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};
