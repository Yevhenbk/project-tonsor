import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";

import { Context } from "../store/appContext.js";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AddService = () => {
	return (
		<form action="" method="post">
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Añadir servicio</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<div>
						<div className="myInputs">
							<label htmlFor="files" className="fileUploader">
								Selecciona la imagen
							</label>
							<input
								type="file"
								id="files"
								name="files"
								className="myFileInput"
								accept="image/png, image/gif, image/jpeg"
							/>

							<label htmlFor="serviceName" className="myLabel">
								Nombre de servicio:
							</label>

							<input type="text" id="serviceName" name="serviceName" className="myInput" />

							<label htmlFor="meeting-time" className="myScheduleLabel">
								Horario:
							</label>
							<div className="mySchedule">
								<input type="time" id="meeting-time" name="meeting-time" className="myHourInput" />
								<input
									type="button"
									htmlFor="meeting-time"
									value="+ selecciona hora"
									className="addButton"
								/>
							</div>

							<label htmlFor="textArea" className="myScheduleLabel">
								Descripcion:
							</label>

							<textarea id="textArea" name="textArea" className="myInput" />
						</div>
					</div>
				</Modal.Body>

				<Modal.Footer>
					<input type="submit" value="Añadir" className="accessButton" />
				</Modal.Footer>
			</Modal.Dialog>
		</form>
	);
};

export default AddService;
