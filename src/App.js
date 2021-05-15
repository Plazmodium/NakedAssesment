import { useHistory } from 'react-router-dom';
import './App.css';

function App() {
	const history = useHistory();
	const handleClick = () => history.push('/signup');

	return (
		<div>
			APP working
			<button type="button" onClick={handleClick}>
				Goodbye
			</button>
		</div>
	);
}

export default App;
