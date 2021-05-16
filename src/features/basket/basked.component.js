import './basket.component.css';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CalendarIcon from '../../assets/calendar-icon.png';
import PencilIcon from '../../assets/pencil.svg';
import NavBar from '../../shared/components/navbar/navbar.component';
import ItemComponent from '../../shared/components/item/item.component';
import CalendarModal from '../../shared/components/calendar-modal/calendar.component';

export default function BasketComponent() {
	let [showCalendar, setCalendar] = useState(true);
	let [coverStartDate, setCoverStartDate] = useState('today');

	function showCal() {
		if (showCalendar) {
			return (
				<div>
					<CalendarModal
						show={showCalendar}
						handleClose={activateCalendar}
					></CalendarModal>
				</div>
			);
		} else {
			return (
				<div class="calendar-pill-container">
					<div class="pill-container">
						<div class="pill-left">
							<img src={CalendarIcon} alt="" width="20px" height="auto" />
							<div class="cover-date-text">
								Cover starts <span class="date-text">{coverStartDate}</span>{' '}
							</div>
						</div>
						<div class="pill-right">
							<img
								onClick={activateCalendar}
								src={PencilIcon}
								alt=""
								width="20px"
								height="auto"
							/>
						</div>
					</div>
				</div>
			);
		}
	}

	const activateCalendar = () => {
		showCalendar = showCalendar ? setCalendar(false) : setCalendar(true);
	};

	return (
		<div>
			<NavBar></NavBar>
			<div class="basket-container">
				<div class="data-container">
					<h2 class="basket-title">Your Basket</h2>
					{showCal()}
					<div class="item-collection-container">
						<ItemComponent></ItemComponent>
					</div>
				</div>
			</div>
		</div>
	);
}
