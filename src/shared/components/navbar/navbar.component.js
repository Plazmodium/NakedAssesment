import './navbar.component.css';
import BasketButton from '../basket-button/basket-button.component';
import NakedLogo from '../../../assets/NakedText.png';

export default function NavBarComponent() {
	return (
		<div class="header" id="myHeader">
			<div class="header-button-container">
				<img src={NakedLogo} class="naked-image" alt="" />
				<BasketButton></BasketButton>
			</div>
		</div>
	);
}
