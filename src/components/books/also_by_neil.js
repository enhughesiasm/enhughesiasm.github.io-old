import React from 'react';
import { Link } from 'react-router-dom';
import PictureContainer from '../shared/picture_container';

// there's a smarter way to do this where the actual books are child components and would support more books...
// ... but it'll be years before I NEED two books here so quick-and-dirty is fine
const AlsoByNeil = ({
	title,
	altText,
	linkToUrl,
	fallback,
	webp,
	jxr,
	jp2,
}) => {
	return (
		<div
			className='is-hidden-touch is-hidden-desktop-only  is-pulled-right notification has-background-white has-text-centered'
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
			<Link to={linkToUrl}>
				<p
					className='mt-3 is-flex'
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
					}}>
					<div
						style={{ width: '90px' }}
						className='has-text-centered'>
						<PictureContainer
							fallback={fallback}
							webp={webp}
							jxr={jxr}
							jp2={jp2}
							alt={altText}
							title={altText}
							className='tinyCover'
						/>
					</div>
					<em className='has-text-primary is-size-6'>{title}</em>
				</p>
			</Link>
		</div>
	);
};

export default AlsoByNeil;
