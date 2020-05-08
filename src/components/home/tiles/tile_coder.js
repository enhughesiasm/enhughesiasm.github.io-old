import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../../shared/link_button';

const Tile_Coder = () => (
	<article className='tile is-child notification is-info has-text-centered'>
		<p className='title  is-size-5-mobile'>
			<Link to='/interactive'>coder</Link>
		</p>
		<p className='has-text-weight-bold'>
			professional software developer since 2009
		</p>
		<hr />
		<ul className=''>
			<li
				className='notification is-light is-info'
				style={{ marginTop: '.5rem' }}>
				<a href='https://enhughesiasm.com/complex'>
					<strong>free online game</strong>
					<p>create personality traits for a magical shop</p>
				</a>
			</li>

			<li
				className='notification is-light is-info'
				style={{ marginTop: '.5rem' }}>
				{/* <a href='https://q.enhughesiasm.com'> */}
				an interactive quiz for live events
				{/* </a> */}
			</li>
		</ul>
		<hr />
		<p>
			<LinkButton
				to='/contact'
				className='button is-small is-rounded is-info is-light is-inverted is-outlined'>
				need a developer? inquire here
			</LinkButton>
		</p>
	</article>
);

export default Tile_Coder;
