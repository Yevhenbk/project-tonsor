import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Context } from "../store/appContext.js";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Role = () => {
	const { store, actions } = useContext(Context);
	const { register, handleSubmit } = useForm();
	const [rol, setRol] = useState(null);

	//const getBarber = data => {
	//	actions.barber(data);
	//};
	//const getClient = data => {
	//	actions.client(data);
	//};

	return (
		<form action="" method="post">
			<Modal.Dialog>
				<Modal.Header>
					<div className="modalTitle2">Elige tu role</div>
				</Modal.Header>

				<Modal.Body className="modalBody2">
					<div className="roleHolder">
						<input type="button" value="Barbero" className="barberButton" />

						<input type="button" value="Cliente" className="customerButton" />
					</div>
				</Modal.Body>
			</Modal.Dialog>
		</form>
	);
};

export default Role;
