import React from 'react';
import CodingBlurb from '../../coding/coding_blurb';
import CodingProjects from '../../coding/coding_projects';
import CodingTitle from '../../coding/coding_title';
import NeedADeveloperButton from '../../coding/need_a_developer';

const TileCoder = () => (
	<article className='tile is-child notification is-black is-paddingless'>
		<div className='p-3'>
			<div className='pl-3'>
				<CodingTitle title={'coder'} />
			</div>
			<CodingBlurb />
			<CodingProjects />
			<NeedADeveloperButton />
		</div>
	</article>
);

export default TileCoder;
