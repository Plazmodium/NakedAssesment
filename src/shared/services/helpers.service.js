import moment from 'moment';

export function DateParse(date) {
	let theDate = {};
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

	let inSevenDays = moment().add(7, 'days').calendar();
	let inSevenDaysFormatted = moment(inSevenDays).format('YYYY-MM-DD');
	let inSevenDaysUnix = moment(inSevenDaysFormatted).unix();

	switch (true) {
		case selectedUnix === todayUnix:
			console.log('Today');
			theDate = {
				description: 'Today',
				date: moment(date).format('YYYY-MM-DD'),
			};
			break;
		case toSelectedNewDate === toTodayNewDate + inADay:
			console.log('Tomorrow');
			theDate = {
				description: 'Tomorrow',
				date: moment(date).format('YYYY-MM-DD'),
			};

			break;
		case selectedUnix <= inSevenDaysUnix:
			theDate = {
				description: moment(date).format('dddd'),
				date: moment(date).format('YYYY-MM-DD'),
			};

			break;
		default:
			theDate = {
				description: moment(date).format('DD/MM/YY'),
				date: moment(date).format('YYYY-MM-DD'),
			};
			break;
	}

	return theDate;
}
