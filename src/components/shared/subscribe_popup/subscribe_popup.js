import React from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import FontAwesome from '../font_awesome';
import MiniSubscribeForm from './mini_subscribe_form';
import LoadingBounce from '../loading_bounce';
import subscribePopupStorage from './subscribe_popup_storage';
import moment from 'moment';
import { withRouter } from 'react-router';
import ScrollDetector from './scroll_detector';
import { submitSubscribePopup } from './submit_subscribe_popup';
import { submitToAnalytics } from '../functions';

const initialShowDelaySeconds = 4;

// TK share with mailchimp_signup.js
const localStorageKey = 'enhughesiasm_subscribe_popup_v1';

class SubscribePopup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			firstMountTime: moment(),
			hasShownPopup: false,
			showPopup: false,
			isOpen: true,
			submitted: false,
			submitSuccess: false,
			submitFailure: false,
			alreadySubscribed: false,
		};
	}

	handleScroll = () => {
		if (this.canShowPopup()) {
			this.setState({ showPopup: true, hasShownPopup: true });
		}
	};

	canShowPopup = () => {
		// console.log('checking canShowPopup');

		const debugOverride = false && process.env.NODE_ENV === 'development';

		if (!debugOverride) {
			if (this.state.hasShownPopup) {
				// console.log('no: already shown');
				return false;
			}

			if (this.isOnMailPage()) {
				// console.log('no: on mail page');
				return false;
			}

			if (
				moment()
					.subtract(initialShowDelaySeconds, 'seconds')
					.isBefore(this.state.firstMountTime)
			) {
				// console.log('no: initial delay');
				return false;
			}
		}

		let popupStorage =
			JSON.parse(localStorage.getItem(localStorageKey)) ||
			subscribePopupStorage;

		let timeConditionMet = false;

		if (popupStorage.submitted) {
			// console.log('no: already submitted');
			timeConditionMet = false; // never show to already submitted user
		} else {
			if (!popupStorage.lastShown || popupStorage.dismissCount === 0) {
				// first ever show
				// console.log('yes: first ever');
				timeConditionMet = true;
			} else {
				// compare to showNextTime
				if (
					!popupStorage.showNextTime ||
					moment().isAfter(popupStorage.showNextTime)
				) {
					// console.log('yes: time arrived: ' + popupStorage.showNextTime);
					timeConditionMet = true;
				} else {
					// console.log('no: still waiting for ' + popupStorage.showNextTime);
					timeConditionMet = false;
				}
			}
		}

		if (timeConditionMet) {
			popupStorage.lastShown = moment();
			submitToAnalytics('show', 'subscribe_popup', 'Popup Shown', 1);
		}

		localStorage.setItem(localStorageKey, JSON.stringify(popupStorage));
		return debugOverride || timeConditionMet;
	};

	isOnMailPage = () => {
		return (
			this.props.location.pathname === '/occasional-email-experience' ||
			this.props.location.pathname === '/mailing' ||
			this.props.location.pathname === '/confirm-signup' ||
			this.props.location.pathname === '/signup-confirmed'
		);
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		const form = document.getElementById('miniMailchimpForm');

		const data = new FormData(form);

		this.setState({ submitted: true });
		submitToAnalytics(
			'attempted subscribe',
			'subscribe_popup',
			'User attempted subscribe.',
			1
		);

		const response = await submitSubscribePopup(data);

		if (response.ok) {
			// communication worked, see what was said

			const result = await response.json();

			if (result.success) {
				let popupStorage = JSON.parse(
					localStorage.getItem(localStorageKey)
				);
				popupStorage.submitted = true;
				localStorage.setItem(
					localStorageKey,
					JSON.stringify(popupStorage)
				);
				submitToAnalytics(
					'successful subscribe',
					'subscribe_popup',
					'Subscribe submitted.',
					1
				);
				this.setState({ submitSuccess: true, submitFailure: false });
			} else {
				submitToAnalytics(
					'already subscribed',
					'subscribe_popup',
					'User submitted but was already subscribed.',
					1
				);
				this.setState({
					submitSuccess: false,
					submitFailure: true,
					alreadySubscribed: result.alreadySubscribed || false,
				});
			}
		} else {
			submitToAnalytics(
				'failed subscribe attempt',
				'subscribe_popup',
				'Something went wrong subscribing.',
				1
			);
			this.setState({ submitSuccess: false, submitFailure: true });
		}
	};

	incrementDismissCount = () => {
		let popupStorage = JSON.parse(localStorage.getItem(localStorageKey));
		if (popupStorage && Number.isInteger(popupStorage.dismissCount)) {
			popupStorage.dismissCount++;
		}
		submitToAnalytics(
			'dismissed',
			'subscribe_popup',
			'User dismissed the popup.',
			popupStorage.dismissCount
		);
		localStorage.setItem(localStorageKey, JSON.stringify(popupStorage));
	};

	setNextShowTime = () => {
		let popupStorage = JSON.parse(localStorage.getItem(localStorageKey));

		// show in a number of days
		let nextTime = moment().add(
			7 +
				(popupStorage.dismissCount * popupStorage.dismissCount || 0) *
					5,
			'days'
		);

		popupStorage.showNextTime = nextTime;
		localStorage.setItem(localStorageKey, JSON.stringify(popupStorage));
	};

	handleSuccessClick = () => {
		this.setState({ isOpen: false });
	};

	render() {
		const title = !this.state.submitted
			? 'Sorry to bother you...'
			: !this.state.submitSuccess && !this.state.submitFailure
			? 'Hold on...'
			: this.state.submitSuccess
			? !this.state.submitFailure
				? 'Hooray!'
				: 'Uh-oh.'
			: 'Uh-oh.';

		return (
			<>
				<ScrollDetector handleScroll={this.handleScroll} />
				{this.state.showPopup && (
					<div id='subscribePopup'>
						<SlidingPane
							className='slidingPane'
							isOpen={this.state.isOpen}
							from={'bottom'}
							closeIcon={
								<div
									className={
										'notification ' +
										(!this.state.submitSuccess
											? 'is-primary'
											: 'is-success')
									}>
									<FontAwesome
										icon='times-circle'
										style={{ fontSize: '1.25rem' }}
									/>
								</div>
							}
							title={
								<div
									className={
										'notification has-text-centered subtitle ' +
										(!this.state.submitSuccess
											? 'is-primary'
											: 'is-success')
									}>
									{title}
								</div>
							}
							onRequestClose={() => {
								this.incrementDismissCount();
								this.setNextShowTime();
								this.setState({ isOpen: false });
							}}
							ariaHideApp={false}>
							{!this.state.submitted && (
								<MiniSubscribeForm
									handleSubmit={this.handleSubmit}
								/>
							)}
							{this.state.submitted &&
								!(
									this.state.submitSuccess ||
									this.state.submitFailure
								) && (
									<div className='notification is-light has-text-centered'>
										<LoadingBounce
											size='90'
											color='#118aB2'
										/>
									</div>
								)}
							{this.state.submitted &&
								this.state.submitSuccess &&
								!this.state.submitFailure && (
									<div className='has-text-centered'>
										<div
											className='content'
											style={{ marginTop: '5vh' }}>
											<h2>Welcome.</h2>
											<p className=''>
												Please click the link in the
												email I&apos;ve just sent you.
											</p>
											<p>
												<button
													className='button is-success is-rounded'
													onClick={
														this.handleSuccessClick
													}>
													Okay, I&apos;ll go do that.
												</button>
											</p>
											<p className='smallPrint'>
												You won&apos;t join the
												Occasional Email Experience
												until you confirm by clicking
												the link in your inbox.
											</p>
										</div>
									</div>
								)}
							{this.state.submitted &&
								!this.state.submitSuccess &&
								this.state.submitFailure &&
								this.state.alreadySubscribed && (
									<div className='notification is-danger has-text-centered'>
										That email address is already
										subscribed.{' '}
										<p>
											<a href='https://enhughesiasm.us9.list-manage.com/subscribe?u=f16d438b230e1f3c54ecd5adc&id=11d72325c1'>
												Click here, fill in the form and
												click the error link that
												appears afterwards to re-enable
												your subscription.
											</a>
										</p>
									</div>
								)}
							{this.state.submitted &&
								!this.state.submitSuccess &&
								this.state.submitFailure &&
								!this.state.alreadySubscribed && (
									<div className='notification is-danger has-text-centered'>
										Something went wrong.{' '}
										<a href='/occasional-email-experience'>
											Click here and try again
										</a>
										.
									</div>
								)}
							{this.state.submitted &&
								this.state.submitSuccess &&
								this.state.submitFailure &&
								!this.state.alreadySubscribed && (
									<div className='notification is-warning has-text-centered'>
										Something weird happened.{' '}
										<a href='/occasional-email-experience'>
											Click here and try again
										</a>
										.
									</div>
								)}
						</SlidingPane>
					</div>
				)}
			</>
		);
	}
}

export default withRouter(SubscribePopup);
