import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import { Context } from "../store/appContext.js";

import GetClientAppointment from "./getClientAppointment.js";

export const MappingClientApp = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getAppointment();
	}, []);
	console.log(store);

	return (
		<div className="getAppointment">
			{store.appointments.map((appointment, index) => {
				console.log(appointment, "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
				return (
					<div key={`appointment-${index}`}>
						<div className="getAppointment">
							<p>{appointment.date_appointment}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

MappingClientApp.propTypes = {
	date: PropTypes.string
};
