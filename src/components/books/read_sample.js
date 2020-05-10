import React from 'react';
import PropTypes from 'prop-types';
import useViewport from '../shared/use_viewport';
import breakPoints from '../shared/viewport_breakpoints';

const ReadSample = (props) => {
	const { width } = useViewport();

	let text =
		width <= breakPoints.MOBILE
			? `Click to sample '${props.title}'`
			: `Click here to read the first chapter of ${props.title} for FREE!`;

	return (
		<div className='has-text-centered'>
			<a
				className='button is-warning is-rounded is-size-7-mobile'
				href={props.link}
				target='_blank'
				rel='noopener noreferrer'>
				{text}
			</a>
		</div>
	);
};

export default ReadSample;

ReadSample.propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};
