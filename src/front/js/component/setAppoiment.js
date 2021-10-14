import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

import "../../styles/setAppoiment.scss";

export const SetAppoiment = () => {
	return (
		<div className="appoiment-container">
			<div className="selectServices-container">
				<div>
					<span> Selecciona los servicios que quieras contratar</span>
					<div>
						<Form.Group className="mb-3 form-group  " controlId="formGroupEmail">
							<Form.Label>Nombre</Form.Label>

							<Form.Control className="form-info-tonsor" type="text" placeholder="Nombre" value="Pedro" />
						</Form.Group>
					</div>
				</div>
			</div>
		</div>
	);
};
