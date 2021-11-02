import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";

import "../../styles/calendar.scss";

export default class DemoApp extends React.Component {
	render() {
		return (
			<div className="calendar-container">
				<FullCalendar
					plugins={[dayGridPlugin, timeGridPlugin]}
					initialView="dayGridMonth"
					weekends={false}
					events={[{ title: "Corde pelo", date: "2021-10-25" }, { title: "event 2", date: "2021-10-02" }]}
					headerToolbar={{
						left: "prev,next today",
						center: "title",
						right: "timeGridDay,timeGridWeek,dayGridMonth"
					}}
					businessHours={{
						// days of week. an array of zero-based day of week integers (0=Sunday)
						daysOfWeek: [1, 2, 3, 4, 5], // Monday - Thursday

						startTime: "10:00", // a start time (10am in this example)
						endTime: "22:00" // an end time (6pm in this example)
					}}
				/>
			</div>
		);
	}
}
