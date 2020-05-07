import React from 'react';
import TopTitle from '../shared/top_title';
import yayImg from '../../resources/images/mailing-list.png';
import HelmetContainer from '../shared/helmet_container';

const ConfirmSignup = () => (
	<div>
		<HelmetContainer page='confirm_signup' />
		<TopTitle
			title='Please Confirm'
			subtitle="We're almost finished..."
			color='is-success'
			size='is-medium'
		/>
		<div className='tile is-ancestor is-vertical'>
			<div className='tile is-parent'>
				<div className='tile is-child is-10 notification is-warning'>
					<div className='content has-text-centered'>
						<p>
							<strong>
								To confirm you want to join the Occasional Email
								Experience, please click the link in the email I
								just sent you.
							</strong>
						</p>
						<p>I&apos;m looking forward to staying in touch!</p>
					</div>
				</div>
				<div className='tile is-parent'>
					<div className='tile is-child'>
						<img src={yayImg} />
						<p className='smallPrint'>this joy is nearly yours</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default ConfirmSignup;
