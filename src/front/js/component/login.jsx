import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Login = () => {
	return (
		<form action="" method="post">
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<div>
						<div className="accessGoogle">
							<button type="button" className="googleAcc">
								Acceder con Google <i className="fab fa-google" />
							</button>
						</div>
						<div className="myInputs">
							<label htmlFor="email" className="myLabel">
								Correo electronico:
							</label>

							<input type="email" id="email" name="email" className="myInput" />
							<br />
							<label htmlFor="pwd" className="myLabel">
								Contraseña:
							</label>

							<input type="password" id="pwd" name="pwd" className="myInput" />
						</div>
					</div>
				</Modal.Body>

				<Modal.Footer>
					<input type="button" value="Registrar" className="registerButton" />

					<input type="submit" value="Acceder" className="accessButton" />
				</Modal.Footer>
			</Modal.Dialog>
		</form>
	);
};

export default Login;
