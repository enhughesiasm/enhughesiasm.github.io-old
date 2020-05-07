import React from 'react';
import { css } from '@emotion/core';
// First way to import
// Another way to import. This is recommended to reduce bundle size
import BounceLoader from 'react-spinners/BounceLoader';

const LoadingBounce = ({size, color}) => {
	return ( <div className='sweet-loading' style={{display:'inline-block'}}>
		<BounceLoader
			css={css}
			sizeUnit={'px'}
			size={size || 15 }
			color={color || '#123abc'}
			loading={true}
		/>
	</div> );
};

export default LoadingBounce;