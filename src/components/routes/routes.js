import React, { useEffect } from 'react';
import { Switch, useLocation } from 'react-router-dom';

/*

	WHEN UPDATING, ALSO UPDATED routes_sitemap.js
		(YES THIS IS AWFUL BUT I HAVE SPENT HOURS TRYING TO GENERATE A SIMPLE SITEMAP AND THIS WORKS SO
			I NO LONGER CARE ABOUT THE MORALITY OF DUPLICATING THIS RARELY-ALTERED DATA. LET'S REVISIT
			THIS WHEN I AM LESS FURIOUS WITH THE CRAPPINESS OF THIS SOLUTION, THANKS.)
*/

// route types
import HomeRoute from './home_route';
import MainRoute from './main_route';
import ComplexRoute from './complex_route';

import Home from '../home/home';
import NotFound from '../not_found';
import AnxietyPage from '../anxiety/anxiety';
import Books from '../books/books';
import WoCPage from '../books/woc/woc_page';
import ShopBeforeLife from '../books/sbl/shop_before_life';
import Speaking from '../speaking/speaking';
import Articles from '../home/articles';
import Contact from '../contact/contact';
import ComedyWriting from '../comedy_writing/comedy_writing';
import OccasionalEmailExperience from '../oee/occasional_email_experience';
import Interactive from '../interactive/interactive';
import Support from '../support/support';
import ConfirmSignup from '../oee/confirm_signup';
import SignupConfirmed from '../oee/signup_confirmed';
import Privacy from '../privacy/privacy';
import NowPage from '../now/now_page';

function usePageViews(location) {
	console.log(location);
	useEffect(() => {
		if (window.gtag) {
			// send navigation event to analytics, as we've navigated somewhere
			window.gtag('config', 'UA-149409126-1', {
				anonymize_ip: true,
				page_path: location.pathname,
			}); // anonymize all users IP addresses
		}
	}, [location]);
}

const Routes = () => {
	let location = useLocation();
	usePageViews(location);

	return (
		<Switch>
			<HomeRoute exact path='/' component={Home} />

			<MainRoute path='/anxiety' component={AnxietyPage} />

			<MainRoute path='/woc' component={WoCPage} />
			<MainRoute path='/walking-on-custard' component={WoCPage} />

			<MainRoute path='/books' component={Books} />
			<MainRoute path='/shop-before-life' component={ShopBeforeLife} />
			<MainRoute path='/sbl' component={ShopBeforeLife} />
			<MainRoute path='/articles' component={Articles} />

			<MainRoute path='/speaking' component={Speaking} />
			<MainRoute path='/humour-consultant' component={ComedyWriting} />
			<MainRoute path='/comedy-writing' component={ComedyWriting} />

			<MainRoute
				path='/occasional-email-experience'
				component={OccasionalEmailExperience}
			/>
			<MainRoute path='/mailing' component={OccasionalEmailExperience} />

			<MainRoute path='/interactive' component={Interactive} />

			<ComplexRoute path='/complex' />

			<MainRoute path='/contact' component={Contact} />
			<MainRoute path='/support' component={Support} />
			<MainRoute path='/privacy' component={Privacy} />

			<MainRoute path='/now' component={NowPage} />

			<MainRoute path='/confirm-signup' component={ConfirmSignup} />
			<MainRoute path='/signup-confirmed' component={SignupConfirmed} />

			<MainRoute component={NotFound} />
		</Switch>
	);
};

export default Routes;
