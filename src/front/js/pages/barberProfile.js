import React, { useState } from "react";
import "../../styles/barberProfile.scss";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Sonnet } from "../component/sonnet.js";
//import "bootstrap/dist/css/bootstrap.min.css";

export const BarberProfile = () => {
	const [toggleState, setToggleSatte] = useState(1);
	const toggleTab = index => {
		setToggleSatte(index);
	};
	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<div className="row">
				<div className="l-menu col-sm-2">
					<div className="img-barber-container">
						<img
							className="barber_image_profile1"
							src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
							alt=""
						/>
					</div>
					<div className="user-data">
						<p>Pedro Pérez</p>
						<hr size="3" />
					</div>
					<Nav variant="pills" className="flex-column">
						<Nav.Item>
							<Nav.Link eventKey="first" onClick={() => toggleTab("first")}>
								Servicios
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="second">Metodo de pago</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="thirt">Facturación</Nav.Link>
						</Nav.Item>
					</Nav>
				</div>

				<div className="r-menu col-sm-10">
					<Tab.Content>
						<Tab.Pane eventKey="first">
							<Sonnet />
						</Tab.Pane>
						<Tab.Pane eventKey="second">
							<div>Servicios</div>
						</Tab.Pane>
						<Tab.Pane eventKey="thirt">
							<div>Metodo de pago</div>
						</Tab.Pane>
					</Tab.Content>
				</div>
			</div>
		</Tab.Container>
	);
};
/*
<div className="l-menu">
				<div className="img-barber-container">
					<img
						className="barber_image_profile1"
						src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
						alt=""
					/>
				</div>
				<div className="user-data">
					<p>Pedro Pérez</p>
					<hr size="3" />
				</div>
				<div>
					<ul className="mainmenu-list">
						<li />
						<li>
							<a
								href="offcanvas"
								data-bs-toggle="offcanvas"
								role="button"
								aria-controls="offcanvasExample">
								Servicios
							</a>
						</li>
						<li>
							<a href="">Metodo de pago</a>
						</li>
						<li>
							<a href="">Facturación</a>
						</li>
						<li>
							<a href="">Mi cuenta</a>
						</li>
					</ul>
				</div>
				<div>
					<hr size="3" />
				</div>
			</div>

			<div className="offcanvas offxanvas-start" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasExample">
				hola
			</div>
*/
