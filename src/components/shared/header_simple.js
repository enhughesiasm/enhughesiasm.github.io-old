import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderSimple = () => {
	return (
		<header>
			<NavLink to="/" className="">return</NavLink>
		</header>
	);
};

export default HeaderSimple;