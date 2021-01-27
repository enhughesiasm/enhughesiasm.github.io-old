import React from 'react';
import LoadingBounce from '../loading_bounce';

const SuspenseLoader = () => (
	<div
		className='notification is-white is-flex ml-5'
		style={{
			textAlign: 'center',
			justifyContent: 'center',
			alignItems: 'center',
			display: 'flex',
			position: 'absolute',
			left: '1%',
			bottom: '1%',
		}}>
		<div style={{ justifyContent: 'center', alignItems: 'center' }}>
			<strong>Loading...</strong>
			<div className='mt-1'>
				<LoadingBounce size='40' />
			</div>
		</div>
	</div>
);

export default SuspenseLoader;
