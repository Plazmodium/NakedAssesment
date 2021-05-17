import './calendar.component.css';
import Calendar from 'react-calendar';
import React, { useState } from 'react';

export const CalendarModal = (props) => {
	let { handleClose, dateSelected } = props;
	const [dateValue] = useState(new Date());
	return (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-title">
					<h3>Please choose a date</h3>
				</div>
				<Calendar
					onChange={handleClose}
					value={dateValue}
					onClickDay={dateSelected}
					minDate={new Date()}
					format="dd-MMMM-d-yyyy"
				/>
				<div className="close-container">
					<button className="close-button" type="button" onClick={handleClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default CalendarModal;
