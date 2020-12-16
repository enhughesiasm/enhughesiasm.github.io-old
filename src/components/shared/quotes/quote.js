import React from 'react';
import PropTypes from 'prop-types';

const Quote = (props) => (
	<blockquote>
		{props.showLoader && <div className='loader'></div>}

		<div
			className='quoteText'
			style={{ opacity: props.opacity ? props.opacity : 1 }}>
			{/* dangerously set HTML so I can include tags in the raw quote text */}
			<span dangerouslySetInnerHTML={{ __html: props.quote }} />
			<cite dangerouslySetInnerHTML={{ __html: props.cite }} />
		</div>

		{/* <div style={{clear:'both'}}></div> */}
	</blockquote>
);

export default Quote;

Quote.propTypes = {
	quote: PropTypes.string.isRequired,
	cite: PropTypes.string.isRequired,
	opacity: PropTypes.number,
	showLoader: PropTypes.bool,
};
