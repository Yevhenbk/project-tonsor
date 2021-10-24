import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useHistory } from "react-router";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/btnProfile.scss";

export const BtnProfile = () => {
	const { actions } = useContext(Context);

	let history = useHistory();

	return (
		<di>
			<DropdownButton id="dropdown-basic-button" title={localStorage.getItem("name")}>
				<Dropdown.Item href="#/action-1">
					<Link to={"/barberProfile"}>
						Mi Cuenta &nbsp;
						{/*props.name*/}
					</Link>
				</Dropdown.Item>
				<hr size="1" />
				<Dropdown.Item href="#/action-1">
					<Link to="/" onClick={actions.logOut}>
						Cerrar cesión &nbsp;
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
