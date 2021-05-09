import React from 'react';

import TileCoder from './tiles/tile_coder';
import TileTodo from './tiles/tile_todo';
import TileWriter from './tiles/tile_writer';
import TileNeil from './tiles/tile_neil';
import TileWorrier from './tiles/tile_worrier';
import TileSpeaker from './tiles/tile_speaker';
import TileComedian from './tiles/tile_comedian';
import TilePhysicist from './tiles/tile_physicist';
import TileTruths from './tiles/tile_truths';

const HomeTiles = () => (
	<div className='tile is-parent is-12 '>
		<div className='tile is-parent is-vertical is-4'>
			<TileNeil />
			<TileWorrier />
			<TileComedian />
		</div>
		<div className='tile is-parent is-vertical is-4'>
			<TileWriter />
			<TilePhysicist />
			<TileTodo />
		</div>
		<div className='tile is-parent is-vertical is-4'>
			<TileSpeaker />
			<TileCoder />
			<TileTruths />
		</div>
	</div>
);

export default HomeTiles;
