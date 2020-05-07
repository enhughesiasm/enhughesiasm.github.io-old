import React from 'react';
import TopTitle from '../shared/top_title';
import micImg from './../../resources/images/microphone.jpg';
import HelmetContainer from '../shared/helmet_container';
import Quote from '../shared/quotes/quote';
import YouTubeEmbed from '../shared/youtube_embed';
import LinkButton from '../shared/link_button';

function ComedyWriting() {
	return (
		<div>
			<HelmetContainer page='comedy_writing' />
			<TopTitle
				title='comedy consulting'
				subtitle='the easy way to make your presentations more amusing'
				size='is-medium'
				color='is-primary'
			/>

			<div className='content has-text-centered'>
				<img src={micImg} width='50%' />
				<div className='smallPrint'>
					Photo by{' '}
					<a href='https://unsplash.com/@esloman'>Elliot Sloman</a> on
					Unsplash
				</div>
			</div>
			<article className='message is-warning'>
				<div className='message-header'>
					<p>Want your presentation to be funnier? Neil can help!</p>
				</div>
				<div className='message-body'>
					<div className='content'>
						<p className='message is-warning'>
							<span>
								Humour is the best way to connect with
								audiences, to get them to retain the information
								you share... and to even ENJOY yourself while
								you&apos;re speaking in public!
							</span>
						</p>
						<p>
							<a href='https://www.apa.org/monitor/jun06/learning'>
								Studies suggest
							</a>{' '}
							that laughter helps audiences to recall more
							information.
						</p>
						<p>
							<strong>But being funny is hard.</strong>
						</p>
						<p>
							When jokes fall flat, self-doubt creeps in and that
							can derail your entire presentation. And hey – it
							happens! But if there was a way to make sure you
							knock your next presentation out of the park,
							wouldn&apos;t you want to get on board?
						</p>
					</div>
				</div>
			</article>

			<div className='content'>
				<Quote
					quote="Neil did the nearly impossible: he helped me realize my personal finance workshop could be fun... and funny! He didn't write the jokes for me but instead <strong>worked with me to hone my natural sense of humor</strong>. It made the process a whole lot more enjoyable and less anxiety-inducing. I was actually excited to give my workshop!"
					cite='<a href="https://www.kristinwong.com/">Kristin Wong</a>, author of <em>Get Money</em>'
				/>

				<h2 className='subtitle'>Meet Neil - Your Comedy Consultant</h2>
				<p>
					I&apos;ve been amusing audiences since the early 2000s when
					I sang a song about beans to a surprisingly enthusiastic
					crowd.
				</p>
				<p>
					Since then I&apos;ve performed everywhere from the Edinburgh
					Fringe Festival to my local shopping centre.
				</p>
				<p>
					Now I give comedy talks about anxiety, like this one, which
					has been seen by over A QUARTER OF A MILLION people:
				</p>

				<YouTubeEmbed videoId='bM06o26PCDQ' />

				<p>
					And I enjoy <strong>helping others be funny too</strong>.
				</p>
				<hr />

				<h4 className='subtitle'>I will work with you to:</h4>

				<ul>
					<li>Embrace your natural sense of humour</li>
					<li>Write jokes appropriate to you and your audience</li>
					<li>Develop your comedic timing</li>
					<li>
						Identify the different types of humour you can and
						should use in YOUR presentations
					</li>
					<li>
						Come up with a strategy to use the right types of jokes
						at the right time
					</li>
					<li>Create comedy material you can use again and again</li>
				</ul>

				<Quote
					quote="<p>I'd written a keynote that had plenty of funny material in it <em>somewhere</em>, but it really just wasn't coming out like it should.</p>			<p>Neil not only helped to sharpen it up, he also did it with exactly the right attitude and style for <strong>me</strong> to be able to carry it off.			His help was exactly what I needed to have confidence that the humour would come across.</p>				<p>On the day, the laughs meant that people were really identifying with the situations I'd been in and seeing the funny side.  As this talk was about IT, I'd say that's an amazing skill Neil's got!</p>"
					cite='<a href="http://www.angelalamont.com/AngelaLamont/">Angela Lamont</a>'
				/>

				<article className='message is-danger has-text-centered'>
					<div className='message-header'>
						<p>
							Ask Neil to help you improve your material and
							skills
						</p>
					</div>
					<div className='message-body'>
						<div className='content'>
							<p>
								<strong>Use the button below</strong> or contact{' '}
								<strong>neil@walkingoncustard.com</strong> with
								the subject &quot;Comedy Consultation&quot; for
								a quote.
							</p>
							<p>
								Tell me a little background about you and what
								you&apos;re looking for, and I&apos;ll be in
								touch with a suggested price. After that,
								we&apos;ll arrange an online meeting and
								I&apos;ll get to work on your talk material.
							</p>
							<p>
								Fees depend on the specifics of the work, but
								will start at around £100 for a single redraft
								of a short (15 minutes) presentation.
							</p>
							<p>
								<LinkButton
									to='/contact'
									className='button is-danger is-rounded'>
									Click here to get in touch
								</LinkButton>
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	);
}

export default ComedyWriting;
