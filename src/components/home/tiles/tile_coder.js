import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../../shared/link_button';

const TileCoder = () => (
	<article className='tile is-child notification is-warning has-text-centered'>
		<p className='title is-size-5-mobile'>
			<Link to='/interactive'>coder</Link>
		</p>
		<p className=''>professional software developer since 2009</p>
		<hr />
		<ul className='has-text-primary'>
			<li className='mt-3 is-size-7'>
				<a href='https://enhughesiasm.com/complex'>
					<p>
						<strong>Supplier's Complex</strong> - create personality
						traits for a magical shop
					</p>
				</a>
			</li>
			<li className='mt-3 is-size-7'>
				<a href='https://ourpomona.org'>
					<p>
						<strong>Our Pomona</strong> - a community-led database
						for cider producers
					</p>
				</a>
			</li>
			<li className='mt-3 is-size-7'>
				<a href='https://enhughesiasm.com/q'>
					<strong>Q</strong> - an interactive quiz for live events
				</a>
			</li>
		</ul>
		<hr />
		<p>
			<LinkButton
				to='/contact'
				className='button is-small is-rounded is-info is-outlined'>
				need a developer? inquire here
			</LinkButton>
		</p>
	</article>
);

export default TileCoder;
