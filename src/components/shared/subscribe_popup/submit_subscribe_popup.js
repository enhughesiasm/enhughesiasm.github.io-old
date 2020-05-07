import { JSON_to_URLEncoded } from '../functions';
import clientConfig from '../../../config/client_config';

export async function submitSubscribePopup(inputs) {
	let data = {};
	// turn inputs FormData into a normal JSON object
	for (var [key, value] of inputs.entries()) {
		data[key] = value;
	}

	const url =
		clientConfig.nodeProtocol +
		'://' +
		clientConfig.nodeServer +
		':' +
		clientConfig.nodePort +
		'/api/submit-subscribe-popup';

	let response = {
		ok: false,
		success: false,
		message: 'Attempting to reach server.',
	};

	try {
		response = await fetch(url, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				Accept: 'application/x-www-form-urlencoded',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON_to_URLEncoded(data),
		}).catch((error) => {
			throw error;
		});

		if (response.status !== 200 || !response.ok) {
			return {
				ok: false,
				success: false,
				message: 'Communication error with server.',
			};
		} else {
			return response;
		}
	} catch (err) {
		// console.log('error caught');
		return {
			ok: false,
			success: false,
			message: 'Could not reach server.',
		};
	}

	//return response;
}
