import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { loadReCaptcha } from 'react-recaptcha-v3';
import clientConfig from '../config/client_config';

import ErrorBoundary from './error_boundary';
import Routes from './routes/routes';
import ScrollToTop from './routes/scroll_to_top';

const App = () => {
	useEffect(() => {
		// public recaptcha key
		loadReCaptcha(clientConfig.recaptchaSiteKey);
	});

	return (
		<ErrorBoundary>
			{/* <BrowserRouter basename="/"> */}
			<BrowserRouter>
				<ScrollToTop>
					<Routes />
				</ScrollToTop>
			</BrowserRouter>
		</ErrorBoundary>
	);
};

export default App;
