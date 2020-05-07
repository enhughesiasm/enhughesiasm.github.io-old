import React from 'react';
import HelmetContainer from '../shared/helmet_container';
import TopTitle from '../shared/top_title';
import {Link} from 'react-router-dom';
import moment from 'moment';

const NowPage = () => {
	const monthName = moment().startOf('month').format('MMMM');
	var currentYear = new Date().getFullYear();

	return(
		<div>
			<HelmetContainer page="now"/>
			<TopTitle title={'now—' + monthName + ' ' + currentYear}
				subtitle="what is Neil Hughes doing right now?"
				color="is-primary"
				size="is-medium"	 />
			<h2 className="subtitle notification is-success">In {monthName}, Neil is...</h2>
			<br/>
			<ol className="list is-hoverable has-text-centered">
				<li className="list-item box">Working on the initial idea for two new book projects, codenamed &apos;E&apos;, and &apos;PL2&apos;.</li>
				<li className="list-item box">Designing and building an interactive mental health game thingy.</li>
				<li className="list-item box">Still <Link to="/speaking">speaking</Link> at schools and conferences about mental health.</li>
			</ol>
		</div>
	);};

export default NowPage;