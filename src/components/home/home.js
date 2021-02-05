import React from 'react';
import HomeTitle from './home_title';
import HomeTiles from './home_tiles';

import HelmetContainer from '../shared/helmet_container';

const Home = () => (
	<div className='homeTiles tile is-ancestor is-vertical'>
		<HelmetContainer page='home' />
		<HomeTitle />
		<HomeTiles />
	</div>
);

export default Home;
