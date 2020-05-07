import React from 'react';
import RandomSubtitle from './random_subtitle';
import {Link} from 'react-router-dom';
import Trait from '../books/sbl/trait';

const HomeTitle = () => (
	<div className="tile is-parent is-12 notification is-light">
		<div className="tile is-child">
			<div className="content">
				<h1 className="title is-size-5 is-marginless is-paddingless has-text-centered">
						welcome to enhughesiasm
				</h1>
				{/* <hr style={{margin:'.3rem 0 .5rem'}}/> */}
				<h3 className="subtitle is-size-6 is-paddingless has-text-centered" style={{fontWeight:'normal', marginTop:'.2rem'}}>
					<RandomSubtitle/>
				</h3>
				<hr style={{margin:'.9rem 0 .5rem'}}/>
				<p className="is-flex" style={{ justifyContent:'center', alignItems: 'center'}}>
					<span className="smallPrint has-text-centered" >take a trait from <Link to="/sbl">The Shop Before Life</Link>:</span>
					<Trait style={{maxWidth:'325px'}}/>
				</p>
			</div>
		</div>
	</div>
);

export default HomeTitle;