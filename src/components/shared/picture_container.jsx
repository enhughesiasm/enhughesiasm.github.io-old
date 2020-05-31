import React from 'react';

const PictureContainer = ({ fallback, webp, jp2, jxr, ...params }) => (
	<picture>
		{webp && <source srcset={webp} type='image/webp' />}
		{jp2 && <source srcset={jp2} type='image/jp2' />}
		{jxr && <img src={jxr} type='image/vnd.ms-photo' {...params} />}
		{fallback && !jxr && <img src={fallback} {...params} />}
	</picture>
);

export default PictureContainer;
