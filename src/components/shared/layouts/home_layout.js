import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import Footer from '../footer';
import HelmetContainer from '../helmet_container';
import SubscribePopup from '../subscribe_popup/subscribe_popup';
import SuspenseLoader from './suspense_loader';

export class HomeLayout extends React.PureComponent {
	render() {
		return (
			<>
				{process.env.NODE_ENV != 'development' && (
					<HelmetContainer>
						{/* <script async src="//load.sumo.com/" data-sumo-site-id="9bfaeb7d9450db870dce2fb26243022ed906a8e8dd644ec833adbb9c4d9a4036"/> */}
					</HelmetContainer>
				)}
				<Header />
				<main id='wrapper' className='columns'>
					<div className='column' />
					<div className='column has-spacing-top is-three-fifths-fullhd'>
						<Suspense fallback={<SuspenseLoader />}>
							{this.props.children}
						</Suspense>
					</div>
					<div className='column' />
				</main>
				<Footer />
				<SubscribePopup />
			</>
		);
	}
}

HomeLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
