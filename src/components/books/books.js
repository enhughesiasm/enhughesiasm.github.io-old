import React from 'react';
import TopTitle from '../shared/top_title';
import Book from './book';

import wocCover from './../../resources/images/wocCover.jpg';
import wocCoverWebp from './../../resources/images/WebP/wocCover.webp';
import wocCoverJp2 from './../../resources/images/JP2/wocCover.jp2';
import wocCoverJxr from './../../resources/images/JXR/wocCover.jxr';

import sblPrev from './../../resources/images/sblCover.jpg';
import sblCoverWebp from './../../resources/images/WebP/sblCover.webp';
import sblCoverJp2 from './../../resources/images/JP2/sblCover.jp2';
import sblCoverJxr from './../../resources/images/JXR/sblCover.jxr';

import HelmetContainer from '../shared/helmet_container';

const Books = () => (
	<div>
		<HelmetContainer page='books' />
		<TopTitle title='books' subtitle='by Neil Hughes' color='is-dark' />

		<Book
			coverImg={wocCover}
			coverImgWebp={wocCoverWebp}
			coverImgJxr={wocCoverJxr}
			coverImgJp2={wocCoverJp2}
			linkUrl='/walking-on-custard'
			title='Walking on Custard'
			blurb='a humorous-helpful guide to life with anxiety'
			sampleUrl='https://gallery.mailchimp.com/f16d438b230e1f3c54ecd5adc/files/Walking_on_Custard_the_Meaning_of_Life_Sample_01.pdf'
		/>

		<Book
			coverImg={sblPrev}
			coverImgWebp={sblCoverWebp}
			coverImgJxr={sblCoverJxr}
			coverImgJp2={sblCoverJp2}
			title='The Shop Before Life'
			linkUrl='/shop-before-life'
			blurb='before being born, all humans must visit a magical shop and choose what kind of person they will become'
			sampleUrl='https://gallery.mailchimp.com/f16d438b230e1f3c54ecd5adc/files/a6f251c6-b056-4ed4-96bc-51be718be470/Shop_Before_Life_Sample.pdf'
		/>
	</div>
);

export default Books;
