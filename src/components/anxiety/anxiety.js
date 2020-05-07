import React from 'react';
import { Link } from 'react-router-dom';
import TopTitle from '../shared/top_title';
import HelmetContainer from '../shared/helmet_container';
import YouTubeEmbed from '../shared/youtube_embed';
import wocCover from './../../resources/images/wocCover.jpg';
import LinkButton from './../shared/link_button';

function AnxietyPage() {
	return (
		<div>
			<HelmetContainer page='anxiety' />
			<TopTitle
				title='Neil Hughes experienced  anxiety for most of his life'
				subtitle='Not constantly! Occasionally he was asleep, or watching the Vicar of Dibley.'
				size='is-medium'
				color='is-primary'
			/>

			<div className='content'>
				<div className='tile is-ancestor is-vertical'>
					<div className='tile is-parent'>
						<div className='tile is-parent'>
							<div className='tile is-child notification is-warning'>
								<div className='content is-size-5'>
									Eventually, he realised how to manage it.
									Then he:
									<ul>
										<li>
											<strong>
												<Link to='/walking-on-custard'>
													wrote a book about anxiety
												</Link>
											</strong>
										</li>
										<li>
											<strong>
												<a
													target='_blank'
													rel='noopener noreferrer'
													href='http://bit.ly/custardTED'>
													gave a TED talk about
													custard
												</a>
											</strong>
										</li>
										<li>
											<strong>
												<Link to='/speaking'>
													started speaking about
													mental health
												</Link>
											</strong>
										</li>
										<li>
											learned how to wear scarves properly
											<span className='smallPrint'>
												(but that&apos;s not relevant
												right now)
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='tile is-parent'>
						<div className='tile is-child notification is-light'>
							<div className='content is-size-5 has-text-centered'>
								<strong>Watch him speak right now:</strong>
								<YouTubeEmbed videoId='bM06o26PCDQ' />
							</div>
						</div>
					</div>
					<div className='tile is-parent'>
						<div className='tile is-child notification is-light'>
							<div className='content is-size-5 has-text-centered'>
								<Link to='/woc'>
									<div>
										<img src={wocCover} width='300' />
									</div>
									<strong>
										Click here to read the book!
									</strong>
								</Link>
							</div>
						</div>
					</div>
					<div className='tile is-parent'>
						<div className='tile is-child has-text-centered'>
							<LinkButton
								to='/speaking'
								className='button is-danger is-rounded'>
								need a speaker on anxiety? click here
							</LinkButton>
						</div>
					</div>
					<div className='tile is-parent'>
						<div className='tile is-child notification is-light'>
							<div className='content is-size-5 has-text-centered'>
								<strong>
									See his dedicated mental health site for
									more
								</strong>
								:{' '}
								<a href='http://www.walkingoncustard.com'>
									walkingoncustard.com
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AnxietyPage;
