import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import Footer from '../footer';
import HelmetContainer from '../helmet_container';
import SubscribePopup from '../subscribe_popup/subscribe_popup';

export class HomeLayout extends React.PureComponent {
	render() {
		return (
			<>
				{ (process.env.NODE_ENV != 'development') && <HelmetContainer>
					{/* <script async src="//load.sumo.com/" data-sumo-site-id="9bfaeb7d9450db870dce2fb26243022ed906a8e8dd644ec833adbb9c4d9a4036"/> */}
				</HelmetContainer>}
				<Header />
				<main id="wrapper" className="columns">
					<div className="column has-spacing-top" style={{padding:'0 8%'}}>
						{this.props.children}
					</div>
				</main>
				<Footer/>
				<SubscribePopup/>
			</>
		);
	}
}

HomeLayout.propTypes = {
	children: PropTypes.node.isRequired
};