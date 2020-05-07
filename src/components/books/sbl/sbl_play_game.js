import React from 'react';
import { Link } from 'react-router-dom';

const SBLPlayGame = () => (
	<div className='tile is-parent'>
		<div className='tile is-child message is-light has-text-centered'>
			<div className='content'>
				<div className='message-header has-text-centered'>
					<p className='' style={{ width: '100%' }}>
						...OR PLAY THE FREE GAME
					</p>
				</div>
				<div className='message-body'>
					<div className='content has-text-centered'>
						<span>
							Build a factory to supply the Shop Before Life with
							magical traits in a{' '}
							<strong>fun, free browser game</strong>.
							<p>
								<Link
									to='/complex'
									style={{
										textDecoration: 'none'
									}}>
									<span className='button is-success is-rounded'>
										Play now
									</span>
								</Link>
							</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
);
export default SBLPlayGame;
