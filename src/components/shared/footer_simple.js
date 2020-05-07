import React from 'react';

const FooterSimple = () => {
	var currentYear = new Date().getFullYear();

	return (
		<div className="footer" style={{padding:'0'}}>
			<div className="content has-text-centered">
				<p className="notification is-dark is-marginless smallPrint">
				&copy; Neil Hughes 2019{ currentYear != (2019) ? ('—' + currentYear) : '' }
				</p>
			</div>
		</div>
	);
};

export default FooterSimple;