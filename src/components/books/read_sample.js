import React from 'react';
import PropTypes from 'prop-types';

const ReadSample = props => (
	<div className='has-text-centered'>
		<a
			className='button is-warning is-rounded'
			href={props.link}
			target='_blank'
			rel='noopener noreferrer'>
			Click here to read the first chapter of {props.title} for FREE!
		</a>
	</div>
);

// const ReadSample = (props) => <article className="message is-dark">
// 	<div className="message-header has-text-centered">
// 		<p>Want to sample { props.title } ? </p>
// 	</div>
// 	<div className="message-body">
// 		<div className="content has-text-centered">
// 			<p>Then <a href={props.link} target="_blank" rel="noopener noreferrer">click here</a> to get the <strong>first chapter or two for FREE.</strong></p>
// 		</div>
// 	</div>
// </article>;

export default ReadSample;

ReadSample.propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired
};
