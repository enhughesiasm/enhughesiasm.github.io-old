import React, { Suspense, useEffect } from 'react';
import { Switch, useLocation } from 'react-router-dom';

import allRoutes from './all_routes';

import NotFound from '../not_found';

// route types
import HomeRoute from './types/home_route';
import MainRoute from './types/main_route';

function usePageViews(location) {
	useEffect(() => {
		if (window.gtag) {
			// send navigation event to analytics, as we've navigated somewhere
			const canonicalPath = allRoutes.find(
				(a) =>
					a.path === location.pathname ||
					a.path + '/' === location.pathname
			).canonical;

			window.gtag('config', 'UA-149409126-1', {
				anonymize_ip: true,
				page_path: canonicalPath,
			}); // anonymize all users IP addresses
		}
	}, [location]);
}

const Routes = () => {
	let location = useLocation();
	usePageViews(location);

	return (
		<Switch>
			{allRoutes
				.filter((a) => a.layoutType === 'home')
				.map((r) => (
					<HomeRoute
						exact={r.exact}
						key={r.name}
						path={r.path}
						component={r.component}
					/>
				))}
			{allRoutes
				.filter((a) => a.layoutType === 'main')
				.map((r) => (
					<MainRoute
						key={r.name}
						path={r.path}
						component={r.component}
					/>
				))}

			<MainRoute component={NotFound} />
		</Switch>
	);
};

export default Routes;
