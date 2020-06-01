import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

class HelmetContainer extends React.Component {
	constructor(props) {
		super(props);

		const data = require('../../resources/data/helmet.json');
		this.state = {
			helmetData: data,
		};
	}

	componentDidMount() {
		// console.log('mounting helmet for "' + this.props.page + '"');
	}

	render() {
		let pageName = this.props.page || 'missing';

		let pageData = this.state.helmetData[pageName];

		if (!pageData) {
			console.error('missing page in helmetcontainer: ' + pageName);
			pageData = this.state.helmetData['missing'];
		}

		return (
			<Helmet
				titleTemplate='%s - enhughesiasm'
				defaultTitle='The online home of Neil Hughes - enhughesiasm'>
				{/* BASIC META TAGS */}
				<title>{pageData.title}</title>
				<meta name='description' content={pageData.description} />
				{pageData.canonicalUrl && (
					<link rel='canonical' href={pageData.canonicalUrl} />
				)}

				{/* OPEN GRAPH */}
				<meta property='og:site_name' content='enhughesiasm' />
				<meta
					property='og:type'
					content={pageData.contentType || 'website'}
				/>
				<meta property='og:title' content={pageData.title} />
				<meta
					property='og:description'
					content={pageData.description}
				/>
				{pageData.canonicalUrl && (
					<meta
						property='og:url'
						rel='og:url'
						href={pageData.canonicalUrl}
					/>
				)}
				{pageData.imageUrl && (
					<meta
						property='og:image'
						rel='og:image'
						content={pageData.imageUrl}
						href={pageData.imageUrl}
					/>
				)}
				{pageData.imageUrl && (
					<meta
						property='og:image:url'
						content={pageData.imageUrl}
						href={pageData.imageUrl}
					/>
				)}
				{pageData.imageUrl && (
					<meta
						property='og:image:secure_url'
						content={pageData.imageUrl}
						href={pageData.imageUrl}
					/>
				)}

				{/* SHARED FONTS */}
				<link
					rel='stylesheet'
					href='https://indestructibletype-fonthosting.github.io/jost.css'
					type='text/css'
					charset='utf-8'
				/>
				<link
					rel='stylesheet'
					href='https://indestructibletype.com/fonts/Bodoni/Bodoni.css'
					type='text/css'
					charset='utf-8'
				/>
				<script
					async
					defer
					src='https://kit.fontawesome.com/73a247027b.js'></script>
				{/* <!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"> --> */}

				{/* ANY PAGE SPECIFIC THINGS CAN BE ADDED AS CHILDREN */}
				{this.props.children}
			</Helmet>
		);
	}
}

export default HelmetContainer;

HelmetContainer.propTypes = {
	page: PropTypes.string.isRequired,
	children: PropTypes.element,
};
