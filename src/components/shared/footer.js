import React from 'react';
import SocialMediaBar from '../home/social_media_bar';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	var currentYear = new Date().getFullYear();

	return (
		<div className='footer'>
			<SocialMediaBar />
			<div className='content has-text-centered'>
				<p className='footerLinks notification is-primary is-marginless'>
					<span>
						{' '}
						&copy; Neil Hughes 2019
						{currentYear != 2019 ? '—' + currentYear : ''}
					</span>
					<NavLink to='/contact' className=''>
						contact
					</NavLink>
					<NavLink to='/privacy' className=''>
						privacy
					</NavLink>
				</p>
			</div>
		</div>
	);
};

export default Footer;
