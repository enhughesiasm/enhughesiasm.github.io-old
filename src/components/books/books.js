import React from 'react';
import TopTitle from '../shared/top_title';
import Book from './book';
import wocCover from './../../resources/images/wocCover.jpg';
import sblPrev from './../../resources/images/sblCover.jpg';
import HelmetContainer from '../shared/helmet_container';

const Books = () => (
	<div>
		<HelmetContainer page='books' />
		<TopTitle title='books' subtitle='by Neil Hughes' color='is-dark' />

		<Book
			coverImg={wocCover}
			linkUrl='/walking-on-custard'
			title='Walking on Custard'
			blurb='a humorous-helpful guide to life with anxiety'
			sampleUrl='https://gallery.mailchimp.com/f16d438b230e1f3c54ecd5adc/files/Walking_on_Custard_the_Meaning_of_Life_Sample_01.pdf'
		/>

		<Book
			coverImg={sblPrev}
			title='The Shop Before Life'
			linkUrl='/shop-before-life'
			blurb='before being born, all humans must visit a magical shop and choose what kind of person they will become'
			sampleUrl='https://gallery.mailchimp.com/f16d438b230e1f3c54ecd5adc/files/a6f251c6-b056-4ed4-96bc-51be718be470/Shop_Before_Life_Sample.pdf'
		/>
	</div>
);

export default Books;
