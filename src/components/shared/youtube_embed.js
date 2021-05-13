import React from 'react';
import PropTypes from 'prop-types';

export default class YouTubeEmbed extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			playClicked: false,
		};
	}

	render() {
		return (
			<div className='youtube-player' data-id={this.props.videoId}>
				<div onClick={() => this.setState({ playClicked: true })}>
					<img
						alt=''
						src={
							'https://i.ytimg.com/vi/' +
							this.props.videoId +
							'/hqdefault.jpg'
						}
					/>
					{!this.state.playClicked && <div className='play'></div>}
					{this.state.playClicked && (
						<iframe
							title='Neil Hughes - Walking on Custard TEDx Talk'
							frameBorder='0'
							allowFullScreen='1'
							allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
							src={
								'https://www.youtube.com/embed/' +
								this.props.videoId +
								'?autoplay=1'
							}
						/>
					)}
				</div>
			</div>
		);
	}
}

YouTubeEmbed.propTypes = {
	videoId: PropTypes.string.isRequired,
};
