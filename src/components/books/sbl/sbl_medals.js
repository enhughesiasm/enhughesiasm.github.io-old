import React from 'react';
import readersFavBadge from './../../../resources/images/5star-shiny-hr.jpg';
import bragMedallionBadge from './../../../resources/images/brag-medallion-sticker.png';

const SBLMedals = ({ isHiddenMobile }) => (
	<p
		className={
			'has-text-centered ' +
			(isHiddenMobile
				? 'is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only is-hidden-widescreen-only is-hidden-fullhd'
				: '')
		}
		style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}}>
		<a
			className=''
			target='_blank'
			rel='noopener noreferrer'
			href='https://readersfavorite.com/book-review/the-shop-before-life'>
			<img src={readersFavBadge} style={{ width: '130px' }} />
		</a>
		<a
			className=''
			target='_blank'
			rel='noopener noreferrer'
			href='https://www.bragmedallion.com/award-winning-books/fantasy/the-shop-before-life/'>
			<img src={bragMedallionBadge} style={{ width: '130px' }} />
		</a>
	</p>
);

export default SBLMedals;
