import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const BtnProfile = () => {
	return (
		<di>
			<DropdownButton id="dropdown-basic-button" title="Hola User nada">
				<Dropdown.Item href="#/action-1">
					<Link to={"/barberProfile"}>
						Mi Cuenta &nbsp;
						{/*props.name*/}
					</Link>
				</Dropdown.Item>
			</DropdownButton>
		</di>
	);
};
BtnProfile.propTypes = {
	name: PropTypes.string
};
