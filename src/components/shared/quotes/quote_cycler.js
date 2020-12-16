import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Quote from './quote';
import { getHashCode } from './../../shared/functions';

class QuoteCycler extends React.Component {
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 25);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	constructor(props) {
		super(props);

		let cqi = -1;

		if (this.props.quotes && this.props.quotes.length > 0) {
			cqi = 0;

			if (this.props.randomStart) {
				cqi = Math.floor(Math.random() * this.props.quotes.length);
			}
		}

		this.state = {
			showAllQuotes: false,
			currentQuoteIndex: cqi,
			nextQuoteIndex: cqi,
			currentQuoteStartTime: moment(),
			transitionStartTime: moment(),
			opacity: 1,
			millisecondsPerTransition:
				(this.props.secondsPerTransition || 1.5) * 1000,
			millisecondsPerQuote:
				(this.props.secondsPerQuote || 2 + Math.random() * 3) * 1000,
			isTransitioning: false,
			currentQuoteProgressFraction: 0,
			quotes: this.props.quotes
				.map((a) => ({ sort: Math.random(), value: a }))
				.sort((a, b) => a.sort - b.sort)
				.map((a) => a.value),
		};

		this.tick = this.tick.bind(this);
		this.toggleShowAllQuotes = this.toggleShowAllQuotes.bind(this);
	}

	toggleShowAllQuotes() {
		this.setState({ showAllQuotes: !this.state.showAllQuotes });
	}

	tick() {
		if (this.state.quotes.length <= 1) return;

		if (this.state.isTransitioning) {
			let opacityMin = 0.05;

			let transitionFraction =
				(moment().diff(this.state.transitionStartTime) * 1.0) /
				this.state.millisecondsPerTransition;
			if (transitionFraction <= 0.5) {
				// fading out
				let t = transitionFraction * 2;
				// let o = Math.max(1 - (t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1), opacityMin);
				let o = Math.max(1 - t * t * t, opacityMin);
				this.setState({
					opacity: o,
					currentQuoteProgressFraction: o + 0.5,
				});
			} else if (transitionFraction < 1) {
				// fading in
				let t = transitionFraction * 2 - 1;
				// let o = Math.max((t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1), opacityMin);
				let o = Math.max(--t * t * t + 1, opacityMin);
				this.setState({
					opacity: o,
					currentQuoteIndex: this.state.nextQuoteIndex,
					currentQuoteProgressFraction: 1 - o - 0.5,
				});
			} else {
				this.setState({
					isTransitioning: false,
					nextQuoteIndex: this.state.currentQuoteIndex,
					opacity: 1,
					transitionStartTime: moment(),
					currentQuoteStartTime: moment(),
				});
			}
		} else {
			let currentQuoteDuration = moment().diff(
				this.state.currentQuoteStartTime
			);

			if (currentQuoteDuration > this.state.millisecondsPerQuote) {
				let nextIndex =
					this.state.currentQuoteIndex < this.state.quotes.length - 1
						? this.state.currentQuoteIndex + 1
						: 0;
				this.setState({
					nextQuoteIndex: nextIndex,
					transitionStartTime: moment(),
					isTransitioning: true,
					currentQuoteProgressFraction: 1,
				});
			} else {
				this.setState({
					currentQuoteProgressFraction:
						(currentQuoteDuration * 1.0) /
						this.state.millisecondsPerQuote,
				});
			}
		}
	}

	render() {
		let showLoader = !this.props.hideToggle && this.state.quotes.length > 1;

		return (
			<div>
				{showLoader && (
					<a
						className='smallPrint is-pulled-left blockquoteToggle has-text-dark'
						onClick={this.toggleShowAllQuotes}>
						{this.state.showAllQuotes
							? 'hide '
							: 'show all ' + this.state.quotes.length}{' '}
						quotes
					</a>
				)}
				{!this.state.showAllQuotes && (
					<Quote
						showLoader={showLoader}
						opacity={this.state.opacity}
						quote={
							this.state.quotes[this.state.currentQuoteIndex]
								.quote
						}
						cite={
							this.state.quotes[this.state.currentQuoteIndex].cite
						}
					/>
				)}
				{this.state.showAllQuotes && (
					<div>
						{this.state.quotes.map((quote, index) => (
							<Quote
								key={getHashCode(
									this.state.quotes[index].quote
								)}
								showLoader={index == 0}
								quote={this.state.quotes[index].quote}
								cite={this.state.quotes[index].cite}
							/>
						))}
					</div>
				)}
			</div>
		);
	}
}

export default QuoteCycler;

QuoteCycler.propTypes = {
	quotes: PropTypes.array.isRequired,
	randomStart: PropTypes.bool,
	secondsPerTransition: PropTypes.number,
	secondsPerQuote: PropTypes.number,
	hideToggle: PropTypes.bool,
};
