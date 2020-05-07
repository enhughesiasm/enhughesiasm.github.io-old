import React from 'react';
import HomeTitle from './home_title';
import HomeTiles from './home_tiles';
import MultipodBar from './multipod_bar';
import HelmetContainer from '../shared/helmet_container';

class Home extends React.Component {

	constructor(props){
		super(props);
		// document.body.classList.remove('has-navbar-fixed-top');
	}

	componentDidMount(){
		document.title = 'enhughesiasm - the online home of Neil Hughes';
	}

	render() {

		return (
			<div className="homeTiles tile is-ancestor has-spacing-top is-vertical">
				<HelmetContainer page="home" />
				<HomeTitle/>
				<MultipodBar/>
				<HomeTiles/>
			</div>
		);
	}
}

export default Home;