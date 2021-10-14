import React, { useState } from "react";
import "../../styles/barberCard.scss";
import { StarRating } from "../component/starRating.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { SetAppoiment } from "./setAppoiment.js";

import DateTimePicker from "react-datetime-picker";

import Form from "react-bootstrap/Form";

export const BarberCard = props => {
	const [showAppoiment, setShowAppoiment] = useState(false);
	const handleCloseAppoiment = () => setShowAppoiment(false);
	const handleShowAppoiment = () => setShowAppoiment(true);

	const [value, onChange] = useState(new Date());

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
						<Modal.Header closeButton>
							<Modal.Title id="contained-modal-title-vcenter">Reserva tu servicio</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<h4>Seleccion los servcios que quieras reservar</h4>
							<Form>
								{["checkbox"].map(type => (
									<div key={`default-${type}`} className="mb-3">
										<Form.Check
											type={type}
											id={`default-${type}`}
											label={`default ${type}`}
											checked
										/>

										<Form.Check
											enable
											type={type}
											label={`disabled ${type}`}
											id={`disabled-default-${type}`}
										/>
									</div>
								))}
							</Form>

							<span>Selecciona fecha y hora</span>
							<div>
								<DateTimePicker onChange={onChange} value={value} />
							</div>
						</Modal.Body>
						<Modal.Footer>
							<Button className="confirmar-reserva" onClick={props.onHide}>
								Confirmar reserva
							</Button>
							<Button onClick={props.onHide}>Close</Button>
						</Modal.Footer>
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
