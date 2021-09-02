import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";

import AddSchedule from "./addSchedule.jsx";

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
								Hora de empezar:
							</label>

							<AddSchedule />

							<section className="myCheckboxesVsHolder">
								<div className="myCategoryCheckTitle">
									<p className="myLabel">Selecciona la categoria:</p>
								</div>
								<div className="myCategoryCheck">
									<div className="myCheckboxHolder">
										<input type="checkbox" id="inputCategoryName" name="pigmentacionDe" />
										<label htmlFor="pigmentacionDe">Pigmentacion</label>
									</div>
									<div className="myCheckboxHolder">
										<input type="checkbox" id="inputCategoryName" name="depilacionDe" />
										<label htmlFor="depilacionDe">Depilacion de espalda</label>
									</div>
									<div className="myCheckboxHolder">
										<input type="checkbox" id="inputCategoryName" name="corteDe" />
										<label htmlFor="corteDe">Corte de pelo</label>
									</div>
									<div className="myCheckboxHolder">
										<input type="checkbox" id="inputCategoryName" name="manicura" />
										<label htmlFor="manicura">Manicura</label>
									</div>
									<div className="myCheckboxHolder">
										<input type="checkbox" id="inputCategoryName" name="depilacionDe" />
										<label htmlFor="depilacionDe">Depilacion de torso</label>
									</div>
									<div className="myCheckboxHolder">
										<input type="checkbox" id="inputCategoryName" name="depDe" />
										<label htmlFor="depDe">Depilacion de piernas</label>
									</div>
									<div className="myCheckboxHolder">
										<input type="checkbox" id="inputCategoryName" name="pedicuraDe" />
										<label htmlFor="pedicuraDe">Pedicura</label>
									</div>
								</div>
							</section>

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
