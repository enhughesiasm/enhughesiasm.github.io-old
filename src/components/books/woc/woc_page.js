import React from 'react';
import { Link } from 'react-router-dom';

import wocCover from './../../../resources/images/wocCover.jpg';
import wocCoverWebp from './../../../resources/images/WebP/wocCover.webp';
import wocCoverJp2 from './../../../resources/images/JP2/wocCover.jp2';
import wocCoverJxr from './../../../resources/images/JXR/wocCover.jxr';

import sblCover from './../../../resources/images/sblCover.jpg';
import sblCoverWebp from './../../../resources/images/WebP/sblCover.webp';
import sblCoverJp2 from './../../../resources/images/JP2/sblCover.jp2';
import sblCoverJxr from './../../../resources/images/JXR/sblCover.jxr';

import HelmetContainer from '../../shared/helmet_container';

import Quote from '../../shared/quotes/quote';
import QuoteCycler from '../../shared/quotes/quote_cycler';
import ReadSample from '../read_sample';
import CoverBy from '../cover_by';
import BookPurchase from '../book_purchase';
import PictureContainer from '../../shared/picture_container';

const quotes = [
	{
		quote:
			'<p>I really, really enjoyed it.</p><p>A brave and noble book. What better thing can a person do with their own suffering than use it to help others?</p>	<p>It’s on my read-this-again shelf.</p>',
		cite:
			'<a href="http://nathanfiler.co.uk/" target="_blank" rel="noreferrer noopener">Nathan Filer, author of ‘The Shock of the Fall’</a>',
	},
	{
		quote:
			'<p>To merely call it a self-help book would be a complete disservice to the author. Part biography, part guide, and part Brother’s Grimm Fairy Tales of the Strange… if only I had read this growing up then I might not have felt so alone.</p>',
		cite:
			'<a href="https://www.allmadhere.co.uk/" target="_blank" rel="noreferrer noopener">Claire Eastham</a></cite>',
	},
	{
		quote:
			'Hughes offers a humor-filled and useful guide for anxiety… disarmingly relatable.',
		cite:
			'<cite><a href="http://www.publishersweekly.com/">Publishers Weekly</a></cite>',
	},
	{
		quote: 'It&apos;s not bad, I suppose.',
		cite: 'Neil&apos;s Mum',
	},
];

