import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import SignupComponent from './features/auth/signup/signup.component';
import LoginComponent from './features/auth/login/login.component';
import HomeComponent from './features/home/home.component';
import BasketComponent from './features/basket/basked.component';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Route exact path="/" component={HomeComponent} />
			{/* <Route exact path="/" component={AppComponent} /> */}
			<Route path="/signup" component={SignupComponent} />
			<Route path="/login" component={LoginComponent} />
			<Route path="/basket" component={BasketComponent} />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
