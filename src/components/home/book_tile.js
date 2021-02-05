import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LinkButton from '../shared/link_button';
import PictureContainer from '../shared/picture_container';

const BookTile = (props) => (
	<article className='media'>
		<figure className='media-left image is-64x64'>
			<Link to={props.linkUrl}>
				<PictureContainer
					fallback={props.coverImg}
					webp={props.coverImgWebp}
					jp2={props.coverImgJp2}
					jxr={props.coverImgJxr}
					alt={props.title}
				/>
			</Link>
		</figure>
		<div className='media-content' style={{ paddingLeft: '15px' }}>
			<div className='notification is-primary is-paddingless is-marginless content'>
				<Link className='home-bookTitle' to={props.linkUrl}>
					<strong>{props.title}</strong>
				</Link>
				<div className=''>
					{props.blurb}

					{/* <div>
						&nbsp;
						<LinkButton
							className='is-pulled-right button is-light is-small is-rounded is-primary is-inverted is-outlined'
							to={props.linkUrl}>
							learn more
						</LinkButton>
					</div> */}

					{/* {props.sampleUrl && (
						<div>
							&nbsp;
							<a
								className='is-pulled-right button is-light is-small is-rounded is-primary is-inverted is-outlined'
								target='_blank'
								rel='noopener noreferrer'
								href={props.sampleUrl}>
								read sample
							</a>
						</div>
					)} */}
				</div>
			</div>
		</div>
	</article>
);

export default BookTile;

BookTile.propTypes = {
	linkUrl: PropTypes.string.isRequired,
	coverImg: PropTypes.string.isRequired,
	coverImgWebp: PropTypes.string.isRequired,
	coverImgJp2: PropTypes.string.isRequired,
	coverImgJxr: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	blurb: PropTypes.string.isRequired,
	sampleUrl: PropTypes.string,
};
