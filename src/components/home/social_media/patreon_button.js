import React, { Suspense } from 'react';
import loadable from '@loadable/component';

const PatreonButtonContent = loadable(() => import('./patreon_button_content'));

const renderLoader = () => <span>...</span>;

const PatreonButton = () => (
	<Suspense fallback={renderLoader()}>
		<PatreonButtonContent />
	</Suspense>
);

export default PatreonButton;
