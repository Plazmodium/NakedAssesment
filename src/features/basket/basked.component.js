import './basket.component.css';
import { useHistory } from 'react-router-dom';
import NavBar from '../../shared/components/navbar/navbar.component';
import ItemComponent from '../../shared/components/item/item.component';

export default function BasketComponent() {
	return (
		<div>
			<NavBar></NavBar>
			<div class="basket-container">
				<div class="data-container">
					<h2 class="basket-title">Your Basket</h2>
					<div>Calendar</div>
					<div class="item-collection-container">
						<ItemComponent></ItemComponent>
					</div>
				</div>
			</div>
		</div>
	);
}
