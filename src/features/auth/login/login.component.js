import './login.component.css';
import { useHistory } from 'react-router-dom';
import NavBar from '../../../shared/components/navbar/navbar.component';
import NakedIcon from '../../../assets/naked-icon.png';

export default function LoginComponent() {
	const history = useHistory();
	const toBasketClick = () => history.push('/basket');
	const toSignupClick = () => history.push('/signup');
	return (
		<div>
			<NavBar></NavBar>

			<form class="form-container">
				<div class="naked-icon-container">
					<img class="n-icon" src={NakedIcon} alt="" />
				</div>
				<div class="input-container">
					<input class="input" placeholder="Email" type="email" name="email" />
					<input
						class="input"
						placeholder="Password"
						type="password"
						name="password"
					/>

					<button class="signup-button" onClick={toBasketClick}>
						Login
					</button>
					<button class="login-button" onClick={toSignupClick}>
						Need an account?
					</button>
				</div>
			</form>
		</div>
	);
}
