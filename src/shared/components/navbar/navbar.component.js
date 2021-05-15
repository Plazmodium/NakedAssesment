import './navbar.component.css';
import BasketButton from '../basket-button/basket-button.component';
import NakedLogo from '../../../assets/NakedText.png';

export default function NavBarComponent() {
	return (
		<div className="header" id="myHeader">
			<div className="header-button-container">
				<img src={NakedLogo} className="naked-image" alt="" />
				<BasketButton></BasketButton>
			</div>
		</div>
	);
}
