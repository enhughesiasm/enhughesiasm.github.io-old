import React from 'react';
import LinkButton from './../shared/link_button';

const NeedADeveloperButton = () => (
	<div className='is-code has-text-centered mt-3'>
		<LinkButton
			to='/contact'
			className='button is-dark is-rounded has-text-warning is-code is-size-7'>
			need a developer? inquire here
		</LinkButton>
	</div>
);

export default NeedADeveloperButton;
