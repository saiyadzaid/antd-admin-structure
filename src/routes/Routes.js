import React from 'react';
import { Router as MainRouter, Route, Switch } from 'react-router-dom';
import history from '../helpers/history';
import Home from '../Home/Home';
import AdminLayout from '../Layout/AdminLayout';

export default function Routes() {
	return (
		<div>
			<MainRouter history={history}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/dashboard" component={AdminLayout} />
				</Switch>
			</MainRouter>
		</div>
	);
}
