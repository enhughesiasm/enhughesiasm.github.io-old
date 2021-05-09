import React from 'react';
import { Link } from 'react-router-dom';
import TopTitle from '../shared/top_title';
import yayImg from '../../resources/images/mailing-list.png';
import MailchimpSignup from './mailchimp_signup';
import HelmetContainer from '../shared/helmet_container';
import Quote from '../shared/quotes/quote';

class OccasionalEmailExperience extends React.Component {
	render() {
		return (
			<div>
				<HelmetContainer page='occasional_email_experience'>
					{/* <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"></link> */}
				</HelmetContainer>
				<TopTitle
					title='The Occasional Email Experience'
					subtitle=''
					color='is-primary'
					size=''
				/>
				<div className='tile is-ancestor is-vertical'>
					<div className='tile is-parent'>
						<div className='tile is-child is-8'>
							<div className='content'>
								<p className='has-drop-cap has-text-weight-bold'>
									Most emails are terrible. So I aim to make
									mine a <em>special occasion</em>.
								</p>
								<p>
									Sign up below and I&apos;ll send you funny
									stories which may mildly improve your life.
									Once a month(ish), grab a cup of tea and
									settle in to enjoy.
								</p>
								<p className='notification is-light has-text-weight-bold is-size-6 is-size-6-mobile'>
									In your welcome email, I’ll include the
									opening chapters of{' '}
									<Link to='/walking-on-custard'>
										Walking on Custard & the Meaning of Life
									</Link>{' '}
									and{' '}
									<Link to='/shop-before-life'>
										The Shop Before Life
									</Link>{' '}
									for <strong>free</strong>.
								</p>
							</div>
						</div>
						<div className='tile is-parent'>
							<div className='tile is-child notification is-info'>
								<img src={yayImg} />
								<p className='smallPrint'>
									the sheer joy of receiving an email from
									Neil Hughes cannot be contained in a mere
									picture
								</p>
							</div>
						</div>
					</div>
					<div className='tile is-parent'>
						<div className='tile is-child'>
							<div className='content'>
								<Quote
									quote='Your emails make me howl. With laughter, I hasten to add! I think they could be sold to a major publisher. Thank you for entertaining me.'
									cite='A long-time subscriber'
								/>
							</div>
						</div>
					</div>

					<div className='tile is-parent'>
						<div className='tile is-child notification is-light'>
							<MailchimpSignup />
						</div>
					</div>
					<div className='tile is-parent notification is-warning'>
						<div className='tile is-child'>
							<div className='content'>
								<h5>what this is</h5>
								<ul>
									<li>
										You can expect to receive an email
										newsletter from me ‘occasionally’; in
										practice, roughly every few weeks to
										every few months.
									</li>
									<li>
										The content of these emails can be quite
										varied, but they tend to be mainly
										humorous or thought-provoking stories,
										along with roundups of links to
										interesting things I’ve found, and
										articles I’ve written recently.
										<p className='smallPrint'>
											(Usually the theme will be
											&apos;something idiotic I’ve done
											lately&apos;, and whatever important
											lessons I’ve managed to learn from
											my latest stupidity.)
										</p>
									</li>
									<li>
										I don’t store any of your data myself:
										at the time of writing I am using{' '}
										<a href='http://mailchimp.com'>
											Mailchimp
										</a>{' '}
										to manage my email list, which means
										they will store the data you provide on
										my behalf.
									</li>
									<li>
										Naturally,{' '}
										<strong>
											you can unsubscribe at any time
										</strong>{' '}
										– an unsubscribe link is provided in
										every email.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default OccasionalEmailExperience;
