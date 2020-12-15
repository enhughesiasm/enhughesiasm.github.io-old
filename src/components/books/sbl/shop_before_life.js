import React from 'react';
import { Link } from 'react-router-dom';

import Magnifier from 'react-magnifier';
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
	Dot,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import HelmetContainer from '../../shared/helmet_container';

import wocCover from './../../../resources/images/wocCover.jpg';
import wocCoverWebp from './../../../resources/images/WebP/wocCover.webp';
import wocCoverJp2 from './../../../resources/images/JP2/wocCover.jp2';
import wocCoverJxr from './../../../resources/images/JXR/wocCover.jxr';

import paulCorfield2 from './../../../resources/images/paul_corfield_2.jpg';
import paulCorfield2Webp from './../../../resources/images/WebP/paul_corfield_2.webp';
import paulCorfield2Jxr from './../../../resources/images/JXR/paul_corfield_2.jxr';
import paulCorfield2Jp2 from './../../../resources/images/JP2/paul_corfield_2.jp2';

import paulCorfield3 from './../../../resources/images/paul_corfield_3.jpg';
import paulCorfield3Webp from './../../../resources/images/WebP/paul_corfield_3.webp';
import paulCorfield3Jxr from './../../../resources/images/JXR/paul_corfield_3.jxr';
import paulCorfield3Jp2 from './../../../resources/images/JP2/paul_corfield_3.jp2';

import paulCorfield4 from './../../../resources/images/paul_corfield_4.jpg';
import paulCorfield4Webp from './../../../resources/images/WebP/paul_corfield_4.webp';
import paulCorfield4Jxr from './../../../resources/images/JXR/paul_corfield_4.jxr';
import paulCorfield4Jp2 from './../../../resources/images/JP2/paul_corfield_4.jp2';

import sblCover from './../../../resources/images/sblCover.jpg';
import sblCoverWebp from './../../../resources/images/WebP/sblCover.webp';
import sblCoverJp2 from './../../../resources/images/JP2/sblCover.jp2';
import sblCoverJxr from './../../../resources/images/JXR/sblCover.jxr';

import jarsLeft from './../../../resources/images/jarmixleft.jpg';

import ReadSample from '../read_sample';
import CoverBy from '../cover_by';
import BookPurchase from '../book_purchase';
import Trait from './trait';
import QuoteCycler from '../../shared/quotes/quote_cycler';

import jarsImg1024 from './../../../resources/images/sbl_renders/JCU_PE_1024.jpg';
import shopImg1024 from './../../../resources/images/sbl_renders/SBL_PE_1024.jpg';
import FontAwesome from '../../shared/font_awesome';
import SBLMedals from './sbl_medals';
import PictureContainer from '../../shared/picture_container';
import useViewport from '../../shared/use_viewport';
import breakPoints from '../../shared/viewport_breakpoints';

