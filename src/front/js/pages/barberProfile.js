import React, { useState } from "react";
import "../../styles/barberProfile.scss";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import { MiCuenta } from "../component/miCuenta.js";
import { Facturacion } from "../component/facturacion.js";

import logoPositive from "../../img/tonsor-logo-negativo.png";
import { PaymentOption } from "../component/paymentOption.js";
import AddService from "../component/addService.jsx";

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
							<Nav.Link eventKey="1" onClick={() => toggleTab("1")}>
								Servicios
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="2">Metodo de pago</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="3">Facturación</Nav.Link>
						</Nav.Item>

						<div>
							<hr size="3" />
						</div>

						<Nav.Item>
							<Nav.Link eventKey="4">Mi Cuenta</Nav.Link>
						</Nav.Item>
						<div className="img-profile-logo-container">
							<img className="img-profile-logo" src={logoPositive} />
						</div>
					</Nav>
				</div>

				<div className="r-menu col-sm-10">
					<Tab.Content>
						<Tab.Pane eventKey="1">
							<div>
								<AddService />
								Servicios
							</div>
						</Tab.Pane>
						<Tab.Pane eventKey="2">
							<div>
								<PaymentOption />
							</div>
						</Tab.Pane>
						<Tab.Pane eventKey="3">
							<div>
								<Facturacion />
							</div>
						</Tab.Pane>
						<Tab.Pane eventKey="4">
							<MiCuenta />
						</Tab.Pane>
					</Tab.Content>
				</div>
			</div>
		</Tab.Container>
	);
};
