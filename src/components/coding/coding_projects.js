import React from 'react';

const CodingProjects = () => (
	<div className='is-code has-background-black has-text-success is-size-5 is-size-6-mobile'>
		<div className='pl-4 mt-3 is-size-4 is-size-6-mobile'>
			$ ls <span className='has-text-warning'>recent-projects</span>
		</div>
		<ul>
			<li className='pl-6'>
				&gt;{' '}
				<a className='' href='/complex' style={{ color: 'limegreen' }}>
					The Supplier&apos;s Complex
				</a>
			</li>
			<li className='pl-6'>
				&gt;{' '}
				<a
					className=''
					href='https://ourpomona.org'
					style={{ color: 'limegreen' }}>
					Our Pomona
				</a>
			</li>
			<li className='pl-6'>
				&gt;{' '}
				<a className='' href='/q' style={{ color: 'limegreen' }}>
					Interactive Live Quiz
				</a>
			</li>
		</ul>
	</div>
);

export default CodingProjects;
