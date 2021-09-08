import React from "react";
import "../../styles/barberCard.scss";
import { StarRating } from "../component/starRating.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const BarberCard = props => {
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
