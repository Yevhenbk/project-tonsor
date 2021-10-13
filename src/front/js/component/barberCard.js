import React, { useState } from "react";
import "../../styles/barberCard.scss";
import { StarRating } from "../component/starRating.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { SetAppoiment } from "./setAppoiment.js";

export const BarberCard = props => {
	const [showAppoiment, setShowAppoiment] = useState(false);
	const handleCloseAppoiment = () => setShowAppoiment(false);
	const handleShowAppoiment = () => setShowAppoiment(true);
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
						size="m"
						aria-labelledby="contained-modal-title-vcenter"
						centered>
						<SetAppoiment />
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