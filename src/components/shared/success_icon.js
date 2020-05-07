import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from './font_awesome';


const SuccessIcon = ({ position, success, bottom }) =>  
			<span className={ position + ' icon is-small'} style={{ color: (success ? 'green' : 'red'), top: 'auto', bottom: (bottom ? '0' : 'auto'), marginRight: '.5rem' }}>
				<FontAwesome icon={success ? 'check' : 'times'}  />
			</span>;
		
export default SuccessIcon;

SuccessIcon.propTypes = {
	success: PropTypes.bool.isRequired,
	position: PropTypes.string
};