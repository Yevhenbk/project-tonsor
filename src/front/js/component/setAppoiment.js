import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import "../../styles/setAppoiment.scss";

export const SetAppoiment = () => {
	return (
		<div>
			<div className="selectServices-container">
				<div>
					<h1> Selecciona los servicios que quieras contratar</h1>
					<div>
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
								<InputGroup.Checkbox
									aria-label="Checkbox for following text input"
									value="Corte de pelo"
								/>
							</InputGroup.Prepend>
							<FormControl aria-label="Text input with checkbox" />
						</InputGroup>
					</div>
				</div>
			</div>
		</div>
	);
};
