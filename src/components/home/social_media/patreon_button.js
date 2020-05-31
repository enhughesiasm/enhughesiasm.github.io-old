import React, { lazy, Suspense } from 'react';

const PatreonButtonContent = lazy(() => import('./patreon_button_content'));

const renderLoader = () => <span>...</span>;

const PatreonButton = () => (
	<Suspense fallback={renderLoader()}>
		<PatreonButtonContent />
	</Suspense>
);

export default PatreonButton;
