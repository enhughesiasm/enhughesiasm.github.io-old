import React from 'react';
import TopTitle from '../shared/top_title';
import yayImg from '../../resources/images/mailing-list.png';
import HelmetContainer from '../shared/helmet_container';

const SignupConfirmed = () => (
	<div>
		<HelmetContainer page='signup_confirmed' />
		<TopTitle
			title='Welcome to the Occasional Email Experience!'
			subtitle=''
			color='is-success'
			size='is-medium'
		/>
		<div className='tile is-ancestor is-vertical'>
			<div className='tile is-parent'>
				<div className='tile is-child is-10 notification is-warning'>
					<div className='content'>
						<p>
							I&apos;ve sent you an email with a{' '}
							<strong>couple of free gifts</strong> and a{' '}
							<strong>quick question.</strong>
						</p>
						<p>I&apos;m looking forward to staying in touch!</p>
					</div>
				</div>
				<div className='tile is-parent'>
					<div className='tile is-child'>
						<img src={yayImg} alt='Hooray' />
						<p className='smallPrint'>this joy is now yours</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default SignupConfirmed;
