import React from 'react';
import TopTitle from '../shared/top_title';
import HelmetContainer from '../shared/helmet_container';
import YouTubeEmbed from '../shared/youtube_embed';

function Support() {
	// useEffect(() => { document.title = 'enhughesiasm - support mental health outreach'; });

	return (
		<div>
			<HelmetContainer page='support'></HelmetContainer>
			<TopTitle
				title='Would you like to support...'
				subtitle='... mental health outreach?'
				size=''
				color='is-primary'
			/>

			<div className='content has-text-centered'>
				<YouTubeEmbed videoId='2vfI6d0xM_M' />

				<div className='notification is-danger has-text-centered'>
					<p>
						As well as his online mental health work, Neil offers{' '}
						<strong>humorous/helpful events for free</strong> to
						places—often including schools—which can&apos;t afford
						to pay.
					</p>
					<p>
						This is possible thanks to supporters offering a couple
						of pounds/dollars a month each.
					</p>
					<p className='notification is-success'>
						<strong>
							<a href='http://patreon.com/walkingoncustard'>
								Click here to find out more, and to offer your
								support
							</a>
						</strong>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Support;
