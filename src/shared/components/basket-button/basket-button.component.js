import './basket-button.component.css';
import { useHistory } from 'react-router-dom';
import ShoppingBasketIcon from '../../../assets/shopping-basket.png';

export default function BasketButtonComponent() {
	const history = useHistory();
	const toBasketClick = () => history.push('/basket');

	return (
		<div onClick={toBasketClick} className="container">
			<img src={ShoppingBasketIcon} alt="" className="basket-icon" />
			<div className="basket-text">Basket</div>
			<div className="basket-count">1</div>
		</div>
	);
}
