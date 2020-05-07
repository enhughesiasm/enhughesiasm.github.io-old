import { JSON_to_URLEncoded } from '../shared/functions';
import clientConfig from '../../config/client_config';

export async function submitContactForm(inputs) {
	const url =
		clientConfig.nodeProtocol +
		'://' +
		clientConfig.nodeServer +
		':' +
		clientConfig.nodePort +
		'/api/submit-contact-form';

	let response = { success: false, message: 'Attempting to reach server.' };

	try {
		response = await fetch(url, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				Accept: 'application/x-www-form-urlencoded',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON_to_URLEncoded(inputs), // this has to be url_encoded rather than pure JSON because CORS stops us sending json "cross-domain", ie to a different port
			// fuck web development, man, everything is a pain in the arse
		});

		if (response.status !== 200) {
			return { success: false, message: 'Could not reach server.' };
		} else {
			return response;
		}
	} catch (err) {
		return { success: false, message: 'Could not reach server.' };
	}

	//return response;
}

export async function testRoundTrip() {
	const url =
		clientConfig.nodeProtocol +
		'//' +
		clientConfig.nodeServer +
		':' +
		clientConfig.nodePort +
		'/api/test-round-trip';

	const response = await fetch(url, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		headers: {
			Accept: 'application/x-www-form-urlencoded',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: { message: 'hello server' },
	});

	return response;
}
