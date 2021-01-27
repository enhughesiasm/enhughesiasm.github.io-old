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
			left: '5%',
			bottom: '10%'
			sdfiojsiodfjodsj check out the bottom position - put this component in the main layout and look at it
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
