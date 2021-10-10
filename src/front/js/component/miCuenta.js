import React from "react";
import "../../styles/miCuenta.scss";
import Form from "react-bootstrap/Form";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export const MiCuenta = () => {
	return (
		<div className="my-account-container">
			<div className="personal-information-container">
				<div className="l-personal-information ">
					<p as="p" className="text-body">
						<b>Información personal</b>
					</p>
					<p as="p" className="description text-body color-text-darker">
						Introduce tus datos personales. Te recomendamos subir una foto.
					</p>
				</div>

				<div className="r-personal-information ">
					<Form>
						<div className="userRow-editProfilePic">
							<button id="editProfilePic" type="button">
								{/*<span className="avatar_initials"></span>*/}
								<img
									className="barber_image_profile1"
									src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
									alt=""
								/>
								<div>
									<span>Cambiar imagen de perfil</span>
								</div>
							</button>
						</div>
						<Form.Group className="mb-3 form-group  " controlId="formGroupEmail">
							<Form.Label>Nombre</Form.Label>


							<Form.Control className="form-info-tonsor" type="text" placeholder="Nombre" value="Pedro" />
						</Form.Group>
						<Form.Group className="mb-3  form-group" controlId="formGroupPassword">
							<Form.Label>Apellidos</Form.Label>
							<Form.Control
								className="form-info-tonsor"
								type="text"
								placeholder="Password"
								value="Pérez Camacho"
							/>

						</Form.Group>

						<div className="mobile-phone-number">
							<Form.Group className="mb-3  form-group-phone-pref" controlId="formGroupPassword">
								<Form.Label>Prefijo</Form.Label>
								<Form.Control

									className="form-info-tonsor"

									type="text"
									onKeyPress={event => {
										if (!/[0-9]/.test(event.key)) {
											event.preventDefault();
										}
									}}
									placeholder="+34"
									maxLength="2"
								/>
							</Form.Group>
							<Form.Group className="mb-3  form-group-phone " controlId="formGroupPassword">
								<Form.Label>Número de teléfono</Form.Label>
								<Form.Control

									className="form-info-tonsor"

									type="text"
									onKeyPress={event => {
										if (!/[0-9]/.test(event.key)) {
											event.preventDefault();
										}
									}}
									placeholder="Número de teléfono"
									maxLength="9"
								/>
							</Form.Group>
						</div>
					</Form>
				</div>
			</div>
			{/*segundo bloque */}
			<div className="personal-information-container">
				<div className="l-personal-information">
					<p as="p" className="text-body">
						<b>Información de la cuenta</b>
					</p>
					<p as="p" className="description text-body color-text-darker">
						Incluye tu email para configurar la cuenta. Podrás cambiarlo más tarde si lo necesitas.
					</p>
				</div>
				<div className="r-personal-information">
					<Form>
						<Form.Group className="mb-3 form-group  " controlId="formGroupEmail">
							<Form.Label>Email</Form.Label>

							<Form.Control className="form-info-tonsor" type="text" placeholder="Email" />

						</Form.Group>
						<div className="userRow-editProfilePic">
							<button id="editProfilePic" type="button">
								{/*<span className="avatar_initials"></span>*/}
								<img className="" src={faLock} alt="" />
								<div>
									<span>Cambiar imagen de perfil</span>
								</div>
							</button>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
};
