import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../../styles/starRating.scss";

export const StarRating = () => {
	const [rating, setRating] = useState(null);
	const [hover, setHover] = useState(null);
	return (
		<div>
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1;
				return (
					<label key="rating">
						<input
							className="input_star"
							type="radio"
							name="rating"
							value={ratingValue}
							onClick={() => setRating(ratingValue)}
						/>
						<FaStar
							className="star"
							color={ratingValue <= (hover || rating) ? "#ffc107" : "#9a9a9b"}
							onMouseEnter={() => setHover(ratingValue)}
							onMouseLeave={() => setHover(null)}
						/>
					</label>
				);
			})}
		</div>
	);
};
