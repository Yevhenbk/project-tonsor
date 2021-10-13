import React from "react";
import Form from "react-bootstrap/Form";
import "../../styles/paymentOption.scss";

export const PaymentOption = () => {
	return (
		<div className="payment-container">
			<div className="payment-option-container">
				<div>
					<h4>Detalles de la cuenta</h4>
				</div>
				<Form.Group className="mb-3  form-group" controlId="formGroupPassword">
					<Form.Label>Nombre de la tarjeta</Form.Label>
					<Form.Control className="form-info-tonsor" type="text" placeholder="" value="Pérez Camacho" />
				</Form.Group>
				<Form.Group className="mb-3  form-group" controlId="formGroupPassword">
					<Form.Label>Número de tarjeta</Form.Label>
					<Form.Control
						className="form-info-tonsor"
						type="number"
						placeholder=" 5234 0987 7651 4001"
						maxLength="16"
					/>
				</Form.Group>

				<div className="mobile-phone-number">
					<Form.Group className="mb-20  form-group-exp-date-pref" controlId="formGroupPassword">
						<Form.Label>Caducidad</Form.Label>
						<Form.Control className="form-info-tonsor" type="text" placeholder="03/2022" maxLength="2" />
					</Form.Group>
					<Form.Group className="mb-3  form-group-exp-date " controlId="formGroupPassword">
						<Form.Label>CVV</Form.Label>
						<Form.Control
							className="form-info-tonsor"
							type="text"
							placeholder="Número de teléfono"
							maxLength="3"
						/>
					</Form.Group>
				</div>
				<div className="my-profile-save-card-number-container">
					<button className="my-profile-save-card-number" id="form-submit" type="submit">
						Guardar
					</button>
				</div>
			</div>
		</div>
	);
};
