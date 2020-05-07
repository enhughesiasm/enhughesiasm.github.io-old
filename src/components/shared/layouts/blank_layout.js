import React from 'react';
import PropTypes from 'prop-types';
import HeaderSimple from '../header_simple';
import FooterSimple from '../footer_simple';

export class BlankLayout extends React.PureComponent {
	render() {
		return (
			<div>
				<HeaderSimple />
				<main id="wrapper" className="columns" style={{minHeight:'78vh'}}>
					<div className="column has-spacing-top" style={{padding:'0 8%'}}>
						{this.props.children}
					</div>
				</main>
				<FooterSimple/>
			</div>
		);
	}
}

BlankLayout.propTypes = {
	children: PropTypes.node
};