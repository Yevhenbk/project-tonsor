import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import { Context } from "../store/appContext.js";

export const GetClientAppointment = props => {
	return (
		<div>
			<div className="getAppointment">
				<p>{props.date}</p>
			</div>
		</div>
	);
};

GetClientAppointment.propTypes = {
	date: PropTypes.string
};
