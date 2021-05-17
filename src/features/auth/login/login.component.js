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

			<form className="form-container">
				<div className="naked-icon-container">
					<img className="n-icon" src={NakedIcon} alt="" />
				</div>
				<div className="input-container">
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

					<button className="signup-button" onClick={toBasketClick}>
						Login
					</button>
					<button className="login-button" onClick={toSignupClick}>
						Need an account?
					</button>
				</div>
			</form>
		</div>
	);
}
