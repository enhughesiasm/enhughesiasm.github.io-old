import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import clientConfig from '../../config/client_config';
import Helmet from 'react-helmet';

const propTypes = {
	elementID: PropTypes.string,
	verifyCallbackName: PropTypes.string,
	verifyCallback: PropTypes.func,
	action: PropTypes.string.isRequired,
};

const defaultProps = {
	elementID: 'g-recaptcha',
	verifyCallbackName: 'verifyCallback',
};

const isReady = () =>
	typeof window !== 'undefined' &&
	typeof window.grecaptcha !== 'undefined' &&
	typeof window.grecaptcha.execute !== 'undefined';

const ReCaptcha = (props) => {
	const scriptUrl =
		'https://www.google.com/recaptcha/api.js?render=' +
		clientConfig.recaptchaSiteKey;

	const [ready, setReady] = useState(false);

	const handleChangeClientState = (newState, addedTags) => {
		if (addedTags && addedTags.scriptTags) {
			const foundScript = addedTags.scriptTags.find(
				({ src }) => src === scriptUrl
			);
			if (foundScript) {
				foundScript.addEventListener(
					'load',
					() => {
						setReady(true);
						const { verifyCallback, action } = props;

						window.grecaptcha.ready(function () {
							window.grecaptcha
								.execute(clientConfig.recaptchaSiteKey, {
									action,
								})
								.then((token) => {
									if (typeof verifyCallback !== 'undefined') {
										verifyCallback(token);
									}
								});
						});
					},
					{
						once: true,
					}
				);
			}
		}
	};

	return (
		<>
			<Helmet onChangeClientState={handleChangeClientState}>
				<script async defer src={scriptUrl} />
			</Helmet>
			{ready ? (
				<div
					id={props.elementID}
					data-verifycallbackname={props.verifyCallbackName}
				/>
			) : (
				<div id={props.elementID} className='g-recaptcha' />
			)}
		</>
	);
};

ReCaptcha.propTypes = propTypes;
ReCaptcha.defaultProps = defaultProps;

export default ReCaptcha;
