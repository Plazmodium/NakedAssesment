import './calendar.component.js';
import Calendar from 'react-calendar';
import React, { useState } from 'react';

export const CalendarModal = (props) => {
	const { handleClose, show, children } = props;

	let showHideClassName = show ? 'modal display-block' : 'modal display-none';
	console.log('showHideClassName', showHideClassName);
	const [dateValue, setDateValue] = useState(new Date());

	return (
		<div class={showHideClassName}>
			<section class="modal-main">
				<Calendar onChange={setDateValue} value={dateValue} />
				<button type="button" onClick={handleClose}>
					Close
				</button>
			</section>
		</div>
	);
};

export default CalendarModal;
