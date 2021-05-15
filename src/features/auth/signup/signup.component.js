import './signup.component.css';
import { useHistory } from 'react-router-dom';
import NavBar from '../../../shared/components/navbar/navbar.component';
import NakedIcon from '../../../assets/naked-icon.png';

export default function SignupComponent() {
	const history = useHistory();
	const toBasketClick = () => history.push('/basket');
	const toLoginClick = () => history.push('/login');

	return (
		<div>
			<NavBar></NavBar>

			<form class="form-container">
				<div class="naked-icon-container">
					<img class="n-icon" src={NakedIcon} alt="" />
				</div>
				<div class="input-container">
					<input class="input" placeholder="Name" type="text" name="name" />
					<input
						class="input"
						placeholder="Surname"
						type="text"
						name="surname"
					/>
					<input class="input" placeholder="Email" type="email" name="email" />
					<input
						class="input"
						placeholder="Password"
						type="password"
						name="password"
					/>

					<button class="signup-button" onClick={toBasketClick}>
						Create account
					</button>
					<button class="login-button" onClick={toLoginClick}>
						Already have an account?
					</button>
				</div>
			</form>
		</div>
	);
}