function WocPage(props) {
	var sillyQuotes = require('../../../resources/data/quotes/custard_silly.json');

	return (
		<div>
			<HelmetContainer page='walking_on_custard' />
			<div
				className='is-hidden-touch is-hidden-desktop-only  is-pulled-right notification is-light has-text-centered'
				style={{
					position: 'absolute',
					right: '2rem',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<h2>
					<strong>Also by Neil Hughes...</strong>
				</h2>
				<Link to='/sbl'>
					<p className='mt-3' style={{ width: '150px' }}>
						<PictureContainer
							fallback={sblCover}
							webp={sblCoverWebp}
							jxr={sblCoverJxr}
							jp2={sblCoverJp2}
							alt='Shop Before Life book cover'
							title='Shop Before Life book cover'
							className='sblTinyCover'
						/>
						<strong className='has-text-primary'>
							The Shop Before Life
						</strong>
					</p>
				</Link>
			</div>

			<div className='content' style={{ marginTop: '1rem' }}>
				<div className='tile is-ancestor is-vertical'>
					<div className='tile is-parent is-marginless is-paddingless'>
						<div className='tile is-child has-text-centered is-marginless is-paddingless'>
							<h3 className='has-drop-cap is-paddingless is-family-secondary'>
								Walking on Custard & the Meaning of Life
							</h3>
							<p className='is-paddingless is-family-secondary'>
								"One of the best funny books about anxiety"
							</p>
						</div>
					</div>
					<div className='tile is-parent'>
						<div className='tile is-parent'>
							<div className='tile is-child'>
								<div className='content has-text-centered'>
									<a
										href='http://viewbook.at/walkingoncustard'
										target='_blank'
										rel='noopener noreferrer'>
										<PictureContainer
											fallback={wocCover}
											webp={wocCoverWebp}
											jxr={wocCoverJxr}
											jp2={wocCoverJp2}
											alt='walking on custard book cover'
											title='walking on custard book cover'
											className='wocCover'
										/>
									</a>
									<CoverBy />

									<BookPurchase
										isHiddenMobile
										title='Walking on Custard'
										showHeader={false}
										headerText='READ IT NOW'
										amazonPaperbackUrl='http://viewbook.at/walkingoncustard'
										amazonHardbackUrl='http://viewbook.at/woch'
										kindleUrl='http://getbook.at/walkingoncustard'
										bookDepoUrl='http://www.bookdepository.com/Walking-on-Custard-Meaning-Life-Neil-Hughes/9780993166808/?a_aid=walkingoncustard'
									/>

									<div className='is-hidden-tablet is-size-6'>
										{/* <em><a href="http://viewbook.at/walkingoncustard" target="_blank" rel="noopener noreferrer">Click here!</a></em> */}
									</div>
								</div>
							</div>
						</div>
						<div className='tile is-parent'>
							<div className='tile is-child'>
								<div className='content'>
									<div className='is-size-6'>
										<p className='has-drop-cap'>
											<strong>
												Part-time comedian and full-time
												worrier Neil Hughes isn’t the
												kind of person you’d expect to
												write a helpful book.
											</strong>
										</p>
										<p>
											<em>He’s an idiot.</em>
										</p>
										<p>
											Or so his Inner Critic is constantly
											telling him.
										</p>
										<p>
											<strong>
												No wonder he lives with anxiety.
											</strong>
										</p>
										<p>
											But during his nervous bumbling
											through life he somehow learned how
											to{' '}
											<strong>reduce his anxiety</strong>{' '}
											and quit his unhelpful mental
											habits.
										</p>
										<p>
											Oh… and he stumbled on the Meaning
											of Life, too.
										</p>
									</div>
									<Quote
										quote={quotes[0].quote}
										cite={quotes[0].cite}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Quote quote={quotes[1].quote} cite={quotes[1].cite} />

				<div>
					<p>
						Now he’s sharing a combination of{' '}
						<strong>
							hilarious real-life stories, inventive fantasy
							fiction and badly-drawn graphs
						</strong>{' '}
						to help you to be less anxious and more happy.
					</p>
					<p>
						In this compelling, surprising and delightful guide to
						life, Neil explores how to (gently) uproot anxiety, all
						while battling interruptions from his doubtful Inner
						Critic.
					</p>
				</div>
				<Quote quote={quotes[2].quote} cite={quotes[2].cite} />
				<p>
					After sorting out love, crises, relationships, purpose, and
					contentment, he even considers how to deal with death and
					the Meaning of Life itself.
				</p>
				<p>
					<strong>
						Somehow, it turns out everything can be explained using
						custard…
					</strong>
				</p>

				<div className='level has-text-centered'>
					<Quote quote={quotes[3].quote} cite={quotes[3].cite} />
				</div>
			</div>

			<BookPurchase
				showHeader={true}
				title='Walking on Custard'
				colorType='is-danger'
				headerText='READ NOW...'
				amazonPaperbackUrl='http://viewbook.at/walkingoncustard'
				amazonHardbackUrl='http://viewbook.at/woch'
				kindleUrl='http://getbook.at/walkingoncustard'
				bookDepoUrl='http://www.bookdepository.com/Walking-on-Custard-Meaning-Life-Neil-Hughes/9780993166808/?a_aid=walkingoncustard'
			/>

			<section className='content'>
				{/* <h3 style={{fontVariant:'all-small-caps'}}>Some more things people have said:</h3> */}

				<QuoteCycler
					quotes={sillyQuotes}
					secondsPerQuote={9}
					secondsPerTransition={1.5}
					randomStart={true}
				/>
			</section>

			<ReadSample
				title='Walking on Custard'
				link='https://gallery.mailchimp.com/f16d438b230e1f3c54ecd5adc/files/Walking_on_Custard_the_Meaning_of_Life_Sample_01.pdf'
			/>
		</div>
	);
}

export default WocPage;
