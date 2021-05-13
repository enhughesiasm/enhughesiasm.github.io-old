import React from 'react';
import HelmetContainer from '../shared/helmet_container';
import CodingBlurb from './coding_blurb';
import CodingProjects from './coding_projects';
import CodingTitle from './coding_title';
import NeedADeveloperButton from './need_a_developer';
import PreferredTech from './preferred_tech';

const CodingPage = () => (
	<div className='is-code has-background-black has-text-success p-4'>
		<HelmetContainer page='coding' />
		<CodingTitle title='coding' />
		<CodingBlurb long />
		<PreferredTech />
		<CodingProjects />
		<NeedADeveloperButton />
	</div>
);

export default CodingPage;
