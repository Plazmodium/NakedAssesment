import './basket-button.component.css';
import ShoppingBasketIcon from '../../../assets/shopping-basket.png';

export default function BasketButtonComponent() {
	return (
		<div className="container">
			<img src={ShoppingBasketIcon} alt="" className="basket-icon" />
			<div className="basket-text">Basket</div>
			<div className="basket-count">1</div>
		</div>
	);
}
