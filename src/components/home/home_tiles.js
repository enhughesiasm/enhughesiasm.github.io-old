import React from 'react';

import Tile_Coder from './tiles/tile_coder';
import Tile_Todo from './tiles/tile_todo';
import Tile_Writer from './tiles/tile_writer';
import Tile_Neil from './tiles/tile_neil';
import Tile_Worrier from './tiles/tile_worrier';
import Tile_Speaker from './tiles/tile_speaker';
import Tile_Comedian from './tiles/tile_comedian';
import Tile_Physicist from './tiles/tile_physicist';

const HomeTiles = () => (

	<div className="tile is-parent is-12 ">
		<div className="tile is-parent is-vertical is-4">
			<Tile_Neil/>
			<Tile_Worrier/>
			<Tile_Comedian/>
		</div>
		<div className="tile is-parent is-vertical is-4">
			<Tile_Writer/>
			<Tile_Physicist/>
			<Tile_Todo/>
		</div>
		<div className="tile is-parent is-vertical is-4">
			<Tile_Speaker/>
			<Tile_Coder/>
		</div>
	</div>


);

export default HomeTiles;