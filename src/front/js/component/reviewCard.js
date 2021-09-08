import React from "react";
import "../../styles/barberCard.scss";
import { StarRating } from "./starRating.js";
import PropTypes from "prop-types";

export const ReviewCard = props => {
	return (
		<div className="users_reviews ">
			<div className="barber_image">
				<img
					className="barber_image_profile"
					src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					alt=""
				/>
			</div>
			<span>{props.name}</span>
			<StarRating />
			<div className="testimonial-content">
				<p>{props.text}</p>
			</div>
		</div>
	);
};

ReviewCard.propTypes = {
	name: PropTypes.string,
	text: PropTypes.string,
	ratings: PropTypes.number
};
