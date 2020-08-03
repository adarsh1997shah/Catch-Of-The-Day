import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';


// Stateless function.
const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={StorePicker} />
				<Route path="/store/:store" component={App} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default Router;