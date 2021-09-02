import React, { useState } from "react";
import PropTypes from "prop-types";

const Hour = props => {
	return (
		<li className="listOf">
			<span className="scheduleHours">{props.inputValue}</span>
			<i onClick={props.onMyClick} className="  fas fa-trash-alt" />
		</li>
	);
};
Hour.propTypes = {
	inputValue: PropTypes.string,
	isDone: PropTypes.bool,
	onMyClick: PropTypes.func
};
export default Hour;
