import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from './../shared/font_awesome';
import { submitToAnalytics } from './../shared/functions';

const BookPurchase = props => (
	<section
		className={
			'bookPurchase message ' +
			(props.colorType ? props.colorType : ' is-dark ') +
			(props.isHiddenMobile ? ' is-hidden-mobile' : '')
		}
		style={{
			opacity: '1'
		}}>
		{props.showHeader && (
			<div className='message-header has-text-centered'>
				<p className='' style={{ width: '100%' }}>
					{props.headerText}
				</p>
			</div>
		)}
		<div
			className='message-body'
			style={{
				borderWidth: props.hideBorder ? '0 0 0 0px' : 'inherit'
			}}>
			<div className='content has-text-centered'>
				<div>
					<a
						onClick={() =>
							submitToAnalytics(
								props.title,
								'book-purchase',
								'paperbackAmazon'
							)
						}
						href={props.amazonPaperbackUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='button is-focused is-small is-rounded is-success tooltip is-tooltip-top is-tooltip-danger'
						data-tooltip='Paperback - Amazon'>
						<FontAwesome icon={'book-open'} />
						<strong
							style={{ fontSize: '110%', marginLeft: '.5rem' }}>
							I want the paperback!
						</strong>
					</a>
					{props.bookDepoUrl && (
						<p className='is-size-7'>
							(also available from{' '}
							<a
								href={props.bookDepoUrl}
								onClick={() =>
									submitToAnalytics(
										props.title,
										'book-purchase',
										'paperbackBookDepo'
									)
								}
								target='_blank'
								rel='noopener noreferrer'
								className='tooltip is-tooltip-top is-tooltip-danger'
								data-tooltip='Paperback - Book Depository'>
								Book Depository
							</a>
							)
						</p>
					)}
					{props.amazonHardbackUrl && (
						<a
							onClick={() =>
								submitToAnalytics(
									props.title,
									'book-purchase',
									'hardbackAmazon'
								)
							}
							href={props.amazonHardbackUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='button is-focused is-small is-rounded is-success tooltip is-tooltip-top is-tooltip-danger'
							data-tooltip='Hardback - Amazon'>
							<FontAwesome icon={'book'} />
							<strong
								style={{
									fontSize: '110%',
									marginLeft: '.5rem'
								}}>
								I want the hardback!
							</strong>
						</a>
					)}
				</div>
				<p style={{ marginTop: '1.16rem' }}>
					<a
						href={props.kindleUrl}
						onClick={() =>
							submitToAnalytics(
								props.title,
								'book-purchase',
								'kindle'
							)
						}
						target='_blank'
						rel='noopener noreferrer'
						className='button is-focused is-small is-rounded is-success tooltip is-tooltip-top is-tooltip-danger'
						data-tooltip='Kindle - Amazon'>
						<FontAwesome icon={'tablet'} />
						<strong
							style={{ fontSize: '110%', marginLeft: '.5rem' }}>
							I want Kindle!
						</strong>
					</a>
				</p>
				{/* <p className="smallPrint">Also available at most bookshops.</p> */}
				<em className='is-size-7'>
					These are <strong>affiliate links</strong>—as an Amazon
					Associate I earn from qualifying purchases.
				</em>
			</div>
		</div>
	</section>
);

export default BookPurchase;

BookPurchase.propTypes = {
	isHiddenMobile: PropTypes.bool,
	title: PropTypes.string.isRequired,
	showHeader: PropTypes.bool,
	headerText: PropTypes.string,
	amazonPaperbackUrl: PropTypes.string.isRequired,
	amazonHardbackUrl: PropTypes.string,
	bookDepoUrl: PropTypes.string,
	kindleUrl: PropTypes.string.isRequired
};
