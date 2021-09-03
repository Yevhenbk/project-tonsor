import React from "react";
import "../../styles/chooseTonsor.scss";
import mustache_img from "../../img/bigote_02.png";
import { StarRating } from "../component/starRating.js";
import "../../styles/reviews.scss";
import { Link } from "react-router-dom";
import { ReviewCard } from "../component/reviewCard.js";

export const Reviews = () => {
	return (
		<div className="reviews_view">
			<h1 className="opinion_views_title">Tu opinión nos importa</h1>
			<div className="barber_container_reviews">
				<StarRating />
				<textarea className="form-control" rows="3" id="comment-1" placeholder="Escribe tu reseña..." />
				<Link to="/chooseTonsor">
					<button className="cancel_review_btn">Cancelar</button>
				</Link>
				<button className="save_review_btn">Publicar</button>
				<div className="all_users_reviews">
					<div className="row">
						<div className="col-4">
							<ReviewCard />
						</div>
						<div className="col-4">
							<ReviewCard />
						</div>
						<div className="col-4">
							<ReviewCard />
						</div>
						<div className="col-4">
							<ReviewCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
