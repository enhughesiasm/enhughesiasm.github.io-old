import React from 'react';

import facePicFallback from './../../../resources/images/img_1448.jpg';
import facePicWebP from './../../../resources/images/WebP/img_1448.webp';
import facePicJp2 from './../../../resources/images/JP2/img_1448.jp2';
import facePicJxr from './../../../resources/images/JXR/img_1448.jxr';

import facePic2Fallback from './../../../resources/images/neil_hughes_al.jpg';
import facePic2WebP from './../../../resources/images/WebP/neil_hughes_al.webp';
import facePic2Jp2 from './../../../resources/images/JP2/neil_hughes_al.jp2';
import facePic2Jxr from './../../../resources/images/JXR/neil_hughes_al.jxr';
import PictureContainer from '../../shared/picture_container';

export default class TileNeil extends React.Component {
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
						<PictureContainer
							fallback={facePicFallback}
							webp={facePicWebP}
							jp2={facePicJp2}
							jxr={facePicJxr}
							alt='Neil Hughes profile'
							className={
								this.state.showFirstPic ? '' : 'is-hidden'
							}
							style={{
								maxWidth: '57%',
								borderRadius: '290486px',
							}}
						/>
						<PictureContainer
							fallback={facePic2Fallback}
							webp={facePic2WebP}
							jp2={facePic2Jp2}
							jxr={facePic2Jxr}
							alt='Neil Hughes profile'
							className={
								!this.state.showFirstPic ? '' : 'is-hidden'
							}
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
