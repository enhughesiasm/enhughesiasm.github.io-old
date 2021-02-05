import React from 'react';
import ArticleItem from './article_item';
import TopTitle from '../shared/top_title';
import HelmetContainer from '../shared/helmet_container';

const Articles = () => (
	<div>
		<HelmetContainer page='articles' />
		<TopTitle
			title='articles'
			subtitle='things Neil Hughes once wrote'
			color='is-info'
			size=''
		/>
		<div className='content'>
			<ul>
				<ArticleItem
					url='https://tinybuddha.com/blog/its-okay-to-need-a-little-help/'
					title='It’s Okay to Need a Little Help'
					blurb="Sometimes we all struggle. In my case, it's because I do a lot of stupid things."
				/>
				<ArticleItem
					url='https://asto.io/blog/how-to-juggle-find-balance/'
					title='How to juggle and find balance'
					blurb='Juggling his way around multi-faceted work gigs and achieving a healthy work life balance as a sole trader, Neil Hughes, author of Walking on Custard & the Meaning of Life, shares a few tips to help others.'
				/>
				<ArticleItem
					url='https://www.huffingtonpost.co.uk/neil-hughes/anxiety-comedy-science_b_9661516.html'
					title='How Laughter and Science Help With Anxiety'
					blurb='Humour is important.'
				/>
			</ul>
			<a href='https://www.walkingoncustard.com'>
				Many more articles are available at <u>walkingoncustard.com</u>
			</a>
		</div>
	</div>
);
export default Articles;
