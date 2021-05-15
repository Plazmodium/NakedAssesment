import './navbar.component.css';
import { useHistory } from 'react-router-dom';
import BasketButton from '../basket-button/basket-button.component';
import NakedLogo from '../../../assets/NakedText.png';

export default function NavBarComponent() {
	const history = useHistory();
	const toHomeClick = () => history.push('/');
	return (
		<div className="header" id="myHeader">
			<div className="header-button-container">
				<img
					onClick={toHomeClick}
					src={NakedLogo}
					className="naked-image"
					alt=""
				/>
				<BasketButton></BasketButton>
			</div>
		</div>
	);
}
