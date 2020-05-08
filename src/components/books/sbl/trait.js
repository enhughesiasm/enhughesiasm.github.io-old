import React from 'react';
import { getTraitName } from './../../shared/trait_names';
import jar1 from './../../../resources/images/complex/jar1.jpg';
import jar2 from './../../../resources/images/complex/jar2.jpg';

export default class Trait extends React.Component {
	constructor(props) {
		super(props);

		const updateEvery = Math.max(2500, 10000 * Math.random());

		this.state = {
			trait: getTraitName().toLowerCase(),
			updateEvery: updateEvery,
		};

		this.updateTrait = this.updateTrait.bind(this);
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.updateTrait(),
			this.state.updateEvery
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	updateTrait() {
		this.setState({ trait: getTraitName().toLowerCase() });
	}

	render() {
		return (
			<span
				className='trait is-size-6 has-text-centered'
				style={this.props.style}>
				<img src={jar1} style={{ width: '25px' }} />
				<span
					style={{
						padding: '0 .5rem',
						height: '1.5rem',
						maxHeight: '1.5rem',
					}}>
					{this.state.trait}
				</span>
				<img src={jar2} style={{ width: '25px' }} />
			</span>
		);
	}
}
