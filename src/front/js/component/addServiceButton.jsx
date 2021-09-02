import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Context } from "../store/appContext.js";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Rectangle from "../../img/Rectangle.png";

//change this for a button
const AddServiceButton = () => {
	return (
		<form>
			<div className="addServices">
				<div className="serviceHolder">
					<img src={Rectangle} />
					<p className="serviceName">Añadir servicio</p>
				</div>
			</div>
		</form>
	);
};

export default AddServiceButton;
