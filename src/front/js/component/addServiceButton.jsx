import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Context } from "../store/appContext.js";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//change this for a button
const AddServiceButton = () => {
	return (
		<div className="myServiceButtonHolder">
			<input type="button" className="addMyServiceButton" value="+" />
		</div>
	);
};

export default AddServiceButton;
