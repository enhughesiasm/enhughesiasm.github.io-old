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
					url='https://puttylike.com/can-i-be-happy-with-my-mediocre-life/'
					title='Can I Be Happy With My Mediocre Life?'
					blurb="It's impossible for us all to be above average! So why does having a nice, normal life sometimes feel so painful?"
				/>
				<ArticleItem
					url='https://puttylike.com/you-are-original-heres-why/'
					title='You Are Original. Here’s Why.'
					blurb='What if the life you build, and the memories you make, are your most stunning (and original) works of art?'
				/>
				<ArticleItem
					url='https://puttylike.com/you-are-original-heres-why/'
					title='How to Keep It Weird When Life Gets Busy'
					blurb='Adding small bits of novelty to your day can increase your sense of well-being and keep your brain on its toes.'
				/>
				<ArticleItem
					url='https://puttylike.com/reversing-a-downward-spiral-with-physics-cleaning-spray/'
					title='Reversing a Downward Spiral With Physics & Cleaning Spray'
					blurb="Ever feel like you're falling further and further behind, and can't get momentum on your side?"
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
			<p className='has-text-centered'>
				<a href='https://www.walkingoncustard.com'>
					There are many more articles at <u>walkingoncustard.com</u>
				</a>
			</p>
		</div>
	</div>
);
export default Articles;
