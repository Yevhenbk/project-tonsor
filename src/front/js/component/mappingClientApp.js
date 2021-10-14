import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useForm, useEffect } from "react-hook-form";

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
				return <GetClientAppointment key={`appointment-${index}`} date={appointment.date_appointment} />;
			})}
		</div>
	);
};
