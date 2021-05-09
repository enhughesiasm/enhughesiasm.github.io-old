import React from 'react';
import LinkButton from './../shared/link_button';
import TopTitle from '../shared/top_title';
import { Link } from 'react-router-dom';

const CodingPage = () => (
	<div className='content'>
		<TopTitle title='Software Developer' />
		<p>
			Neil has been developing software since the halcyon days of the
			1980s, when he would excitedly type in programs from monthly
			magazines into a <em>ZX Spectrum +2</em>
		</p>
		<p className='mt-3'>
			These days he mostly works on full stack web development:
		</p>
		<ul>
			<li>React</li>
			<li>TypeScript</li>
			<li>Node.js</li>
			<li>C# / ASP.NET</li>
			<li>Postgres / SQL Server</li>
		</ul>
		<h3 className='subtitle'>Examples</h3>
		<p>
			Check out{' '}
			<a className='has-text-weight-bold' href='/complex'>
				this game he made
			</a>
			, or{' '}
			<a className='has-text-weight-bold' href='https://ourpomona.org'>
				this cool site
			</a>{' '}
			which tracks apple trees worldwide
		</p>
		<div className='has-text-centered mt-6'>
			<LinkButton to='/contact' className='button is-danger is-rounded'>
				need a developer? inquire here
			</LinkButton>
		</div>
	</div>
);

export default CodingPage;
