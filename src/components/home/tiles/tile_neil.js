import React from 'react';
import facePic from './../../../resources/images/img_1448.jpg';
import facePic2 from './../../../resources/images/neil_hughes_al.jpg';

export default class Tile_Neil extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showFirstPic: Math.random() < 0.5,
		};
	}

	componentDidMount() {
		this.setState({ showFirstPic: Math.random() < 0.5 });
	}

	render() {
		return (
			<article className='tile is-child notification is-success'>
				<div className='content has-text-centered'>
					<p className='title is-size-5-mobile'>
						Neil Hughes is currently a...
					</p>
					<div className='has-text-centered'>
						<img
							className={
								this.state.showFirstPic ? '' : 'is-hidden'
							}
							src={facePic}
							alt='Neil Hughes profile'
							title='Neil Hughes profile'
							style={{
								maxWidth: '57%',
								borderRadius: '290486px',
							}}
						/>
						<img
							className={
								!this.state.showFirstPic ? '' : 'is-hidden'
							}
							src={facePic2}
							alt='Neil Hughes profile'
							title='Neil Hughes profile'
							style={{
								maxWidth: '57%',
								borderRadius: '290486px',
							}}
						/>
					</div>
				</div>
			</article>
		);
	}
}
