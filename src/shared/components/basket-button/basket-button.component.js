import './basket-button.component.css';
import ShoppingBasketIcon from '../../../assets/shopping-basket.png';

export default function BasketButtonComponent() {
	return (
		<div class="container">
			<img src={ShoppingBasketIcon} alt="" class="basket-icon" />
			<div class="basket-text">Basket</div>
			<div class="basket-count">1</div>
		</div>
	);
}
