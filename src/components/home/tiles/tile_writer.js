import React from 'react';
import { Link } from 'react-router-dom';
import BookTile from '../book_tile';

import wocCover from './../../../resources/images/wocCover_thumb.jpg';
import wocCoverWebp from './../../../resources/images/WebP/wocCover_thumb.webp';
import wocCoverJp2 from './../../../resources/images/JP2/wocCover_thumb.jp2';
import wocCoverJxr from './../../../resources/images/JXR/wocCover_thumb.jxr';

import sblPrev from './../../../resources/images/sblCover_thumb.jpg';
import sblCoverWebp from './../../../resources/images/WebP/sblCover_thumb.webp';
import sblCoverJp2 from './../../../resources/images/JP2/sblCover_thumb.jp2';
import sblCoverJxr from './../../../resources/images/JXR/sblCover_thumb.jxr';

const TileWriter = () => (
	<article className='tile is-child notification is-primary has-text-centered'>
		<p className='title notification is-primary is-size-5-mobile is-paddingless'>
			<Link to='/books'>writer</Link>
		</p>
		<BookTile
			coverImg={wocCover}
			coverImgWebp={wocCoverWebp}
			coverImgJxr={wocCoverJxr}
			coverImgJp2={wocCoverJp2}
			linkUrl='/walking-on-custard'
			title='Walking on Custard'
			blurb='a humorous-helpful guide to life with anxiety'
			sampleUrl='https://gallery.mailchimp.com/f16d438b230e1f3c54ecd5adc/files/Walking_on_Custard_the_Meaning_of_Life_Sample_01.pdf'
		/>

		<BookTile
			coverImg={sblPrev}
			coverImgWebp={sblCoverWebp}
			coverImgJxr={sblCoverJxr}
			coverImgJp2={sblCoverJp2}
			title='The Shop Before Life'
			linkUrl='/shop-before-life'
			blurb='before being born, all humans visit a magical shop and choose what kind of person they will become'
			sampleUrl='https://gallery.mailchimp.com/f16d438b230e1f3c54ecd5adc/files/a6f251c6-b056-4ed4-96bc-51be718be470/Shop_Before_Life_Sample.pdf'
		/>
		<BookTile
			coverImg=''
			title='Articles'
			linkUrl='/articles'
			blurb='some of the articles on the internet were written by Neil Hughes'
		/>
	</article>
);

export default TileWriter;
