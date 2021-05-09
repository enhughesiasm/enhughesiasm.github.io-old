import React from 'react';
import PropTypes from 'prop-types';

const TopTitle = (props) => (
	<div
		className={
			'mb-6 has-text-centered ' +
			('has-text-' + props.color) +
			(props.size + ' ' || ' is-medium ') +
			(props.className + ' ' || ' ')
		}>
		<h2 className='title has-text-centered has-text-primary'>
			{props.title}
		</h2>

		<h3 className='subtitle has-text-grey-light'>{props.subtitle}</h3>
	</div>
);

export default TopTitle;

TopTitle.propTypes = {
	color: PropTypes.string,
	size: PropTypes.string,
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
};
