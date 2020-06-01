import React from 'react';
import readersFavBadge from './../../../resources/images/5star-shiny-hr.jpg';
import readersFavBadgeWebp from './../../../resources/images/WebP/5star-shiny-hr.webp';
import readersFavBadgeJP2 from './../../../resources/images/JP2/5star-shiny-hr.jp2';
import readersFavBadgeJxr from './../../../resources/images/JXR/5star-shiny-hr.jxr';

import bragMedallionBadge from './../../../resources/images/brag-medallion-sticker.jpg';
import bragMedallionBadgeWebp from './../../../resources/images/WebP/brag-medallion-sticker.webp';
import bragMedallionBadgeJP2 from './../../../resources/images/JP2/brag-medallion-sticker.jp2';
import bragMedallionBadgeJxr from './../../../resources/images/JXR/brag-medallion-sticker.jxr';
import PictureContainer from '../../shared/picture_container';

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
			<PictureContainer
				fallback={readersFavBadge}
				webp={readersFavBadgeWebp}
				jxr={readersFavBadgeJxr}
				jp2={readersFavBadgeJP2}
				style={{ width: '130px' }}
			/>
		</a>
		<a
			className=''
			target='_blank'
			rel='noopener noreferrer'
			href='https://www.bragmedallion.com/award-winning-books/fantasy/the-shop-before-life/'>
			<PictureContainer
				fallback={bragMedallionBadge}
				webp={bragMedallionBadgeWebp}
				jp2={bragMedallionBadgeJP2}
				jxr={bragMedallionBadgeJxr}
				style={{ width: '130px' }}
			/>
		</a>
	</p>
);

export default SBLMedals;
