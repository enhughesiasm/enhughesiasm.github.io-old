import React from 'react';
import { Link } from 'react-router-dom';

const CodingTitle = ({ title }) => (
	<div className='is-code has-background-black has-text-success is-size-2 is-size-5-mobile has-text-centered'>
		<Link to='/coding' style={{ color: 'limegreen' }}>
			{title}
		</Link>
		$<span class='cursor blink'>|</span>
	</div>
);

export default CodingTitle;
