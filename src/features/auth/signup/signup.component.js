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

			<form className="form-container">
				<div className="naked-icon-container">
					<img className="s-n-icon" src={NakedIcon} alt="" />
				</div>
				<div className="s-input-container">
					<input className="input" placeholder="Name" type="text" name="name" />
					<input
						className="input"
						placeholder="Surname"
						type="text"
						name="surname"
					/>
					<input
						className="input"
						placeholder="Email"
						type="email"
						name="email"
					/>
					<input
						className="input"
						placeholder="Password"
						type="password"
						name="password"
					/>

					<button className="s-signup-button" onClick={toBasketClick}>
						Create account
					</button>
					<button className="s-login-button" onClick={toLoginClick}>
						Already have an account?
					</button>
				</div>
			</form>
		</div>
	);
}
