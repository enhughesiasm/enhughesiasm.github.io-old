import React from 'react';

const PreferredTech = () => (
	<div className='is-code has-background-black has-text-success'>
		<div className='pl-4 mt-3 is-size-4 is-size-6-mobile'>
			$ ls <span className='has-text-warning'>preferred-tech</span>
		</div>
		<ul className='is-size-5 is-size-6-mobile'>
			<li className='pl-6'>&gt; React</li>
			<li className='pl-6'>&gt; TypeScript</li>
			<li className='pl-6'>&gt; Node.js</li>
			<li className='pl-6'>&gt; C# / ASP.NET</li>
			<li className='pl-6'>&gt; Postgres / SQL Server</li>
		</ul>
	</div>
);

export default PreferredTech;
