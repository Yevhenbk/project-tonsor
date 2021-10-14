import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { Context } from "../store/appContext.js";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../../styles/addServiceButton.scss";

const BarbersAppointment = () => {
	const { register, handleSubmit } = useForm();
	const { store, actions } = useContext(Context);

	const requestAppointment = data => actions.appointment(data);

	return (
		<form action="" method="post" onSubmit={handleSubmit(requestAppointment)}>
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Srvicio de citas</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<div>
						<div className="myInputs">
							<div className="mySchedule">
								<label htmlFor="meeting-time" className="myScheduleLabel">
									Añadir hora:
								</label>
								<input
									type="datetime-local"
									id="meeting-time"
									name="meeting-time"
									className="myHourInput"
									{...register("date_appointment", { required: true })}
								/>
							</div>
						</div>
					</div>
				</Modal.Body>

				<Modal.Footer>
					<input type="submit" value="Publicar" className="registerButton" />
				</Modal.Footer>
			</Modal.Dialog>
		</form>
	);
};

export default BarbersAppointment;
