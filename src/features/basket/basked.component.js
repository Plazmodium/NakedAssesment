import './basket.component.css';
import moment from 'moment';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
	const dateSelectedCalendar = (date) => {
		let inADay = 60 * 60 * 24 * 1000;

		let formattedSelectedDate =
			date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

		const todayDate = new Date();
		let formattedTodayDate =
			todayDate.getFullYear() +
			'-' +
			(todayDate.getMonth() + 1) +
			'-' +
			todayDate.getDate();

		const selected = moment(date).format('YYYY-MM-DD');
		const selectedUnix = moment(selected).unix();

		const today = moment().format('YYYY-MM-DD');
		const todayUnix = moment(today).unix();

		const toSelectedNewDate = Date.parse(formattedSelectedDate);
		const toTodayNewDate = Date.parse(formattedTodayDate);

		const tomorrow = moment().add(1, 'days').calendar();
		// const tomorrowFormatted = moment(tomorrow).format('dddd');

		let inSevenDays = moment().add(7, 'days').calendar();
		let inSevenDaysFormatted = moment(inSevenDays).format('YYYY-MM-DD');
		let inSevenDaysUnix = moment(inSevenDaysFormatted).unix();

		console.log('selectedUnix', selectedUnix);
		console.log('yy', inSevenDaysUnix);

		switch (true) {
			case selectedUnix === todayUnix:
				console.log('Today');
				setCoverStartDate('Today');
				break;
			case toSelectedNewDate === toTodayNewDate + inADay:
				console.log('Tomorrow');
				setCoverStartDate('Tomorrow');
				break;
			case selectedUnix <= inSevenDaysUnix:
				console.log('rest', moment(date).format('dddd'));
				setCoverStartDate(moment(date).format('dddd'));
				break;
			default:
				console.log('deafult', moment(date).format('DD/MM/YY'));
				setCoverStartDate(moment(date).format('DD/MM/YY'));
				break;
		}
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
