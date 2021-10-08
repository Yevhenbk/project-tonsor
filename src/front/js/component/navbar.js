import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.scss";
import LogoPositivo from "../../img/tonsor-logo-positivo.png";
import Dropdown from "react-bootstrap/Dropdown";

import Modal from "react-bootstrap/Modal";
import Login from "./login.jsx";
import RegisterBarber from "./registerBarber.jsx";
import RegisterClient from "./registerClient.jsx";

//import { useForm } from "react-hook-form";
//import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	/*REGISTER BARBER */
	const [showBarber, setShowBarber] = useState(false);
	const handleCloseBarber = () => setShowBarber(false);
	const handleShowBarber = () => setShowBarber(true);
	/*REGISTER CLIENT*/
	const [showClient, setShowClient] = useState(false);
	const handleCloseClient = () => setShowClient(false);
	const handleShowClient = () => setShowClient(true);

	/**/
	//const { register, handleSubmit } = useForm();
	//const { store, actions } = useContext(Context);

	//const getLogin = data => actions.login(data);

	return (
		<nav className="navbar">
			<Link to="/">
				<img className="navbar-brand " src={LogoPositivo} />
			</Link>

			<div className="navbar-btn">
				<Dropdown className="dropdown-login-container">
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Login
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1" onClick={handleShow}>
							Entra como cliente
						</Dropdown.Item>
						<Dropdown.Item href="#/action-2" onClick={handleShow}>
							Entra como barbero
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Modal
					show={show}
					onHide={handleClose}
					animation={true}
					size="m"
					aria-labelledby="contained-modal-title-vcenter"
					centered>
					<Login />
				</Modal>

				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Regístrate
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1" onClick={handleShowClient}>
							Cómo cliente
						</Dropdown.Item>
						<Dropdown.Item href="#/action-2" onClick={handleShowBarber}>
							Cómo barbero
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>

				<Modal
					show={showBarber}
					onHide={handleCloseBarber}
					animation={true}
					size="m"
					aria-labelledby="contained-modal-title-vcenter"
					centered>
					<RegisterBarber />
				</Modal>
				<Modal
					show={showClient}
					onHide={handleCloseClient}
					animation={true}
					size="m"
					aria-labelledby="contained-modal-title-vcenter"
					centered>
					<RegisterClient />
				</Modal>

				{/*<Link to="/demo">
					<button className="btn btn-primary navbar-btn-login navbar-btn">Login </button>
				</Link>
				<Link to="/demo">
					<button className="btn btn-primary navbar-btn">Regístrate </button>
	</Link>*/}
			</div>
			{/*<div className="location-nav">
			<Link to="/demo" className="img-button-logo btn" />
			<div className="button-nav-gen"><Login />
				<Role /></div>
		</div>*/}
		</nav>
	);
};
/*
<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Login
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">Entra como cliente</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Entra como barbero</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Login
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">Entra como cliente</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Entra como barbero</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>*/
