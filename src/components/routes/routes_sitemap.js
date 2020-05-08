import React from 'react';
import { Switch, Route } from 'react-router-dom';

// this is just a dummy duplicate for our sitemap generator
// the generator blows up when we try to use HomeRoute or MainRoute because it starts importing all kinds of
// things it can't handle, and it's honestly just not worth the hassle to make it better than this
export default (
	<Switch>
		<Route path='/' />

		<Route path='/anxiety' />

		<Route path='/books' />
		<Route path='/walking-on-custard' />
		<Route path='/woc' />

		<Route path='/shop-before-life' />
		<Route path='/sbl' />
		<Route path='/articles' />

		<Route path='/speaking' />
		<Route path='/humour-consultant' />
		<Route path='/comedy-writing' />

		<Route path='/occasional-email-experience' />
		<Route path='/mailing' />

		<Route path='/interactive' />
		{/* <Route path='/complex' /> */}

		<Route path='/contact' />
		<Route path='/support' />
		<Route path='/privacy' />

		<Route path='/now' />

		<Route path='/confirm-signup' />
		<Route path='/signup-confirmed' />

		<Route />
	</Switch>
);
