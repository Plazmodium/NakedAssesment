import './basket.component.css';
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../shared/components/navbar/navbar.component';
import ItemComponent from '../../shared/components/item/item.component';

export default function BasketComponent() {
	const [dateValue, setDateValue] = useState(new Date());

	function c() {
		console.log(dateValue);
	}
	return (
		<div>
			<NavBar></NavBar>
			<div class="basket-container">
				<div class="data-container">
					<h2 class="basket-title">Your Basket</h2>
					<div onClick={c}>
						<Calendar onChange={setDateValue} value={dateValue} />
					</div>
					<div class="item-collection-container">
						<ItemComponent></ItemComponent>
					</div>
				</div>
			</div>
		</div>
	);
}
