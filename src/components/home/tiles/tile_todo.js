import React from 'react';
import { Link } from 'react-router-dom';
const Tile_Todo = () => (
	<article className="tile is-child notepaper">
		<strong>TODO:</strong>
		<ul>
			<li>- sort life out</li>
			<li>- dairy alternatives?</li>
			<li>- <strong><Link to="/support">support humorous mental health outreach</Link></strong></li>
			<li>- visit space</li>
		</ul>
	</article>
);

export default Tile_Todo;