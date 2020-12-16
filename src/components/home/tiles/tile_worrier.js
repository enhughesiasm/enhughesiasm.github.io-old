import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../../shared/link_button';
import worries from './worries.json';

const worryLevels = [
	'mild',
	'gentle',
	'light',
	'moderate',
	'not quite tranquil',
	'almost calm',
];

const CurrentWorry = () => {
	const level = worryLevels[Math.floor(Math.random() * worryLevels.length)];
	const worry = worries[Math.floor(Math.random() * worries.length)];
	return (
		<>
			<p className='smallPrint'>
				<strong>concern level: </strong>
				<span>{level}</span>
			</p>
			<p className='smallPrint' style={{ marginBottom: '.7rem' }}>
				<strong>cause: </strong>
				<span>{worry}</span>
			</p>
		</>
	);
};

const Tile_Worrier = () => (
	<article className='tile is-child notification is-danger has-text-centered'>
		<p className='title is-size-5-mobile'>
			<Link to='/anxiety'>worrier</Link>
		</p>
		<p className='notification is-danger is-light'>
			<CurrentWorry />
		</p>
		<p className='mb-3'>
			Neil lived with terrible anxiety for years. Now he worries less
			harmfully.
		</p>
		<LinkButton
			to='/anxiety'
			className='button is-rounded is-small is-danger is-outlined is-light'>
			learn more
		</LinkButton>
	</article>
);

export default Tile_Worrier;
