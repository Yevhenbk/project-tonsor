import React, { useContext, useEffect, useState } from "react";
import "../../styles/chooseTonsor.scss";
import mustache_img from "../../img/bigote_02.png";
import { StarRating } from "../component/starRating.js";
import "../../styles/reviews.scss";
import { ReviewCard } from "../component/reviewCard.js";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Reviews = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	const params = useParams();
	const [review_view, setReview_View] = useState(null);

	useEffect(() => {
		actions.getReviews(params.id);
	}, []);
	useEffect(
		() => {
			if (store.reviews != null && store.reviews != []) {
				setReview_View(
					store.reviews.map((review, index) => {
						console.log(review, "································");
						return (
							<ReviewCard
								key={`review-${index}`}
								name={review.name}
								text={review.text}
								ratings={review.ratings}
							/>
						);
					})
				);
			}
		},
		[store.reviews]
	);

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
					<div className="review_container_by_barber">{review_view}</div>
				</div>
			</div>
		</div>
	);
};

/*
liea 49 va una función onclik, que llama al metodo post de barber/id/review 
en flux crear un action para llamar este metodo

*/
