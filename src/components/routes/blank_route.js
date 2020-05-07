import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { BlankLayout } from '../shared/layouts/blank_layout';

const BlankRoute = ({component: Component, ...rest}) => {
	return (
		<Route {...rest} render={matchProps => (
			<BlankLayout>
				<Component {...matchProps} />
			</BlankLayout>
		)} />
	);
};

export default BlankRoute;

BlankRoute.propTypes = {
	component: PropTypes.object.isRequired
};