function ShopBeforeLife() {
	var officialQuotes = require('../../../resources/data/quotes/sbl_official.json');
	var otherQuotes = require('../../../resources/data/quotes/sbl_other.json');

	let purchaseHeaderText = 'READ NOW';

	const { width } = useViewport();

	return (
		<>
			<HelmetContainer page='shop_before_life' />
			<div className='tile is-ancestor is-vertical'>
				<div className='tile is-parent is-marginless is-paddingless'>
					<div className='tile content is-child has-text-centered is-marginless is-paddingless'>
						<h2 className='has-drop-cap is-paddingless is-family-secondary'>
							The Shop Before Life
						</h2>
						<p className='is-paddingless is-family-secondary'>
							"Who will you become?"
						</p>
					</div>
				</div>
				<div className='tile is-parent is-hidden-mobile'>
					<div className='tile is-child is-12 has-text-centered'>
						<Trait />
					</div>
				</div>
				<div
					className='is-hidden-touch is-hidden-desktop-only is-pulled-right notification is-light has-text-centered'
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
					<Link to='/woc'>
						<p className='mt-3' style={{ width: '150px' }}>
							<PictureContainer
								fallback={wocCover}
								webp={wocCoverWebp}
								jxr={wocCoverJxr}
								jp2={wocCoverJp2}
								alt='Walking on Custard book cover'
								title='Walking on Custard book cover'
								className='wocTinyCover'
							/>
							<strong className='has-text-primary'>
								Walking on Custard
							</strong>
						</p>
					</Link>
				</div>
				<div className='tile is-parent'>
					<div
						className='tile is-child content has-text-centered'
						style={{ paddingRight: '1.5rem' }}>
						<div>
							<a
								href='http://viewbook.at/sbl'
								target='_blank'
								rel='noopener noreferrer'>
								<PictureContainer
									alt='The Shop Before Life'
									fallback={sblCover}
									webp={sblCoverWebp}
									jxr={sblCoverJxr}
									jp2={sblCoverJp2}
									style={{ maxWidth: '95%' }}
								/>
							</a>
							<CoverBy />
						</div>
						<SBLMedals />
					</div>
					<div className='tile is-child is-5 content'>
						<p className='has-drop-cap'>
							<strong>
								After two happy centuries in the prelife, Faythe
								is battling the most dangerous human emotion.
							</strong>
						</p>
						<p>
							{' '}
							She&apos;s <em>bored</em>.
						</p>
						<hr />
						<p>
							But when she accepts a once-in-a-prelifetime
							opportunity to become Apprentice at the Shop Before
							Life, her days become dreadfully interesting.
						</p>
						<p>
							Now she helps customers choose a unique combination
							of traits from the countless options available at
							the Shop Before Life.
						</p>
						<p>
							Will they be born on Earth as{' '}
							<span className='traitName'>
								MATHEMATICALLY GIFTED
							</span>
							? Or perhaps{' '}
							<span className='traitName'>EASILY IRRITATED</span>{' '}
							or{' '}
							<span className='traitName'>DELIGHTED BY CATS</span>
							?
						</p>
					</div>
				</div>
				<div className='tile is-parent'>
					<div
						className='tile is-child is-flex box has-background-light'
						style={{ alignItems: 'center' }}>
						<BookPurchase
							showHeader={false}
							title='The Shop Before Life'
							headerText={purchaseHeaderText}
							amazonPaperbackUrl='http://viewbook.at/sbl'
							amazonHardbackUrl='http://viewbook.at/sblh'
							kindleUrl='http://viewbook.at/sblk'
							bookDepoUrl='http://www.bookdepository.com/Shop-Before-Life-Neil-Hughes/9780993166846/?a_aid=walkingoncustard'
							isHiddenMobile
							hideBorder
						/>
					</div>
					<div className='tile is-child is-5'>
						<QuoteCycler
							quotes={officialQuotes}
							secondsPerQuote={9.5}
							secondsPerTransition={1.5}
							randomStart={true}
						/>
					</div>
				</div>
				<div className='tile is-parent'>
					<div className='tile is-child is-12 has-text-centered'>
						<img src={jarsLeft} style={{ width: '5rem' }} />
					</div>
				</div>
				<div className='tile is-parent'>
					<div className='tile is-child is-8'>
						<div className='content'>
							<p>
								But Faythe has questions of her own. Like—what
								exactly is <em>in</em> these jars of magical
								personality traits? And who is the mysterious
								Supplier who creates them?
							</p>
							<p>
								<strong>
									Unfortunately, these questions could awaken
									an ancient conflict and perhaps even destroy
									the Shop itself.
								</strong>
							</p>
							<p>
								<em>
									They should maybe mention that sort of thing
									during orientation.
								</em>
							</p>
							<p>
								Management are going to be furious when they
								find out, but Faythe’s divine punishment must
								wait. She&apos;s got to race to discover the
								secrets of the Shop—and hope they&apos;ll be
								enough to save it.
							</p>
							<p>
								Because if she fails,{' '}
								<strong>
									nobody will become themselves ever again
								</strong>
								...
							</p>
						</div>
					</div>
					<div
						className='tile is-child is-4 is-hidden-mobile is-flex'
						style={{ alignItems: 'center' }}>
						<div className='content'>
							<figure className=''>
								<PictureContainer
									fallback={paulCorfield2}
									webp={paulCorfield2Webp}
									jxr={paulCorfield2Jxr}
									jp2={paulCorfield2Jp2}
								/>
								<PictureContainer
									fallback={paulCorfield3}
									webp={paulCorfield3Webp}
									jxr={paulCorfield3Jxr}
									jp2={paulCorfield3Jp2}
								/>
								<PictureContainer
									fallback={paulCorfield4}
									webp={paulCorfield4Webp}
									jxr={paulCorfield4Jxr}
									jp2={paulCorfield4Jp2}
								/>
								<figcaption>
									<em className='is-size-7 has-text-centered'>
										<p>
											art courtesy of{' '}
											<a href='http://www.pseudorealism.com'>
												Paul Corfield
											</a>{' '}
										</p>
									</em>
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
				{width > breakPoints.MOBILE && (
					<div className='tile is-parent is-hidden-mobile'>
						<div className='tile is-child has-text-centered box'>
							<CarouselProvider
								naturalSlideWidth={480}
								naturalSlideHeight={480}
								totalSlides={2}
								visibleSlides={1}>
								<Slider>
									<Slide
										index={0}
										style={{ paddingBottom: '42%' }}>
										{' '}
										<Magnifier
											src={jarsImg1024}
											width={480}
											mgWidth={140}
											mgHeight={140}
											mgShape='square'
											mgMouseOffsetX={0}
											mgMouseOffsetY={0}
											zoomFactor={1.7}
										/>
									</Slide>
									<Slide
										index={1}
										style={{ paddingBottom: '42%' }}>
										<Magnifier
											src={shopImg1024}
											width={480}
											mgWidth={140}
											mgHeight={140}
											mgShape='square'
											mgMouseOffsetX={0}
											mgMouseOffsetY={0}
											zoomFactor={1.7}
										/>
									</Slide>
								</Slider>
								<ButtonBack className='button'>
									<FontAwesome icon='chevron-circle-left' />
								</ButtonBack>
								<Dot slide={0} />
								<Dot slide={1} />
								<ButtonNext className='button'>
									<FontAwesome icon='chevron-circle-right' />
								</ButtonNext>
							</CarouselProvider>

							<div className='smallPrint'>
								3d renders courtesy of{' '}
								<a
									href='https://www.instagram.com/sky2sart/'
									target='_blank'
									rel='noopener noreferrer'>
									sky2sart
								</a>
							</div>
						</div>
					</div>
				)}
				<div className='tile is-parent'>
					<div className='tile is-child'>
						<QuoteCycler
							quotes={otherQuotes}
							secondsPerQuote={10}
							secondsPerTransition={1.5}
							randomStart={true}
						/>
					</div>
				</div>
				<div className='tile is-parent'>
					<div className='tile is-child content'>
						<BookPurchase
							showHeader
							colorType='is-danger'
							title='The Shop Before Life'
							headerText={purchaseHeaderText + '...'}
							amazonPaperbackUrl='http://viewbook.at/sbl'
							amazonHardbackUrl='http://viewbook.at/sblh'
							kindleUrl='http://viewbook.at/sblk'
							bookDepoUrl='http://www.bookdepository.com/Shop-Before-Life-Neil-Hughes/9780993166846/?a_aid=walkingoncustard'
						/>
					</div>
				</div>
				<div className='tile is-parent is-hidden-mobile'>
					<div className='tile is-child is-12 has-text-centered'>
						<Trait />
					</div>
				</div>
				<div className='content'>
					<ReadSample
						title='The Shop Before Life'
						link='https://gallery.mailchimp.com/f16d438b230e1f3c54ecd5adc/files/d4d6e78b-a740-413b-b04c-415c8828a75e/Shop_Before_Life_Sample.01.pdf'
					/>
				</div>
			</div>
		</>
	);
}

export default ShopBeforeLife;