import React from 'react';

import { Route } from 'react-router-dom';
import { HomeLayout } from '../../shared/layouts/home_layout';

const HomeRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(matchProps) => (
				<HomeLayout>
					<Component {...matchProps} />
				</HomeLayout>
			)}
		/>
	);
};

export default HomeRoute;

HomeRoute.propTypes = {
	// component: PropTypes.object.isRequired
};
