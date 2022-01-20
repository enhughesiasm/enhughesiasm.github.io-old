import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from './error_boundary';
import Routes from './routes/routes';
import ScrollToTop from './routes/scroll_to_top';

const App = () => {
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
