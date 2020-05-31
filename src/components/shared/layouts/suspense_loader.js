import React from 'react';
import LoadingBounce from '../loading_bounce';

const SuspenseLoader = () => (
	<div style={{ width: '100%', textAlign: 'center' }}>
		<LoadingBounce size='100' />
	</div>
);

export default SuspenseLoader;
