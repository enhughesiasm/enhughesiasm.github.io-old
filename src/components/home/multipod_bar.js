import React from 'react';
import { Link } from 'react-router-dom';
import sblCover from './../../resources/images/sblCover.jpg';
import Trait from '../books/sbl/trait';

class MultipodBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return null;
		// (
		// <div className="tile is-parent">
		// 	<div className="tile is-child notification is-light is-paddingless" style={{display:'flex', flexDirection:'column', 'alignItems': 'center'}}>
		// 		<span className="subtitle is-size-6 is-size-6-mobile" style={{display:'inline-flex', alignItems:'center'}}>
		// 			<Link to="/shop-before-life"><img src={sblCover} style={{width:'35px', marginRight:'.3rem'}}/></Link>
		// 			<Link to="/shop-before-life">The Shop Before Life: OUT NOW!</Link>
		// 		</span>
		// 		<em className="is-size-7 is-size-6-mobile">Who will you become..?</em><Trait />

		// 	</div>

		// </div>
		// );
	}
}

export default MultipodBar;
