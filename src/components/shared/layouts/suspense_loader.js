import React from 'react';
import LoadingBounce from '../loading_bounce';

const SuspenseLoader = () => (
	<div
		className='notification is-light is-flex'
		style={{
			height: '50vh',
			width: '100%',
			textAlign: 'center',
			justifyContent: 'center',
			alignItems: 'center',
			display: 'flex',
		}}>
		<div style={{ justifyContent: 'center', alignItems: 'center' }}>
			<strong>Loading...</strong>
			<div className='mt-4'>
				<LoadingBounce size='100' />
			</div>
		</div>
	</div>
);

export default SuspenseLoader;
