import React from 'react';
import ComplexGame from '../../complex/complex_game';
import HelmetContainer from './../helmet_container';

export default class ComplexLayout extends React.PureComponent {
	render() {
		return (
			<div style={{ fontFamily: 'Fira Code' }}>
				<HelmetContainer page='complex'>
					<link
						href='https://fonts.googleapis.com/css?family=Fira+Code&display=swap'
						rel='stylesheet'
					/>
				</HelmetContainer>
				<ComplexGame />
			</div>
		);
	}
}
