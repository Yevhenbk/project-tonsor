import React from "react";
import "../../styles/barberCard.scss";
import { StarRating } from "./starRating.js";

export const ReviewCard = () => {
	return (
		<div className="users_reviews ">
			<div className="barber_image">
				<img
					className="barber_image_profile"
					src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
					alt=""
				/>
			</div>
			<span>User name</span>
			<StarRating />
			<div className="testimonial-content">
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi illum quisquam tempore.excepturi, at
					magnam fugiat ea vel totam perspiciatis dignissimos rem error est delectus praesentium inventore
					aliquid dolorum eos
				</p>
			</div>
		</div>
	);
};
