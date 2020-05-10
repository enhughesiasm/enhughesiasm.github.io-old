import React from 'react';
import HelmetContainer from '../shared/helmet_container';
import ContactFormGate from './contact_form_gate';

function Contact() {
	return (
		<div className='has-text-centered has-spacing-top-3'>
			<HelmetContainer page='contact' />
			<h1 className='title'>contact</h1>
			<div className='content'>
				<div className='notification is-light'>
					<p>Email is welcome!</p>
					<p>
						<strong>Use the form below</strong>, or email directly:
					</p>
					<p>
						<em>
							neil <strong>at</strong> walkingoncustard{' '}
							<strong>dot</strong> com
						</em>
					</p>
					<p className='notification is-primary'>
						I read every email and reply to as many as I can.
					</p>
				</div>
				<ContactFormGate />
				<p className='is-size-6 notification is-light'>
					Or use your preferred social media site via the links below.
				</p>
			</div>
		</div>
	);
}

export default Contact;
