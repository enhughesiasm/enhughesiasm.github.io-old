import React from 'react';
import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';

import ComplexLayout from '../shared/layouts/complex_layout';

const ComplexRoute = ({ ...rest }) => {
	return <Route {...rest} render={() => <ComplexLayout />} />;
};

export default ComplexRoute;

ComplexRoute.propTypes = {
	//component: PropTypes.element.
};
