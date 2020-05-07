import React from 'react';
import PropTypes from 'prop-types';

const ArticleItem = (props) => (
	<li style={{listStyle: 'none'}}>
		<article>
			<a className="is-bold subtitle" href={props.url}>{props.title}</a>
			<p>{props.blurb}</p>
		</article>
	</li>
);

export default ArticleItem;

ArticleItem.propTypes = {
	url:  PropTypes.string.isRequired,
	title:  PropTypes.string.isRequired,
	blurb:  PropTypes.string.isRequired,
};