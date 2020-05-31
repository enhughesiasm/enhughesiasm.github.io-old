import React from 'react';
import Helmet from 'react-helmet';

export const PatreonButtonContent = () => (
	<>
		{/* <Helmet>
			<script
				defer
				src='https://c6.patreon.com/becomePatronButton.bundle.js'
			/>
		</Helmet> */}
		<span
			className='socialMediaItem is-hidden-mobile'
			style={{ display: 'inline-block' }}>
			<a
				className='button is-danger is-rounded is-small'
				href='https://www.patreon.com/bePatron?u=295238'
				target='_blank'
				rel='noopener noreferrer'>
				Support my mental health work
			</a>
		</span>
	</>
);

export default PatreonButtonContent;
