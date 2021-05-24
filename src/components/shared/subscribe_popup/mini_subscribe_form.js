import React from 'react';
import SuccessIcon from '../success_icon';
import FontAwesome from '../font_awesome';

export default class MiniSubscribeForm extends React.Component {
	state = {
		emailValue: '',
		fNameValue: '',
		gdprConfirmed: false,
	};

	isEmailValid = (email) => {
		return email.length > 5 && /^.+@.+\..+$/.test(email);
	};

	isEnabled() {
		// incredibly basic regex test for the email is fine for now
		return (
			this.state.gdprConfirmed && this.isEmailValid(this.state.emailValue)
		);
	}

	render() {
		const gdprConsentText =
			'I agree to my personal data being stored and used to send me email.';
		return (
			<div className='has-text-centered is-size-6 is-size-7-mobile'>
				<form
					id='miniMailchimpForm'
					name='mc-embedded-subscribe-form'
					target='_blank'
					onSubmit={this.props.handleSubmit}>
					<p
						className=''
						style={{ padding: '.75rem 0', fontSize: '90%' }}>
						... but I&apos;d like to send you{' '}
						<strong>occasional entertaining stories</strong> about
						life, anxiety & things.
					</p>
					<fieldset>
						<input
							type='hidden'
							name='u'
							value='f16d438b230e1f3c54ecd5adc'
						/>
						<input type='hidden' name='id' value='11d72325c1' />
						<div className='field'>
							<div className='control has-icons-left has-icons-right'>
								<input
									type='email'
									placeholder='Enter your Email'
									className={
										'input is-rounded ' +
										(this.isEmailValid(
											this.state.emailValue
										)
											? 'is-success'
											: 'is-warning')
									}
									value={this.state.emailValue}
									onChange={(e) => {
										this.setState({
											emailValue: e.target.value,
										});
									}}
									name='EMAIL'
									id='mini-mce-EMAIL'
								/>
								<span className='icon is-small is-left'>
									<FontAwesome icon='envelope' />
								</span>
								<SuccessIcon
									success={
										this.isEmailValid(
											this.state.emailValue
										) || false
									}
									position='is-right'
								/>
							</div>
						</div>
						<div className='field'>
							<label
								htmlFor='mini_gdpr_1917'
								className='is-size-7'>
								<input
									type='checkbox'
									id='mini_gdpr_1917'
									name='gdpr[1917]'
									value='Y'
									checked={this.state.gdprConfirmed}
									onChange={(e) => {
										this.setState({
											gdprConfirmed: e.target.checked,
										});
									}}
									className='checkbox '
								/>
								<span style={{ marginLeft: '1rem' }}>
									{gdprConsentText} <em>(required)</em>
								</span>
							</label>
							<input
								type='hidden'
								name='gdprConsentText'
								value={gdprConsentText}
							/>
						</div>
						<div
							style={{ position: 'absolute', left: '-5000px' }}
							aria-hidden='true'>
							<input
								type='text'
								readOnly
								name='b_f16d438b230e1f3c54ecd5adc_11d72325c1'
								tabIndex='-1'
								value=''
							/>
						</div>
						<div className='field has-text-centered'>
							<input
								type='submit'
								readOnly
								disabled={!this.isEnabled()}
								value='Entertain me occasionally!'
								name='subscribe'
								id='mc-embedded-subscribe'
								className={
									'button is-size-6 is-size-7-mobile is-rounded ' +
									(this.isEnabled()
										? 'is-success'
										: 'is-danger')
								}
							/>
						</div>
					</fieldset>
					<p
						className='smallPrint is-size-7'
						style={{ margin: '1.1rem 0 0' }}>
						Mailchimp is my email list management platform. By
						clicking above, you acknowledge that your information
						will be processed according to{' '}
						<a
							href='/privacy'
							target='_blank'
							rel='noopener noreferrer'>
							these terms
						</a>
						, and transferred to Mailchimp for processing.{' '}
						<a
							href='https://mailchimp.com/legal/'
							rel='noopener noreferrer'>
							Learn more about Mailchimp here.
						</a>
					</p>
				</form>
			</div>
		);
	}
}
