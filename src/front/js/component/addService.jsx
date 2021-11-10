import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { Context } from "../store/appContext.js";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import placeholder from "../../img/no-image.png";
import "../../styles/addImage.scss";
import "../../styles/addServiceButton.scss";
import "../../styles/addService.scss";

const AddService = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [{ alt, src }, setImg] = useState({
		src: placeholder,
		alt: "Upload an Image"
	});

	const [form, setForm] = useState({
		file: null,
		name: null,
		cost: null,
		start_hour: null,
		end_hour: null,
		monday: null,
		tuesday: null,
		wednesday: null,
		thursday: null,
		friday: null,
		saturday: null,
		sunday: null,
		category: null,
		description: null
	});

	const handleImg = e => {
		if (e.target.files[0]) {
			setImg({
				src: URL.createObjectURL(e.target.files[0]),
				alt: e.target.files[0].name
			});
		}
	};
	//falta poner la funcion que recoje los primeros symbolos de datetime
	//no olvidar eliminar componentes que no utilizamos y hacer un migrate y upgrade cuando el port esta disponible
	const { register, handleSubmit } = useForm();
	const { store, actions } = useContext(Context);

	const getBarberService = (data, id) => {
		actions.barber_services(data, id);
	};
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
									<div encType="multipart/form-data">
										<div className="form__img-input-container">
											<input
												type="file"
												accept=".png, .jpg, .jpeg"
												id="photo"
												className="visually-hidden"
												onChange={e =>
													setForm({
														...form,
														img: e.target.files[0]
													})
												}
											/>
											<label htmlFor="photo" className="form-img__file-label">
												<svg
													width="50"
													height="50"
													viewBox="0 0 24 24"
													fill="none"
													stroke="#00000000"
													strokeWidth="1"
													strokeLinecap="round"
													strokeLinejoin="round">
													<path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
													<circle cx="12" cy="10" r="3" />
													<circle cx="12" cy="12" r="10" />
												</svg>
											</label>
											<img src={src} alt={alt} className="form-img__img-preview" />
										</div>
									</div>
								</div>

								<label htmlFor="serviceName" className="myLabel">
									Nombre de servicio:
								</label>
								<input
									type="text"
									id="serviceName"
									name="serviceName"
									className="myInput"
									onChange={e => setForm({ ...form, name: e.target.value })}
								/>

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
										onChange={e => setForm({ ...form, cost: e.target.value })}
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
												onChange={e => setForm({ ...form, start_hour: e.target.value })}
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
												onChange={e => setForm({ ...form, end_hour: e.target.value })}
											/>
										</div>
									</div>

									<section className="myCheckboxesVsHolder">
										<div className="myCategoryCheckTitle">
											<p className="myLabel">Selecciona los dias:</p>
										</div>
										<div className="myCategoryCheck">
											<div>
												<div className="categoryChecks">
													<label>
														<input
															type="checkbox"
															id="monday"
															name="monday"
															value="monday"
															onChange={e => setForm({ ...form, monday: e.target.value })}
														/>
														<p>Lunes</p>
													</label>
													<label>
														<input
															type="checkbox"
															id="tuesday"
															name="tuesday"
															value="tuesday"
															onChange={e =>
																setForm({ ...form, tuesday: e.target.value })
															}
														/>
														<p>Martes</p>
													</label>
													<label>
														<input
															type="checkbox"
															id="wednesday"
															name="wednesday"
															value="wednesday"
															onChange={e =>
																setForm({ ...form, wednesday: e.target.value })
															}
														/>
														<p>Miercoles</p>
													</label>
													<label>
														<input
															type="checkbox"
															id="thursday"
															name="thursday"
															value="thursday"
															onChange={e =>
																setForm({ ...form, thursday: e.target.value })
															}
														/>
														<p>Jueves</p>
													</label>
													<label>
														<input
															type="checkbox"
															id="friday"
															name="friday"
															value="friday"
															onChange={e => setForm({ ...form, friday: e.target.value })}
														/>
														<p>Viernes</p>
													</label>
													<label>
														<input
															type="checkbox"
															id="saturday"
															name="saturday"
															value="saturday"
															onChange={e =>
																setForm({ ...form, saturday: e.target.value })
															}
														/>
														<p>Sabado</p>
													</label>
													<label>
														<input
															type="checkbox"
															id="sunday"
															name="sunday"
															value="sunday"
															onChange={e => setForm({ ...form, sunday: e.target.value })}
														/>
														<p>Domingo</p>
													</label>
												</div>
											</div>
										</div>
									</section>

									<div className="theSelectCategory">
										<label htmlFor="category" className="myScheduleLabel2">
											Categoria:
										</label>
										<select
											name="category"
											id="myCategorySelect"
											onChange={e => setForm({ ...form, category: e.target.value })}>
											<option value="Pigmentacion">Pigmentacion</option>
											<option value="Depilacion de espalda">Depilacion de espalda</option>
											<option value="Corte de pelo">Corte de pelo</option>
											<option value="Manicura">Manicura</option>
											<option value="Torso">Depilacion de torso</option>
											<option value="Depilacion de piernas">Depilacion de piernas</option>
											<option value="Pedicura">Pedicura</option>
										</select>
									</div>
								</section>

								<label htmlFor="textArea" className="myScheduleLabel2">
									Descripcion:
								</label>

								<textarea
									id="textArea"
									name="textArea"
									className="myInput"
									onChange={e => setForm({ ...form, description: e.target.value })}
								/>
							</div>
						</div>
					</Modal.Body>

					<Modal.Footer>
						<input
							type="submit"
							value="Añadir"
							className="accessButton"
							onClick={e => {
								e.preventDefault();
								actions.barber_services(form);
							}}
						/>
					</Modal.Footer>
				</form>
			</Modal>
		</>
	);
};

export default AddService;
