import React, { useState } from "react";
import PropTypes from "prop-types";

const Hour = props => {
	return (
		<div className="myServiceCardHolder">
			<div className="newServiceHead">
				<span className="serviceImgHolder" />
				<i onClick={props.onMyClick} className="  fas fa-trash-alt" />
			</div>
			<p className="pService">{props.inputValue}</p>
		</div>
	);
};
Hour.propTypes = {
	inputValue: PropTypes.string,
	isDone: PropTypes.bool,
	onMyClick: PropTypes.func
};
export default Hour;
