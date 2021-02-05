import React from 'react';

const TakeATrait = () => (
	<>
		<hr style={{ margin: '.9rem 0 .5rem' }} />
		<p
			className='is-flex'
			style={{ justifyContent: 'center', alignItems: 'center' }}>
			<span className='smallPrint has-text-centered'>
				take a trait from <Link to='/sbl'>The Shop Before Life</Link>:
			</span>
			<Trait style={{ maxWidth: '325px' }} />
		</p>
	</>
);

export default TakeATrait;
