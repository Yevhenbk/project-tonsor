import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Register = () => {
	return (
		<div>
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Registro</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<div>
						<p className="yourRole">Elige tu role</p>
						<div className="myRole">
							<button type="button" className="barberButton">
								Barbero
							</button>
							<button type="button" className="customerButton">
								Customer
							</button>
						</div>
						<div className="myHolder">
							<hr />
							<p className="myDivider">Or</p>
							<hr />
						</div>
					</div>
					<div>
						<div className="accessGoogle">
							<button type="button" className="googleAcc">
								Registrar con Google <i className="fab fa-google" />
							</button>
						</div>
						<div className="myInputs">
							<label htmlFor="myName" className="myLabel">
								Nombre:
							</label>

							<input type="text" id="myName" name="myName" className="myInput" />
							<br />
							<label htmlFor="mySurname" className="myLabel">
								Apellido:
							</label>

							<input type="text" id="mySurname" name="mySurname" className="myInput" />
							<label htmlFor="email" className="myLabel">
								Correo electronico:
							</label>

							<input type="email" id="email" name="email" className="myInput" />
							<br />
							<label htmlFor="MyNum" className="myLabel">
								Numero de telefono:
							</label>

							<input type="number" id="myNum" name="myNum" className="myInput" />
							<label htmlFor="myLocation" className="myLabel">
								Localizacion:
							</label>

							<input type="text" id="myLocation" name="myLocation" className="myInput" />
							<br />
							<label htmlFor="pwd" className="myLabel">
								Contraseña:
							</label>

							<input type="password" id="pwd" name="pwd" className="myInput" />
						</div>
					</div>
				</Modal.Body>

				<Modal.Footer>
					<input type="button" value="Registrar" className="registerButton2" />
				</Modal.Footer>
			</Modal.Dialog>
		</div>
	);
};

export default Register;
