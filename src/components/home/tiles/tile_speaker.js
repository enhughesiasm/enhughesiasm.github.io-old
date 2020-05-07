import React from 'react';
import { Link } from 'react-router-dom';
import otmPic from './../../../resources/images/OneTrackMinds.jpg';
import LinkButton from './../../shared/link_button';

const Tile_Speaker = () => {
	return (
		<article className='tile is-child notification is-warning  has-text-centered'>
			<p className='title is-size-5-mobile'>
				<Link to='/speaking'>speaker</Link>
			</p>
			{/* <p className="is-size-7" style={{position:'relative', 'top': '-1.35rem'}}><em>(hilarious, inspiring)</em></p> */}
			<div className='notification is-light is-warning'>
				<a
					href='http://bit.ly/custardTED'
					target='_blank'
					rel='noopener noreferrer'>
					<div className='has-text-centered'>
						<img
							src={otmPic}
							alt='One Track Minds'
							title='One Track Minds'
							style={{ maxWidth: '75%' }}
						/>
					</div>
					<p className='subtitle has-text-centered'>
						Watch the TED talk!
					</p>
				</a>
				<p
					className='smallPrint has-text-centered'
					style={{ marginTop: '10px', marginBottom: '10px' }}>
					A <strong>quarter of a million people</strong> have already
					enjoyed the surprising link between <strong>anxiety</strong>{' '}
					and <strong>custard</strong>.
				</p>
			</div>
			<div className='notification is-warning'>
				<span className='smallPrint'>
					(when the world isn&apos;t paused by a virus)
				</span>
				<div>
					Neil gives{' '}
					<a href='https://patreon.com/walkingoncustard'>
						{' '}
						funny talks about mental health
					</a>{' '}
					at schools, conferences & more
				</div>
			</div>

			<LinkButton
				to='/speaking'
				className='button is-small is-rounded is-warning is-inverted is-outlined'>
				<span>need a speaker? click here</span>
			</LinkButton>

			{/* <div className="content">
				<QuoteCycler	quotes={schoolsQuotes}
					secondsPerQuote={12}
					secondsPerTransition={1.5}
					randomStart={true}
					hideToggle
				/>
			</div> */}
		</article>
	);
};

export default Tile_Speaker;