import React from 'react';
import PropTypes from 'prop-types';

const ArticleItem = (props) => (
	<li style={{ listStyle: 'none' }}>
		<article className='box mb-3'>
			<a
				className='is-bold subtitle is-size-4 has-text-centered'
				href={props.url}>
				{props.title}
			</a>
			<p>{props.blurb}</p>
		</article>
	</li>
);

export default ArticleItem;

ArticleItem.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	blurb: PropTypes.string.isRequired,
};
