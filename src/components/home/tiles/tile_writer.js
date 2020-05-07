import React from 'react';
import { Link } from 'react-router-dom';
import BookTile from '../book_tile';
import wocCover from './../../../resources/images/wocCover.jpg';
import sblPrev from './../../../resources/images/sblCover.jpg';

const Tile_Writer = () => (
	<article className='tile is-child notification is-primary has-text-centered'>
		<p className='title notification is-primary is-size-5-mobile is-paddingless'>
			<Link to='/books'>writer</Link>
		</p>
		<BookTile
			coverImg={wocCover}
			linkUrl='/walking-on-custard'
			title='Walking on Custard'
			blurb='a humorous-helpful guide to life with anxiety'
			sampleUrl='https://gallery.mailchimp.com/f16d438b230e1f3c54ecd5adc/files/Walking_on_Custard_the_Meaning_of_Life_Sample_01.pdf'
		/>

		<BookTile
			coverImg={sblPrev}
			title='The Shop Before Life'
			linkUrl='/shop-before-life'
			blurb='before being born, all humans visit a magical shop and choose what kind of person they will become'
			sampleUrl='https://gallery.mailchimp.com/f16d438b230e1f3c54ecd5adc/files/a6f251c6-b056-4ed4-96bc-51be718be470/Shop_Before_Life_Sample.pdf'
		/>
		<BookTile
			coverImg=''
			title='Articles'
			linkUrl='/articles'
			blurb='there are many articles on the internet, some of them written by Neil Hughes'
		/>
	</article>
);

export default Tile_Writer;
