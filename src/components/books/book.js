import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PictureContainer from '../shared/picture_container';

const Book = (props) => (
	<article className='media'>
		<figure className='media-left image is-64x64'>
			<Link to={props.linkUrl}>
				<PictureContainer
					alt={props.title}
					fallback={props.coverImg}
					webp={props.coverImgWebp}
					jxr={props.coverImgJxr}
					jp2={props.coverImgJp2}
				/>
			</Link>
		</figure>
		<div className='media-content' style={{ paddingLeft: '15px' }}>
			<div className='content'>
				<a className='home-bookTitle' href={props.linkUrl}>
					<strong>{props.title}</strong>
				</a>
				<div className=''>
					{props.blurb}
					<div>
						&nbsp;
						<a
							className='subtitle is-size-7 is-pulled-right'
							href={props.linkUrl}>
							learn more
						</a>
					</div>
					{props.sampleUrl && (
						<div>
							&nbsp;
							<a
								className='subtitle is-size-7 is-pulled-right'
								target='_blank'
								rel='noopener noreferrer'
								href={props.sampleUrl}>
								read sample
							</a>
						</div>
					)}
				</div>
			</div>
		</div>
	</article>
);

export default Book;

Book.propTypes = {
	linkUrl: PropTypes.string.isRequired,
	coverImg: PropTypes.string.isRequired,
	coverImgWebp: PropTypes.string.isRequired,
	coverImgJp2: PropTypes.string.isRequired,
	coverImgJxr: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	blurb: PropTypes.string.isRequired,
	sampleUrl: PropTypes.string,
};
