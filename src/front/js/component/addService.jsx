import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";

import AddSchedule from "./addSchedule.jsx";

import { Context } from "../store/appContext.js";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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

							<section className="meetingTimeChoose">
								<label htmlFor="meeting-time" className="myScheduleLabel">
									Disponibilidad:
								</label>

								<div className="myScheduleSecondHolder">
									<div className="mySchedule">
										<label htmlFor="meeting-time" />
										<input
											type="time"
											id="meeting-time"
											name="meeting-time"
											className="myHourInput"
										/>
									</div>

									<div className="mySchedule">
										<label htmlFor="meeting-time" />
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
									<label htmlFor="category">Categoria:</label>
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
