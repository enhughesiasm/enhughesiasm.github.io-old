import React from 'react';

const subtitles = [
	'where disappointment gets disappointed',
	'home of the third-best Neil Hughes',
	'it may mildly improve your day',
	'better than at least one other website',
	'not technically a religion',
	'an authentic encounter with Neil Hughes',
	'this website has been officially rated "hmmm"',
	'a satisfactory way to spend time',
	'the best geocities neighbour you could imagine',
	'please enjoy your stay',
	"Neil Hughes: Does Stupid Things, So You Don't Have To",
	'silly things to make you feel better',
	'a perpetual state of chaos',
	'expertise in generality',
	'a refuge from the internet',
];

class RandomSubtitle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			remainingSubtitles: [...subtitles],
			subtitle: subtitles[Math.floor(Math.random() * subtitles.length)],
		};

		this.getNewSubtitle = this.getNewSubtitle.bind(this);
		this.setRandomSubtitle = this.setRandomSubtitle.bind(this);
	}

	setRandomSubtitle(e) {
		e.preventDefault();
		this.setState({ subtitle: this.getNewSubtitle(this.state.subtitle) });
	}

	getNewSubtitle(existingSubtitle) {
		let subtitlePool = this.state.remainingSubtitles;

		if (subtitlePool.length === 0) {
			subtitlePool = [...subtitles];
		}

		let subtitle = existingSubtitle;
		let index = 0;
		while (subtitle === existingSubtitle) {
			index = Math.floor(Math.random() * subtitlePool.length);
			subtitle = subtitlePool[index];
		}

		if (index >= 0) {
			let newSubtitles = [...subtitlePool];
			newSubtitles.splice(index, 1);
			this.setState({ remainingSubtitles: newSubtitles });
		}

		return subtitle;
	}

	render() {
		return (
			<div
				style={{ userSelect: 'none', MozUserSelect: 'none' }}
				className='is-size-6 is-size-6-mobile'>
				<a
					href='#'
					className='tooltip is-tooltip-bottom is-tooltip-primary'
					data-tooltip='click for extremely mild entertainment'>
					<i
						className='fas fa-redo-alt fa-xs subtitleIcon'
						style={{ cursor: 'pointer' }}
						onClick={this.setRandomSubtitle}></i>
				</a>
				&nbsp;&nbsp;
				{this.state.subtitle}
			</div>
		);
	}
}

export default RandomSubtitle;
