import React, { useState } from "react";
import PropTypes from "prop-types";
import Hour from "./hour.jsx";

const AddSchedule = props => {
	const [input, setInput] = useState({ hour: "" });
	const [inputList, setInputList] = useState([]);

	const handleSubmit = e => {
		e.preventDefault();
		setInputList([...inputList, input]);
		setInput({ hour: "" });
	};

	const clickDelete = targetIndex => {
		setInputList(inputList.filter((_, index) => index !== targetIndex));
	};

	let hourSelected = inputList.map((value, index) => (
		<Hour inputValue={value.hour} key={index} onMyClick={() => clickDelete(index)} />
	));

	return (
		<form className="scheduleForm" onSubmit={handleSubmit}>
			<div className="mySchedule">
				<input
					type="time"
					id="meeting-time"
					name="meeting-time"
					className="myHourInput"
					value={input.hour}
					onChange={e => setInput({ hour: e.target.value })}
				/>
				<input type="submit" htmlFor="meeting-time" value="+ elige la hora" className="addButton" />
			</div>
			<ul className="hourList">
				<li className="myHour">{hourSelected}</li>
			</ul>
		</form>
	);
};
AddSchedule.propTypes = {
	inputValue: PropTypes.string,
	isDone: PropTypes.bool,
	onMyClick: PropTypes.func
};
export default AddSchedule;
