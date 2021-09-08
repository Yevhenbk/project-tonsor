import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { Context } from "../store/appContext.js";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AddImage from "./addImage.jsx";
import Hour from "./hour.jsx";
import "../../styles/addServiceButton.scss";

const AddService = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//falta poner la funcion que recoje los primeros symbolos de datetime
	//falta poner react hook form
	//falta poner la funcion lo de addSchedule component y reiscribir para utilizar para anadir las cartas de servicio
	//que aparecen despues de click en modal
	//no olvidar eliminar componentes que no utilizamos y hacer un migrate y upgrade cuando el port esta disponible
	return (
		<>
			{" "}
			<div className="theButtonContainer">
				<div className="myServiceButtonHolder">
					<input type="button" className="addMyServiceButton" value="+" onClick={handleShow} />
					<p className="pService">Añadir servicio</p>
				</div>
			</div>
			<Modal show={show} onHide={handleClose}>
				<form>
					<Modal.Header>
						<Modal.Title>Añadir servicio</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<div>
							<div className="myInputs">
								<div className="addMyServiceImage">
									<AddImage />
								</div>

								<label htmlFor="serviceName" className="myLabel">
									Nombre de servicio:
								</label>
								<input type="text" id="serviceName" name="serviceName" className="myInput" />

								<div className="priceForHolder">
									<label htmlFor="servicePrice" className="myLabel">
										Precio:
									</label>

									<input
										type="number"
										id="servicePrice"
										name="servicePrice"
										className="myInputPrice"
										placeholder="0.00"
									/>
								</div>

								<section className="meetingTimeChoose">
									<div className="myScheduleSecondHolder">
										<div className="mySchedule">
											<label htmlFor="meeting-time" className="myScheduleLabel">
												Hora de empezar:
											</label>
											<input
												type="time"
												id="meeting-time"
												name="meeting-time"
												className="myHourInput"
											/>
										</div>

										<div className="mySchedule">
											<label htmlFor="meeting-time" className="myScheduleLabel">
												Hora de terminar:
											</label>
											<input
												type="time"
												id="meeting-time"
												name="meeting-time"
												className="myHourInput"
											/>
										</div>
									</div>

									<section className="myCheckboxesVsHolder">
										<div className="myCategoryCheckTitle">
											<p className="myLabel">Selecciona los dias:</p>
										</div>
										<div className="myCategoryCheck">
											<Form>
												{["checkbox"].map(type => (
													<div key={`inline-${type}`} className="categoryChecks">
														<Form.Check
															label="Lunes"
															name="group1"
															type={type}
															id={`-${type}-1`}
														/>
														<Form.Check
															label="Martes"
															name="group1"
															type={type}
															id={`-${type}-2`}
														/>
														<Form.Check
															label="Miercoles"
															name="group1"
															type={type}
															id={`-${type}-3`}
														/>
														<Form.Check
															label="Jueves"
															name="group1"
															type={type}
															id={`-${type}-4`}
														/>
														<Form.Check
															label="Viernes"
															name="group1"
															type={type}
															id={`-${type}-5`}
														/>
														<Form.Check
															label="Sabado"
															name="group1"
															type={type}
															id={`-${type}-6`}
														/>
														<Form.Check
															label="Domingo"
															name="group1"
															type={type}
															id={`-${type}-7`}
														/>
													</div>
												))}
											</Form>
										</div>
									</section>

									<form action="/action_page.php" className="theSelectCategory">
										<label htmlFor="category" className="myScheduleLabel2">
											Categoria:
										</label>
										<select name="category" id="myCategorySelect">
											<option value="pigmentacion">Pigmentacion</option>
											<option value="espalda">Depilacion de espalda</option>
											<option value="pelo">Corte de pelo</option>
											<option value="manicura">Manicura</option>
											<option value="torso">Depilacion de torso</option>
											<option value="piernad">Depilacion de piernas</option>
											<option value="pedicura">Pedicura</option>
										</select>
									</form>
								</section>

								<label htmlFor="textArea" className="myScheduleLabel2">
									Descripcion:
								</label>

								<textarea id="textArea" name="textArea" className="myInput" />
							</div>
						</div>
					</Modal.Body>

					<Modal.Footer>
						<input type="submit" value="Añadir" className="accessButton" />
					</Modal.Footer>
				</form>
			</Modal>
		</>
	);
};

export default AddService;
