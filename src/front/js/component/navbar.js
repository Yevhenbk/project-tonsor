import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.scss";
import LogoPositivo from "../../img/tonsor-logo-positivo.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";

import Modal from "react-bootstrap/Modal";
import Login from "./login.jsx";
import RegisterBarber from "./registerBarber.jsx";
import RegisterClient from "./registerClient.jsx";
import { BtnProfile } from "./btnProfile.js";

//import { useForm } from "react-hook-form";
//import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const [logged, setLogged] = useState(false);
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

	useEffect(() => {
		if (localStorage.getItem("token")) {
			actions.setLoggedIn();
		} else {
			actions.setLoggedOut();
		}
		function checkUserData() {
			const token = localStorage.getItem("token");
			console.log("hello");

			if (token) {
				actions.setLoggedIn();
			} else {
				actions.setLoggedOut();
			}
		}

		window.addEventListener("storage", checkUserData);

		return () => {
			window.removeEventListener("storage", checkUserData);
		};
	}, []);
	/**/
	//const { register, handleSubmit } = useForm();
	//const { store, actions } = useContext(Context);

	//const getLogin = data => actions.login(data);

	/*const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getBarbers();
	}, []);
	console.log(store);*/

	return (
		<nav className="navbar fixed-top" collapseOnSelect expand="lg">
			<Link to="/">
				<img className="navbar-brand " src={LogoPositivo} />
			</Link>

			{!store.islogged ? (
				<div className="navbar-btn">
					<Dropdown className="dropdown-login-container">
						<Dropdown.Toggle id="dropdown-basic">Login</Dropdown.Toggle>
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
						<Login close={handleClose} />
					</Modal>

					<Dropdown>
						<Dropdown.Toggle id="dropdown-basic">Regístrate</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1" onClick={handleShowClient}>
								Como cliente
							</Dropdown.Item>
							<Dropdown.Item href="#/action-2" onClick={handleShowBarber}>
								Como barbero
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
				</div>
			) : (
				<BtnProfile />
			)}
		</nav>
	);
};
/*<div className="btn-user-name-container">
					{store.barber.map((barber, index) => {
						console.log(barber, "hello hello hello hello");
						return <BtnProfile key={`barber-${index}`} name={client.name} />;
					})}
				</div>*/
