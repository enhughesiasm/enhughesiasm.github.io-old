import React from 'react';

const CodingBlurb = ({ long }) => (
	<div className='has-background-black is-code has-text-success is-size-5 is-size-6-mobile'>
		<div className='pl-4 mt-3'>
			<span className='is-size-4 is-size-6-mobile'>$</span> NEIL has been
			developing SOFTWARE since the 1980s{long && <>,</>}
		</div>
		{long && (
			<>
				<div className='pl-6'>
					&gt; when he would excitedly type PROGRAMS
				</div>
				<div className='pl-6'>
					&gt; from magazines into a <em>ZX SPECTRUM +2</em>
				</div>
				<div className='pl-6' style={{ color: 'limegreen' }}>
					SYNTAX ERROR
				</div>
			</>
		)}
	</div>
);

export default CodingBlurb;
