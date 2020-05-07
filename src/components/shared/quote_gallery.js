// import React from 'react';
// import moment from 'moment';

// class QuoteGallery extends React.Component {

// 	constructor(props){
// 		super(props);

// 		let cqi = -1;

// 		if(this.props.quotes && this.props.quotes.length > 0){
// 			cqi = 0;
// 		}

// 		this.state =
// 		{
// 			currentQuoteIndex: cqi,
// 			opacity: 1
// 		};


// 	}

// 	tick(){

// 		if(this.props.quotes.length <= 1) return;

// 		if(this.state.isTransitioning){

// 			let opacityMin = 0;

// 			let transitionFraction = ((moment().diff(this.state.transitionStartTime)) * 1.0) / this.state.millisecondsPerTransition;
// 			if(transitionFraction <= 0.5)
// 			{
// 				let t = transitionFraction * 2;
// 				let o = Math.max(1 - (t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1), opacityMin);
// 				this.setState({opacity: o, currentQuoteProgressFraction: o + 0.5 });
// 			}else if (transitionFraction < 1){
// 				let t = (transitionFraction * 2 - 1);
// 				let o = Math.max((t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1), opacityMin);
// 				this.setState({ opacity: o,
// 					currentQuoteIndex: this.state.nextQuoteIndex, currentQuoteProgressFraction: (1 - o) - 0.5 });
// 			}else{
// 				this.setState({
// 					isTransitioning: false,
// 					nextQuoteIndex: this.state.currentQuoteIndex,
// 					opacity: 1,
// 					transitionStartTime: moment(),
// 					currentQuoteStartTime: moment()
// 				});
// 			}
// 		}else{
// 			let currentQuoteDuration = moment().diff(this.state.currentQuoteStartTime);


// 			if(currentQuoteDuration > this.state.millisecondsPerQuote){
// 				let nextIndex = (this.state.currentQuoteIndex < (this.props.quotes.length -1))
// 					? this.state.currentQuoteIndex + 1
// 					: 0;
// 				this.setState({ nextQuoteIndex: nextIndex,
// 					transitionStartTime: moment(), isTransitioning: true, currentQuoteProgressFraction: 1 });
// 			}else{
// 				this.setState({
// 					currentQuoteProgressFraction: (currentQuoteDuration * 1.0 / this.state.millisecondsPerQuote)
// 				});
// 			}
// 		}
// 	}

// 	render(){

// 		return <blockquote className="quoteGallery" >
// 			<div className="galleryButtons">
// 				<span className="galleryButton left"><i className="fas fa-arrow-left fa-xs subtitleIcon" />prev</span>
// 				<span className="galleryButton right">next <i className="fas fa-arrow-right fa-xs subtitleIcon" /></span>
// 			</div>
// 			<div className="quoteText" style={{ opacity: this.state.opacity }}>
// 				<span dangerouslySetInnerHTML={{ __html: this.props.quotes[this.state.currentQuoteIndex].quote }}/>
// 				<cite dangerouslySetInnerHTML={{ __html:this.props.quotes[this.state.currentQuoteIndex].cite }} />
// 			</div>
// 		</blockquote>;
// 	}
// }

// export default QuoteGallery;