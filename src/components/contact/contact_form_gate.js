import React from 'react';
import { ReCaptcha } from 'react-recaptcha-v3';
import clientConfig from '../../config/client_config';
import ContactForm from './contact_form';
import { submitContactForm, testRoundTrip } from './submit_contact_form';
import LoadingBounce from '../shared/loading_bounce';

class ContactFormGate extends React.Component {
	state = {
		recaptchaToken: null,
		submitted: false,
		submittedText: null,
		submissionSuccess: false,
		responseMessage: null,
	};
	verifyCallback = (recaptchaToken) => {
		this.setState({ recaptchaToken: recaptchaToken });
	};

	onTest = async () => {
		this.setState({ submitted: true });
		const response = await testRoundTrip();

		if (response.ok) {
			const body = await response.json();
			this.setState({
				submissionSuccess: body.success,
				responseMessage: body.message,
			});
		}
	};

	onSubmit = async (inputs) => {
		this.setState({ submitted: true, submittedText: inputs.message });

		const response = await submitContactForm(inputs);

		if (response.ok) {
			const body = await response.json();

			this.setState({
				submissionSuccess: body.success,
				responseMessage: body.message,
			});
		} else {
			this.setState({
				submissionSuccess: false,
				responseMessage:
					response.message || 'Something happened. Sorry!',
			});
		}
	};
	render() {
		const {
			submitted,
			responseMessage,
			submissionSuccess,
			submittedText,
		} = this.state;

		return (
			<>
				<ReCaptcha
					sitekey={clientConfig.recaptchaSiteKey}
					action='contact_form'
					verifyCallback={this.verifyCallback}
				/>
				{!submitted && (
					<ContactForm
						recaptchaToken={this.state.recaptchaToken}
						onSubmit={this.onSubmit}
						onTest={this.onTest}
					/>
				)}
				{submitted && !responseMessage && <LoadingBounce />}
				{submitted && responseMessage && (
					<p
						className={
							'notification is-' +
							(submissionSuccess ? 'success' : 'danger')
						}>
						{submissionSuccess && (
							<>
								<p>
									SUCCESS! Your message has been sent. Thank
									you!
								</p>
								{submittedText && (
									<>
										<p>
											<strong>Your message:</strong>
										</p>
										<p>{submittedText}</p>
									</>
								)}
							</>
						)}
						{!submissionSuccess && (
							<>
								<p>ERROR: {responseMessage}</p>
								<p>
									Your message has NOT been sent. Sorry!
									<br />
									If this problem persists, please email
									directly via <br />
									<strong>
										neil at walkingoncustard dot com
									</strong>
								</p>
								{submittedText && (
									<>
										<p>
											<strong>Your message:</strong>
										</p>
										<p>{submittedText}</p>
									</>
								)}
							</>
						)}
					</p>
				)}
			</>
		);
	}
}

export default ContactFormGate;
