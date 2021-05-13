import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../../shared/link_button';

const TileComedian = () => (
	<article className='tile is-child notification is-info has-text-centered'>
		<p className='title is-size-5-mobile'>
			<Link to='/humour-consultant'>comedian</Link>
		</p>
		<p className='notification is-info'>
			as well as performing his own standup, Neil can{' '}
			<strong>help you be funnier</strong> during your presentations and
			speeches
		</p>
		<p>
			<LinkButton
				to='/humour-consultant'
				className='button is-rounded is-small is-info is-inverted is-outlined'>
				learn more
			</LinkButton>
		</p>
	</article>
);

export default TileComedian;
