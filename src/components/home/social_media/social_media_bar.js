import React, { lazy, Suspense } from 'react';
// import fbLogo from '../../resources/images/find_us_on_fb.png';
import { Helmet } from 'react-helmet';
import PatreonButton from './patreon_button';

const SocialMediaBar = () => {
	if (false && process.env.NODE_ENV !== 'production') return null;

	// console.log('social-media-bar; agent: ' + navigator.userAgent);
	// navigator.userAgent returns 'ReactSnap' as planned... could use it to filter helmet but don't bother

	return (
		<section className='socialMediaBar notification is-primary is-marginless has-text-centered'>
			<Helmet>
				{/* THIRD PARTY SOCIAL SCRIPTS */}
				{/* <link href="https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" rel="stylesheet"></link> */}
				<script
					async
					defer
					src='https://platform.twitter.com/widgets.js'
					charset='utf-8'
				/>
				<script
					async
					defer
					src='https://apis.google.com/js/platform.js'
				/>

				<script
					async
					defer
					data-name='BMC-Widget'
					src='https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js'
					data-id='enhughesiasm'
					data-description=''
					data-message=''
					data-color='#5F7FFF'
					data-position='left'
					data-x_margin='18'
					data-y_margin='18'></script>
			</Helmet>

			<span className='socialMediaItem is-hidden-mobile'>
				<a
					href='https://twitter.com/enhughesiasm?ref_src=twsrc%5Etfw'
					className='twitter-follow-button'
					data-show-count='false'>
					Follow @enhughesiasm
				</a>
			</span>
			<span className='socialMediaItem'>
				<a
					className='button is-rounded is-danger is-small'
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.buymeacoffee.com/enhughesiasm'>
					<img
						style={{ width: '18px' }}
						src='https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg'
						alt='Buy me a coffee'
					/>
					<span style={{ marginLeft: '12px', fontSize: '17px' }}>
						Buy me a coffee
					</span>
				</a>
			</span>

			<PatreonButton />

			<span className='socialMediaItem is-hidden-mobile'>
				<div
					className='g-ytsubscribe'
					data-channelid='UCo7rSj8sIu823Z3c5ju9FfA'
					data-layout='default'
					data-theme='dark'
					data-count='default'></div>
			</span>
		</section>
	);
};

export default SocialMediaBar;
