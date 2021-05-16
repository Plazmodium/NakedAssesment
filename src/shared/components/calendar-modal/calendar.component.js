import './calendar.component.css';
import Calendar from 'react-calendar';
import React, { useState } from 'react';

export const CalendarModal = (props) => {
	let { handleClose, dateSelected } = props;
	const [dateValue] = useState(new Date());
	return (
		<div class="modal">
			<div class="modal-content">
				<div class="modal-title">
					<h3>Please choose a date</h3>
				</div>
				<Calendar
					onChange={handleClose}
					value={dateValue}
					onClickDay={dateSelected}
					minDate={new Date()}
					format="dd-MMMM-d-yyyy"
				/>
				<div class="close-button">
					<button type="button" onClick={handleClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default CalendarModal;
