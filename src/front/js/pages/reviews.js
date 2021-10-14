import React, { useContext, useEffect, useState } from "react";

import { StarRating } from "../component/starRating.js";
import { ReviewCard } from "../component/reviewCard.js";

import { Link, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Context } from "../store/appContext";

import "../../styles/reviews.scss";
import "../../styles/chooseTonsor.scss";

import { useForm } from "react-hook-form";

export const Reviews = () => {
	const { store, actions } = useContext(Context);
	//console.log(store);
	const params = useParams();
	const [review_view, setReview_View] = useState(null);
	const { register, handleSubmit } = useForm();

	const { id } = useParams();
	//console.log(data.id);

	const newReview = data => {
		actions.postReview(data, id);
	};

	useEffect(() => {
		actions.getReviews(params.id);
	}, []);

	useEffect(
		() => {
			if (store.reviews != null && store.reviews != []) {
				setReview_View(
					store.reviews.map((postReview, index) => {
						console.log(postReview, "¿?¿?¿?¿?¿?¿?¿?");
						return (
							<ReviewCard
								key={`postReview-${index}`}
								name={postReview.client_name}
								text={postReview.text}
								ratings={postReview.ratings}
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
				<Form action="" method="post" onSubmit={handleSubmit(newReview)}>
					<StarRating />
					<input
						name="review"
						type="text"
						className="form-control my-2"
						rows="3"
						id="comment-1"
						placeholder="Escribe tu reseña..."
						{...register("text")}
						/*ref={register({
							required: { value: true, message: "Escribe una reseña" }
						})}*/
					/>

					<Link to="/chooseTonsor">
						<button className="cancel_review_btn">Cancelar</button>
					</Link>
					<button className="save_review_btn btn-primary">Publicar</button>
				</Form>

				<div className="all_users_reviews">
					<div className="review_container_by_barber col-8">{review_view}</div>
				</div>
			</div>
		</div>
	);
};

/*
liea 49 va una función onclik, que llama al metodo post de barber/id/review 
en flux crear un action para llamar este metodo

*/
