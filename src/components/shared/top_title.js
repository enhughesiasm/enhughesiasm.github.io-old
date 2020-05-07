import React from 'react';
import PropTypes from 'prop-types';

const TopTitle = (props) => (
	<article className={'message ' 	+ ((props.color + ' ') || ' is-dark ')
									+ ((props.size + ' ') || ' is-medium ')
									+ ((props.className + ' ') || ' ') }>
		<div className="message-header">
			<p>{props.title}</p>
		</div>
		{ props.subtitle ?
			<div className="message-body" >
				<div className="content">
					{props.subtitle}
				</div>
			</div>
			: '' }

	</article>
);

export default TopTitle;

TopTitle.propTypes = {
	color: PropTypes.string,
	size: PropTypes.string,
	className: PropTypes.string,
	title:  PropTypes.string.isRequired,
	subtitle:  PropTypes.string,
};