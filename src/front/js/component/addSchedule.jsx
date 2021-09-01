import React, { useState } from "react";
import PropTypes from "prop-types";

const AddSchedule = props => {
	return (
		<li className="list-group-item">
			{props.inputValue}
			<i onClick={props.onMyClick} className="fas fa-trash-alt" />
		</li>
	);
};
AddSchedule.propTypes = {
	inputValue: PropTypes.string,
	isDone: PropTypes.bool,
	onMyClick: PropTypes.func
};
export default AddSchedule;