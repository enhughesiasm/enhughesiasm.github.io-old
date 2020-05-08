import React from 'react';
import TopTitle from '../shared/top_title';
import { Link } from 'react-router-dom';
import HelmetContainer from '../shared/helmet_container';

function Interactive() {
	return (
		<div>
			<HelmetContainer page='interactive' />
			<TopTitle
				title='games'
				subtitle=''
				size='is-medium'
				color='is-warning'
			/>
			<div className='content'>
				<ul className='list' style={{ listStyle: 'none' }}>
					<li
						className='list-item has-text-info is-flex'
						style={{ alignItems: 'center' }}>
						<strong>
							<a href='https://enhughesiasm.com/complex'>
								<div className='button is-success'>
									The Supplier&apos;s Complex
								</div>
							</a>
						</strong>
						<span style={{ marginLeft: '1rem' }}>
							Create magical jars of human traits to supply{' '}
							<Link to='/sbl'>The Shop Before Life</Link>
						</span>
					</li>
					{/* <li className="list-item has-text-info  is-flex"  style={{alignItems:'center'}}><strong><a href="http://q.enhughesiasm.com"><div className="button is-success">Q</div></a></strong>
					<span className="" style={{marginLeft:'1rem'}}>An app to make speaking events a little more interesting and competitive
					</span></li> */}
				</ul>
			</div>
		</div>
	);
}

export default Interactive;
