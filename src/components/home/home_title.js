import React from 'react';
import RandomSubtitle from './random_subtitle';

const HomeTitle = () => (
	<div className='tile is-parent is-12 notification is-light mb-0'>
		<div className='tile is-child'>
			<div className='content'>
				<h1 className='title is-size-5 is-marginless is-paddingless has-text-centered'>
					welcome to enhughesiasm
				</h1>
				<p className='has-text-grey has-text-centered is-size-7'>
					the online homepage for Neil Hughes
				</p>
				{/* <hr style={{margin:'.3rem 0 .5rem'}}/> */}
				<h3
					className='subtitle is-size-6 is-paddingless has-text-centered'
					style={{ fontWeight: 'normal', marginTop: '.2rem' }}>
					<RandomSubtitle />
				</h3>
			</div>
		</div>
	</div>
);

export default HomeTitle;
