import React from 'react';
import { Route } from 'react-router-dom';
import { MainLayout } from '../shared/layouts/main_layout';

const MainRoute = ({component: Component, ...rest}) => {
	return (
		<Route {...rest} render={matchProps => (
			<MainLayout>
				<Component {...matchProps} />
			</MainLayout>
		)} />
	);
};

export default MainRoute;

MainRoute.propTypes = {
	// component: PropTypes.object.isRequired
};