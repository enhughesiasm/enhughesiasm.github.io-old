import React, { useState } from 'react';
import FontAwesome from '../shared/font_awesome';
// import { testRoundTrip } from './submit_contact_form';
import SuccessIcon from '../shared/success_icon';

const useForm = (callback, responseCallback) => {
	const [inputs, setInputs] = useState({});
	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		callback(inputs);
	};
	const handleInputChange = (event) => {
		event.persist();
		setInputs((inputs) => ({
			...inputs,
			[event.target.name]: event.target.value,
		}));
	};
	return {
		handleSubmit,
		handleInputChange,
		inputs,
	};
};

const isValidName = (inputs) => {
	return inputs.name && inputs.name.length >= 3;
};

const isValidEmail = (inputs) => {
	return (
		inputs.email &&
		/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs.email)
	);
};

const isValidMessage = (inputs) => {
	return (
		inputs.message &&
		inputs.message.length >= 20 &&
		inputs.message.length < 2000
	);
};

const ContactForm = ({ recaptchaToken, onSubmit, onTest }) => {
	const { inputs, handleInputChange, handleSubmit } = useForm(onSubmit);

	inputs.recaptchaToken = recaptchaToken;
	const validName = isValidName(inputs);
	const validEmail = isValidEmail(inputs);
	const validMessage = isValidMessage(inputs);

	const enabled = !!recaptchaToken && validName && validEmail && validMessage;
	return (
		<form
			id='contactForm'
			onSubmit={handleSubmit}
			className='box'
			style={{ marginTop: '3rem' }}>
			<div className='field is-horizontal'>
				<div className='field-label'>
					<label className='label' htmlFor='fromName'>
						Name
					</label>
				</div>
				<div className='field-body'>
					<div
						className='control has-icons-left has-icons-right'
						style={{ width: '100%' }}>
						<input
							className={
								(validName ? 'is-success' : 'is-warning') +
								' input is-rounded'
							}
							id='fromName'
							name='name'
							placeholder='Enter your name'
							value={inputs.name || ''}
							onChange={handleInputChange}
							required
						/>
						<span className='icon is-small is-left'>
							<FontAwesome icon='user' />
						</span>
						<SuccessIcon
							success={validName || false}
							position='is-right'
						/>
					</div>
				</div>
			</div>
			<div className='field is-horizontal'>
				<div className='field-label'>
					<label className='label' htmlFor='fromEmail'>
						Email
					</label>
				</div>
				<div className='field-body'>
					<div
						className='control has-icons-left has-icons-right'
						style={{ width: '100%' }}>
						<input
							className={
								(validEmail ? 'is-success' : 'is-warning') +
								' input is-rounded'
							}
							id='fromEmail'
							name='email'
							placeholder='Enter your email'
							value={inputs.email || ''}
							onChange={handleInputChange}
							required
						/>
						<span className='icon is-small is-left'>
							<FontAwesome icon='envelope' />
						</span>
						<SuccessIcon
							success={validEmail || false}
							position='is-right'
						/>
					</div>
				</div>
			</div>
			<div className='field is-horizontal'>
				<div className='field-label'>
					<label className='label' htmlFor='fromMessage'>
						Message
					</label>
				</div>
				<div className='field-body'>
					<div
						className='control has-icons-right'
						style={{ width: '100%' }}>
						<textarea
							rows='6'
							className={
								(validMessage ? 'is-success' : 'is-warning') +
								' textarea'
							}
							id='fromMessage'
							name='message'
							placeholder='Enter your message'
							value={inputs.message || ''}
							onChange={handleInputChange}
							required
							style={{ height: 'auto' }}
						/>
						{/* <span className="icon is-small is-left">
						<FontAwesome icon='pencil-alt'/>
					</span> */}
						<SuccessIcon
							success={validMessage || false}
							position='is-right'
							bottom
						/>
					</div>
				</div>
			</div>
			<div className='field is-horizontal'>
				<div className='field-label'>{/* left blank for spacing*/}</div>
				<div
					className='field-body'
					style={{ justifyContent: 'center' }}>
					<div className='control'>
						<button
							type='submit'
							className={
								'button is-rounded ' +
								(recaptchaToken
									? enabled
										? 'is-success'
										: 'is-warning'
									: 'is-loading')
							}
							disabled={!enabled}>
							Send
						</button>
					</div>
				</div>
			</div>

			<p className='is-size-7'>
				This site is protected by reCAPTCHA and the Google{' '}
				<a
					href='https://policies.google.com/privacy'
					target='_blank'
					rel='noopener noreferrer'>
					Privacy Policy
				</a>{' '}
				and{' '}
				<a
					href='https://policies.google.com/terms'
					target='_blank'
					rel='noopener noreferrer'>
					Terms of Service
				</a>{' '}
				apply.
			</p>
		</form>
	);
};

export default ContactForm;
