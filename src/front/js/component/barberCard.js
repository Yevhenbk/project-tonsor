import React, { useState, useContext } from "react";
import "../../styles/barberCard.scss";
import { StarRating } from "../component/starRating.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { SetAppoiment } from "./setAppoiment.js";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext.js";

import DateTimePicker from "react-datetime-picker";

import Form from "react-bootstrap/Form";

import "../../styles/modals.scss";
import "../../styles/addService.scss";

export const BarberCard = props => {
	const [showAppoiment, setShowAppoiment] = useState(false);
	const handleCloseAppoiment = () => setShowAppoiment(false);
	const handleShowAppoiment = () => setShowAppoiment(true);

	const [value, onChange] = useState(new Date());

	const { register, handleSubmit } = useForm();
	const { store, actions } = useContext(Context);

	const requestAppointment = data => actions.reserveAppointment(data);

	return (
		<div className="barber_card ">
			<div className="container_barber_card">
				<div className="barber_image">
					<img
						className="barber_image_profile"
						src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt=""
					/>
				</div>

				<div className="barber_information_container ">
					<div className="Review_container">
						<StarRating />
						<Link to={"/reviews/".concat(props.id)}>
							<button className="btn_watch_reviews" type="button">
								Ver reseñas: (24)
							</button>
						</Link>
					</div>
					<div className="Berber_name_container">
						Name:&nbsp;
						{props.name}
					</div>
					<div className="Services_info_container">
						Servicio:&nbsp;
						{props.services}
					</div>
					{/*<Link to={"/barberProfile"}>
						<button className="barber-date-btn" type="button">
							Pedir cita
						</button>
					</Link>*/}
					<button className="barber-date-btn" type="button" onClick={handleShowAppoiment}>
						Pedir cita
					</button>
					<Modal
						show={showAppoiment}
						onHide={handleCloseAppoiment}
						animation={true}
						{...props}
						size="lg"
						aria-labelledby="contained-modal-title-vcenter"
						centered>
						<form action="" method="post" onSubmit={handleSubmit(requestAppointment)}>
							<Modal.Header>
								<Modal.Title>Reserva Online</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<section className="myCheckboxesVsHolder">
									<div className="myCategoryCheckTitle">
										<p className="myLabel">Seleccion los servcios que quieras reservar:</p>
									</div>
									<div className="myCategoryCheck">
										<div>
											<div className="categoryChecks">
												<label>
													<input
														type="checkbox"
														id="pigmentacion"
														name="pigmentacion"
														value="pigmentacion"
														{...register("pigmentacion")}
													/>
													<p>Pigmentacion</p>
												</label>
												<label>
													<input
														type="checkbox"
														id="depilacion de espalda"
														name="depilacion de espalda"
														value="depilacion de espalda"
														{...register("depilacion de espalda")}
													/>
													<p>Depilacion de espalda</p>
												</label>
												<label>
													<input
														type="checkbox"
														id="corte de pelo"
														name="corte de pelo"
														value="corte de pelo"
														{...register("corte de pelo")}
													/>
													<p>Corte de pelo</p>
												</label>
												<label>
													<input
														type="checkbox"
														id="manicura"
														name="manicura"
														value="manicura"
														{...register("manicura")}
													/>
													<p>Manicura</p>
												</label>
												<label>
													<input
														type="checkbox"
														id="depilacion de torso"
														name="depilacion de torso"
														value="depilacion de torso"
														{...register("depilacion de torso")}
													/>
													<p>Depilacion de torso</p>
												</label>
												<label>
													<input
														type="checkbox"
														id="depilacion de piernas"
														name="depilacion de piernas"
														value="depilacion de piernas"
														{...register("depilacion de piernas")}
													/>
													<p>Depilacion de piernas</p>
												</label>
												<label>
													<input
														type="checkbox"
														id="pedicura"
														name="pedicura"
														value="pedicura"
														{...register("pedicura")}
													/>
													<p>Pedicura</p>
												</label>
											</div>
										</div>
									</div>
								</section>

								<label htmlFor="meeting-time" className="myScheduleLabel">
									Selecciona fecha y hora:
								</label>
								<div className="mySchedule">
									<input
										type="datetime-local"
										id="meeting-time"
										name="meeting-time"
										className="myHourInput"
										{...register("date_appointment", { required: true })}
									/>
								</div>
							</Modal.Body>
							<Modal.Footer>
								<input type="submit" value="Pedir" className="accessButton" />
								<input
									type="button"
									value="Cerrar"
									className="registerButton"
									onClick={handleCloseAppoiment}
								/>
							</Modal.Footer>
						</form>
					</Modal>
				</div>
			</div>
		</div>
	);
};

BarberCard.propTypes = {
	name: PropTypes.string,
	services: PropTypes.string,
	id: PropTypes.number
};
