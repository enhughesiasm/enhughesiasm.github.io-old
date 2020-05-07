import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../../shared/link_button';

const Tile_Comedian = () => (
	<article className='tile is-child notification is-dark has-text-centered'>
		<p className='title is-size-5-mobile'>
			<Link to='/humour-consultant'>comedian</Link>
		</p>
		<p className='notification is-dark'>
			as well as his own standup, Neil can help make <strong>your</strong>{' '}
			presentations and talks more entertaining.
		</p>
		<p>
			<LinkButton
				to='/humour-consultant'
				className='button is-rounded is-small is-dark is-inverted is-outlined'>
				learn more
			</LinkButton>
		</p>
	</article>
);

export default Tile_Comedian;
