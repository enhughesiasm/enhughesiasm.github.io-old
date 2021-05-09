import React from 'react';

const BookTitle = ({ title, subtitle }) => (
	<div
		className='tile is-parent is-marginless content'
		style={{ borderRadius: '10px' }}>
		<div className='tile is-child has-text-centered is-marginless is-paddingless'>
			<h3 className='has-drop-cap is-paddingless is-family-secondary'>
				{title}
			</h3>
			<p className='is-paddingless is-family-secondary has-text-grey'>
				{subtitle}
			</p>
		</div>
	</div>
);

export default BookTitle;
