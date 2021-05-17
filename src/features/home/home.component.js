import { useHistory } from 'react-router-dom';
import './home.component.css';
import NavBar from '../../shared/components/navbar/navbar.component';
import HomeFooter from './components/footer.component';
import NakedImage from '../../assets/naked-home.png';

export default function HomeComponent() {
	const history = useHistory();
	const signUpClick = () => history.push('/signup');
	const loginClick = () => history.push('/login');

	return (
		<div>
			<NavBar></NavBar>
			<div className="body-text">
				<div className="left-side-text">
					<h1 className="text1">The new way to insure your stuff</h1>
					<h5 className="text2">
						Instant, honest insurance at game-changing prices.
					</h5>
					<div className="auth-button-container">
						<button className="signup-btn" onClick={signUpClick}>
							Sign up
						</button>
						<button className="login-btn" onClick={loginClick}>
							Login
						</button>
					</div>
				</div>
				<div className="naked-home-image">
					<img src={NakedImage} alt="" width="100%" />
				</div>
			</div>
			<div>
				<HomeFooter></HomeFooter>
			</div>
		</div>
	);
}
