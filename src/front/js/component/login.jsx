import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.js";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import GoogleLogin from "react-google-login";

const Login = props => {
	const { register, handleSubmit } = useForm();
	const { store, actions } = useContext(Context);

	const getLogin = data => {
		let islogged = actions.login(data);
		//console.log(islogged);
		props.close();
	};

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const responseGoogle = answer => {
		console.log(answer);
		console.log(answer.profileObj);
	};

	return (
		<form action="" method="post" onSubmit={handleSubmit(getLogin)}>
			<Modal.Dialog
				show={show}
				onHide={handleClose}
				animation={true}
				size="m"
				aria-labelledby="contained-modal-title-vcenter"
				centered>
				<Modal.Header>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<div>
						<div className="accessGoogle">
							{/*<button type="button" className="googleAcc">
								<p>Acceder con Google</p>
							</button>*/}
							<GoogleLogin
								clientId="864663247381-avrome86kedmob0vin0vsd5522nc1ll8.apps.googleusercontent.com"
								render={renderProps => (
									<button
										className="googleAcc"
										onClick={renderProps.onClick}
										disabled={renderProps.disabled}>
										Inicia sesión con tu cuenta de Google
									</button>
								)}
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy={"single_host_origin"}
							/>
						</div>
						<div className="myInputs">
							<label htmlFor="email" className="myLabel">
								Correo electronico:
							</label>

							<input type="email" id="email" name="email" className="myInput" {...register("email")} />

							<label htmlFor="pwd" className="myLabel">
								Contraseña:
							</label>

							<input type="password" id="pwd" name="pwd" className="myInput" {...register("password")} />
						</div>
					</div>
				</Modal.Body>

				<Modal.Footer>
					{/*<input type="button" value="Registrar" className="registerButton" />*/}

					<input type="submit" value="Acceder" className="accessButton" />
				</Modal.Footer>
			</Modal.Dialog>
		</form>
	);
};

export default Login;
Login.propTypes = {
	close: PropTypes.func
};
