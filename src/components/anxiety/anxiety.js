import React from 'react';
import { Link } from 'react-router-dom';
import TopTitle from '../shared/top_title';
import HelmetContainer from '../shared/helmet_container';
import YouTubeEmbed from '../shared/youtube_embed';
import wocCover from './../../resources/images/wocCover.jpg';
import wocCoverWebp from './../../resources/images/WebP/wocCover.webp';
import wocCoverJp2 from './../../resources/images/JP2/wocCover.jp2';
import wocCoverJxr from './../../resources/images/JXR/wocCover.jxr';

import LinkButton from './../shared/link_button';
import PictureContainer from '../shared/picture_container';

function AnxietyPage() {
	return (
		<div>
			<HelmetContainer page='anxiety' />
			<TopTitle
				title='Neil Hughes experienced  anxiety for most of his life...'
				subtitle=''
				size='is-medium'
				color='primary'
			/>
			<div className='has-text-centered'>
				<p>
					But not <em>constantly</em>. Occasionally he was asleep, or
					watching the Vicar of Dibley.
				</p>
			</div>

			<div className='content'>
				<div className='tile is-ancestor is-vertical'>
					<div className='tile is-parent'>
						<div className='tile is-parent'>
							<div className='tile is-child notification is-warning'>
								<div className='content is-size-5'>
									<p>
										After learning how to live with anxiety,
										he:
									</p>
									<ul>
										<li>
											<strong>
												<Link to='/walking-on-custard'>
													wrote a book to help other
													people
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
											<div className='smallPrint'>
												(but that&apos;s not relevant
												right now)
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='tile is-parent'>
						<div className='tile is-child notification is-success'>
							<div className='content is-size-5 has-text-centered'>
								<strong>Watch Neil speak right now:</strong>
								<YouTubeEmbed videoId='bM06o26PCDQ' />
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
						<div className='tile is-child notification is-warning'>
							<div className='content is-size-5 has-text-centered'>
								<Link to='/woc'>
									<strong>
										Click here to read the book!
									</strong>
									<div className='mt-3'>
										<PictureContainer
											fallback={wocCover}
											webp={wocCoverWebp}
											jp2={wocCoverJp2}
											jxr={wocCoverJxr}
											style={{ maxWidth: '300px' }}
										/>
									</div>
								</Link>
							</div>
						</div>
					</div>

					<div className='tile is-parent'>
						<div className='tile is-child notification is-light'>
							<div className='content is-size-5 has-text-centered'>
								<strong>
									Or see his dedicated mental health site for
									more
								</strong>
								:{' '}
								<a href='http://www.walkingoncustard.com'>
									walkingoncustard.com
								</a>
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
				</div>
			</div>
		</div>
	);
}

export default AnxietyPage;
