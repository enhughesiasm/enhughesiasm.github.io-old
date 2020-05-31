import React from 'react';
import Helmet from 'react-helmet';

export const PatreonButtonContent = () => (
	<>
		<Helmet>
			<script
				defer
				src='https://c6.patreon.com/becomePatronButton.bundle.js'
			/>
		</Helmet>
		<span className='socialMediaItem' style={{ display: 'inline-block' }}>
			<a
				href='https://www.patreon.com/bePatron?u=295238'
				data-patreon-widget-type='become-patron-button'>
				Become a Patron!
			</a>
		</span>
	</>
);

export default PatreonButtonContent;
