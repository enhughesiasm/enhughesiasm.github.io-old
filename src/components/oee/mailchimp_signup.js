import React from 'react';
import FontAwesome from '../shared/font_awesome';
import SuccessIcon from '../shared/success_icon';
import { submitSubscribePopup } from '../shared/subscribe_popup/submit_subscribe_popup';
import { submitToAnalytics } from '../shared/functions';
import LoadingBounce from '../shared/loading_bounce';
import { Redirect } from 'react-router-dom';

class MailchimpSignup extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			emailValue:'',
			fNameValue:'',
			gdprConfirmed: false,
			submitSent: false,
			submitFailed: false,
			submitSuccess: false,
			alreadySubscribed: false
		};

	}

	isEmailValid = (email) => { return email.length > 5 && /^.+@.+\..+$/.test(email); }

	isEnabled = () => {
		// incredibly basic regex test for the email is fine for now
		return this.state.gdprConfirmed && this.isEmailValid(this.state.emailValue);
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const form = document.getElementById('mailchimpForm');

		const data = new FormData(form);

		submitToAnalytics('attempted subscribe', 'subscribe_oee_page', 'User attempted subscribe.', 1);

		this.setState({ submitSent: true});
		const response = await submitSubscribePopup(data);

		if(response.ok){
			// communication worked, see what was said
			const result = await response.json();
			if(result.success){
				submitToAnalytics('successful subscribe', 'subscribe_oee_page', 'Subscribe successful.', 1);
				this.setState({ submitSuccess: true});
			}else{
				if(result.alreadySubscribed){
					submitToAnalytics('already subscribed', 'subscribe_oee_page', 'User was already subscribed.', 1);
					this.setState({ alreadySubscribed: true});
				}else{
					submitToAnalytics('failed subscribe attempt', 'subscribe_oee_page', 'Something went wrong subscribing.', 1);
					this.setState({ submitFailed: true });
				}
			}
		}else{
			submitToAnalytics('failed subscribe attempt', 'subscribe_oee_page', 'Something went wrong subscribing.', 1);
			this.setState({ submitFailed: true });
		}
	}

	render(){

		const gdprConsentText = 'Yes, Neil may store the information provided and use it to send me stories and updates on books, talks & other products.';

		return(<>


		{!this.state.submitSent && <form id="mailchimpForm" onSubmit={this.handleSubmit}>
			<input type="hidden" name="u" value="f16d438b230e1f3c54ecd5adc"/>
			<input type="hidden" name="id" value="11d72325c1"/>
			<div id="mc_embed_signup_scroll">
				<div className="field">
					<div className="field-label">
						<label className="label" htmlFor="mce-EMAIL">Email</label>
					</div>
					<div className="field-body">
						<div className="control has-icons-left has-icons-right" style={{width:'100%'}}>
							<input type="email"
								className={'input is-rounded ' + (this.isEmailValid(this.state.emailValue) ? 'is-success' : 'is-warning')}
								value={this.state.emailValue}
								onChange={ (e)=>{this.setState({emailValue: e.target.value});} }
								name="EMAIL" id="mce-EMAIL" />
							<span className="icon is-small is-left">
								<FontAwesome icon='envelope'/>
							</span>
							<SuccessIcon success={this.isEmailValid(this.state.emailValue) || false} position='is-right' />

						</div>
					</div>
				</div>
				<div className="field">
					<div className="field-label">
						<label className="label" htmlFor="mce-FNAME">First Name </label>
					</div>
					<div className="control has-icons-left has-icons-right" style={{width:'100%'}}>

						<input
							className={'input is-rounded ' + (this.state.fNameValue.length >= 2 ? 'is-success' : 'is-warning')}
							type="text" value={this.state.fNameValue}
							onChange={ (e)=>{this.setState({fNameValue: e.target.value});} } name="FNAME" id="mce-FNAME" />
						<span className="icon is-small is-left">
							<FontAwesome icon='user'/>
						</span>
						<SuccessIcon success={this.state.fNameValue.length >= 2 || false} position='is-right' />
					</div>

				</div>
				<div className="field">
					<div className="field-label">
						<label htmlFor="gdpr_1917"><span className="label">Please confirm:</span>
							<input type="checkbox" id="gdpr_1917" name="gdpr[1917]"
								value='Y'
								checked={this.state.gdprConfirmed}
								onChange={ (e)=>{this.setState({gdprConfirmed: e.target.checked});} }
								className="checkbox "/>
							<span style={{marginLeft:'1rem'}}>{gdprConsentText} <em>(required)</em></span>
							<input type="hidden" name="gdprConsentText" value={gdprConsentText}/>
						</label>
					</div>
				</div>
				<div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" readOnly name="b_f16d438b230e1f3c54ecd5adc_11d72325c1" tabIndex="-1" value=""/></div>
				<div className="field has-text-centered">
					<input type="submit" readOnly disabled={!this.isEnabled()} value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className={'button is-rounded ' + (this.isEnabled() ? 'is-success' : 'is-danger')} />
				</div>
				<div className="notification is-dark">
					<div className="content">
						<div className="content__gdprLegal">
							<p className="smallPrint">Mailchimp is my email list management platform. By clicking &apos;subscribe&apos;, you acknowledge that your information will be processed according to the terms on this page, and transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/"  rel="noopener noreferrer">Learn more about Mailchimp&apos;s privacy practices here.</a></p>
						</div>
					</div>
				</div>
			</div>
		</form>}

			{ this.state.submitSent && !this.state.submitSuccess && !this.state.submitFailed && !this.state.alreadySubscribed && <div className="notification is-light has-text-centered"><LoadingBounce size='50'/></div>}
			{ this.state.submitSent && this.state.submitSuccess && <Redirect to={'/confirm-signup'} />}
			{ this.state.submitSent && this.state.submitFailed && <div className="notification is-danger has-text-centered">
				<h2>Sorry!</h2>
				<p>Something went wrong. <a href="http://eepurl.com/gB3e8P">Click here to try again.</a></p>
			</div>}
			{ this.state.submitSent && this.state.alreadySubscribed && <div className="notification is-warning has-text-centered">
				<h2>Oops!</h2>
				<p>That email was already subscribed. Your email consent has been recorded. To receive another subscription confirmation (which contains a link to update your subscription preferences), <a href="http://eepurl.com/gB3e8P">click here and fill out the form.</a></p>
			</div>}

		</>);
	}
}

export default MailchimpSignup;