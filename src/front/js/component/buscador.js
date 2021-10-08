import React, { useState } from "react";
import "../../styles/buscador.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//imports de Mui-date
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker } from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";

export const Buscador = () => {
	const [show, setShow] = useState(false);

	const [typeService, settypeService] = useState(null);

	const handleChange = e => {
		settypeService(e.target.value);
		console.log(typeService);
	};

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//func save-time
	const [saveDate, setsaveDate] = useState(new Date());
	//func typeService
	const arrayService = [
		{ name: "Depilación de Piernas", service: "DP" },
		{ name: "Depilación de Espalda", service: "DE" },
		{ name: "Depilación de Torso", service: "DT" },
		{ name: "Pigmentación", service: "PIG" },
		{ name: "Pedicure", service: "P" },
		{ name: "Manicure", service: "M" },
		{ name: "Corte de Cabello y Barba", service: "CCB" }
	];
	arrayService.map((elem, index) => {
		if (typeService == elem.service) {
			return elem.name, elem.service;
		}
	});

	const returnServiceString = () => typeService => {
		switch (typeService) {
			case "DT":
				return "Depilación de Torso";
			case "CCB":
				return "Corte de Cabello y Barba";
			case "DP":
				return "Depilación de Piernas";
			case "DE":
				return "Depilación de Espalda";
			case "M":
				return "Manicure";
			case "P":
				return "Pedicure";
			case "PIG":
				return "Pigmentación";
			default:
				return "Servicio no válido";
		}
	};

	//returnServiceString();

	return (
		<>
			<Button className="search-modal-first" onClick={handleShow}>
				<p>Selecciona aquí: dónde, cuándo y el servicio que deseas </p> <FontAwesomeIcon icon={faSearchPlus} />
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				animation={true}
				size="xl"
				aria-labelledby="contained-modal-title-vcenter"
				centered>
				<Modal.Header>
					<Modal.Title classNeme="h1-cabecera-m">Selecciona los datos</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="container">
						<div className="row">
							<div className="col-4">
								<h1 className="h1-cabecera-m">Selecciona el día y la hora</h1>
								<label htmlFor="datetime">Horarios</label>
								<MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
									<div className="container">
										<div>
											<label />
											<DateTimePicker value={saveDate} onChange={setsaveDate} />
										</div>
									</div>
								</MuiPickersUtilsProvider>
							</div>
							<div className="col-4">
								<h2 className="h1-cabecera-m">Selecciona tu servicio</h2>
								<label htmlFor="services">Servicios</label>
								<select
									onChange={handleChange}
									id="type_Service"
									className="form-select form-select mb-3"
									aria-label=".form-select example">
									<option selected>Abrir opciones</option>
									<option value="CCB">Corte de Cabello y Barbería</option>
									<option value="DE">Depilacíon de Espalda</option>
									<option value="DT">Depilacíon de Torso</option>
									<option value="DP">Depilacíon de Piernas</option>
									<option value="M">Manicure</option>
									<option value="P">Pedicure</option>
									<option value="PIG">Pigmentación</option>
								</select>
							</div>
							<div className="col-4">
								<h3 className="h1-cabecera-m">Selecciona a tu barbero</h3>
								<label htmlFor="barber">Buscar</label>
								<input type="text" className="p-dark-inp" />
							</div>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button className="butt-modal-first" onClick={handleClose}>
						Cerrar
					</Button>
					<Button className="butt-modal-first" onClick={handleShow}>
						Confirmar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
