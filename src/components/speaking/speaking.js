import React from 'react';
import { Link } from 'react-router-dom';

import tedImg from '../../resources/images/ted_speak.jpg';
import tedImgWebp from '../../resources/images/WebP/ted_speak.webp';
import tedImgJP2 from '../../resources/images/JP2/ted_speak.jp2';
import tedImgJxr from '../../resources/images/JXR/ted_speak.jxr';

import otmImgFallback from '../../resources/images/OneTrackMinds.jpg';
import otmImgWebp from '../../resources/images/WebP/OneTrackMinds.webp';
import otmImgJp2 from '../../resources/images/JP2/OneTrackMinds.jp2';
import otmImgJxr from '../../resources/images/JXR/OneTrackMinds.jxr';

import ebrdImg from '../../resources/images/ebrd.jpg';
import ebrdImgWebp from '../../resources/images/WebP/ebrd.webp';
import ebrdImgJP2 from '../../resources/images/JP2/ebrd.jp2';
import ebrdImgJxr from '../../resources/images/JXR/ebrd.jxr';

import Quote from '../shared/quotes/quote';
import QuoteCycler from '../shared/quotes/quote_cycler';

import HelmetContainer from '../shared/helmet_container';
import YouTubeEmbed from '../shared/youtube_embed';
import LinkButton from '../shared/link_button';
import PictureContainer from '../shared/picture_container';

function Speaking() {
	var schoolsQuotes = require('../../resources/data/quotes/schools.json');
	var businessesQuotes = require('../../resources/data/quotes/businesses.json');

	return (
		<div>
			<HelmetContainer page='speaking' />

			<div className='tile is-ancestor is-vertical'>
				<div className='tile is-parent is-12'>
					<div className='tile is-parent is-7'>
						<div className='tile is-child'>
							<div className='content'>
								<h2 className='subtitle notification is-success'>
									Neil speaks about anxiety & mental health...
								</h2>
								<h4 className='subtitle notification is-light'>
									... in schools, universities, conferences,
									staff training days, and at events of all
									kinds.
								</h4>
								<p>
									He explores anxiety and other difficult
									feelings through warm stories, funny
									observations and practical tips for
									emotional management.
								</p>
								<p>
									<strong>
										Whether or not you live with anxiety,
										you will come away with ideas for living
										a happier life.
									</strong>
								</p>
							</div>
						</div>
					</div>
					<div className='tile is-parent is-5'>
						<div className='tile is-child'>
							<div className='content'>
								<div className='notification is-light has-text-centered'>
									Over 300,000 people have watched Neil&apos;s
									hilarious and inspiring story on{' '}
									<a
										href='http://bit.ly/custardTED'
										target='_blank'
										rel='noreferrer noopener'>
										YouTube
									</a>
								</div>
								<PictureContainer
									fallback={otmImgFallback}
									webp={otmImgWebp}
									jxr={otmImgJxr}
									jp2={otmImgJp2}
									alt='Neil Hughes speaking'
									title='Neil Hughes speaking'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='tile is-parent has-text-centered'>
					<div className='tile is-child has-text-centered'>
						<LinkButton
							to='/contact'
							className='button is-danger is-rounded'>
							Ask about booking a talk
						</LinkButton>
					</div>
				</div>
				<div className='tile is-parent is-12 '>
					<div className='tile is-child has-text-centered'>
						<h3 className='subtitle'>Schools say:</h3>
						<QuoteCycler
							quotes={schoolsQuotes}
							secondsPerQuote={12}
							secondsPerTransition={1.5}
							randomStart={true}
						/>
					</div>
				</div>
				<div className='tile is-parent'>
					<div className='tile is-parent is-5'>
						<div className='tile is-child'>
							<PictureContainer
								fallback={ebrdImg}
								webp={ebrdImgWebp}
								jp2={ebrdImgJP2}
								jxr={ebrdImgJxr}
								alt='Neil Hughes at EBRD'
								title='Neil Hughes at EBRD'
							/>
						</div>
					</div>
					<div className='tile is-parent is-7'>
						<div className='tile is-child has-text-centered'>
							<h3 className='subtitle'>Businesses say:</h3>
							<QuoteCycler
								quotes={businessesQuotes}
								secondsPerQuote={13}
								secondsPerTransition={1.5}
								randomStart={true}
							/>
						</div>
					</div>
				</div>
				<div className='tile is-parent'>
					<div className='tile is-parent is-7'>
						<div className='tile is-child notification is-light'>
							<div className='content'>
								<h2>Available for...</h2>
								<p>
									All sessions are{' '}
									<strong>
										flexible according to your needs
									</strong>
									, but here are some common requests:
								</p>
								<ul>
									<li>School Assemblies (15-50 minutes)</li>
									<li>
										Staff training (20 minutes - multiple
										hours)
									</li>
									<li>Conferences (20 minutes - 1 hour)</li>
									<li>Other sessions tailored by request</li>
								</ul>
								<Quote
									quote='Thank you for your contribution to raising awareness and understanding of mental health. You are a star!'
									cite='Norman Lamb, MP'
								/>
							</div>
						</div>
					</div>
					<div className='tile is-parent is-5'>
						<div className='tile is-child'>
							<div className='content'>
								<Quote
									quote='I have finally arranged to do something properly about my anxiety issues. Your Ted Talk was very much the start of the process… thank you.'
									cite='Louise'
								/>
								<PictureContainer
									fallback={tedImg}
									webp={tedImgWebp}
									jp2={tedImgJP2}
									jxr={tedImgJxr}
									alt='Neil Hughes at TEDx LeamingtonSpa'
									title='Neil Hughes at TEDx LeamingtonSpa'
								/>
							</div>
						</div>
					</div>
				</div>
				<SpeakingContact />
				<div
					className='is-divider'
					data-content='Watch Neil speak openly, honestly and hilariously about anxiety & custard:'></div>
				<YouTubeEmbed videoId='bM06o26PCDQ' />
			</div>
		</div>
	);
}

const SpeakingContact = () => (
	<div className='tile is-12'>
		<article className='message is-danger has-text-centered'>
			<div className='message-header'>
				<p>How to Book Neil</p>
			</div>
			<div className='message-body'>
				<div className='content'>
					<p>
						Contact <strong>neil@walkingoncustard.com</strong> or
						<strong>use the button below</strong> for a quote for
						your event. Please include (potential) dates, your
						intended audience and the expected length of the
						session.
					</p>

					<p>
						I&apos;m currently based in the{' '}
						<strong>northwest of England</strong>, but I regularly
						travel all over the UK (and further, if required).
					</p>
					<p>
						Thanks to the{' '}
						<Link to='/support'>generosity of the community</Link>,
						a{' '}
						<strong>
							limited number of free events are available
						</strong>
						. (Priority is given to state schools and charities.) If
						you think you might qualify for one of these then please
						ask!
					</p>
					<p>
						Even if you don&apos;t qualify for a free event, please
						enquire—I try to accommodate all budgets as flexibly as
						I can.
					</p>
					<p>
						<LinkButton
							to='/contact'
							className='button is-danger is-rounded'>
							Ask about a talk
						</LinkButton>
					</p>
				</div>
			</div>
		</article>
	</div>
);

export default Speaking;
