import './basket.component.css';
import { DateParse } from '../../shared/services/helpers.service';
import React, { useState } from 'react';
import CalendarIcon from '../../assets/calendar-icon.png';
import PencilIcon from '../../assets/pencil.svg';
import NavBar from '../../shared/components/navbar/navbar.component';
import ItemComponent from '../../shared/components/item/item.component';
import CalendarModal from '../../shared/components/calendar-modal/calendar.component';

export default function BasketComponent() {
	let [showCalendar, setCalendar] = useState(false);
	let [coverStartDate, setCoverStartDate] = useState('Today');

	function showCal() {
		if (showCalendar) {
			return (
				<div>
					<CalendarModal
						show={showCalendar}
						handleClose={activateCalendar}
						dateSelected={dateSelectedCalendar}
					></CalendarModal>
				</div>
			);
		} else {
			return (
				<div className="calendar-pill-container">
					<div className="pill-container">
						<div className="pill-left">
							<img src={CalendarIcon} alt="" width="20px" height="auto" />
							<div className="cover-date-text">
								Cover starts <span className="date-text">{coverStartDate}</span>{' '}
							</div>
						</div>
						<div className="pill-right">
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
	const dateSelectedCalendar = (date) => {
		setCoverStartDate(DateParse(date).description);
		console.log('chosen Date => ', DateParse(date).date);
	};

	return (
		<div>
			<NavBar></NavBar>
			<div className="basket-container">
				<div className="data-container">
					<h2 className="basket-title">Your Basket</h2>
					{showCal()}
					<div className="item-collection-container">
						<ItemComponent></ItemComponent>
					</div>
				</div>
			</div>
		</div>
	);
}
