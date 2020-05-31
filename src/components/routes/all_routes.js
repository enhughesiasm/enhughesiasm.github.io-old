import { lazy } from 'react';

const Home = lazy(() => import('../home/home'));
const AnxietyPage = lazy(() => import('../anxiety/anxiety'));
const Books = lazy(() => import('../books/books'));
const WoCPage = lazy(() => import('../books/woc/woc_page'));
const ShopBeforeLife = lazy(() => import('../books/sbl/shop_before_life'));
const Speaking = lazy(() => import('../speaking/speaking'));
const Articles = lazy(() => import('../home/articles'));
const Contact = lazy(() => import('../contact/contact'));
const ComedyWriting = lazy(() => import('../comedy_writing/comedy_writing'));
const OccasionalEmailExperience = lazy(() =>
	import('../oee/occasional_email_experience')
);
const Interactive = lazy(() => import('../interactive/interactive'));
const Support = lazy(() => import('../support/support'));
const ConfirmSignup = lazy(() => import('../oee/confirm_signup'));
const SignupConfirmed = lazy(() => import('../oee/signup_confirmed'));
const Privacy = lazy(() => import('../privacy/privacy'));
const NowPage = lazy(() => import('../now/now_page'));

// import Home from '../home/home';
// import AnxietyPage from '../anxiety/anxiety';
// import Books from '../books/books';
// import WoCPage from '../books/woc/woc_page';
// import ShopBeforeLife from '../books/sbl/shop_before_life';
// import Speaking from '../speaking/speaking';
// import Articles from '../home/articles';
// import Contact from '../contact/contact';
// import ComedyWriting from '../comedy_writing/comedy_writing';
// import OccasionalEmailExperience from '../oee/occasional_email_experience';
// import Interactive from '../interactive/interactive';
// import Support from '../support/support';
// import ConfirmSignup from '../oee/confirm_signup';
// import SignupConfirmed from '../oee/signup_confirmed';
// import Privacy from '../privacy/privacy';
// import NowPage from '../now/now_page';

// when adding a new route, don't forget to add the new path at all_paths for the sitemap generator
// (it blows up if you try and import the components at all, so can't use the same data structure
// so some duplication is sadly necessary)

const allRoutes = [
	{
		exact: true,
		path: '/',
		canonical: '/',
		name: 'home',
		component: Home,
		layoutType: 'home',
	},
	{
		path: '/anxiety',
		canonical: '/anxiety/',
		component: AnxietyPage,
		layoutType: 'main',
	},
	{
		path: '/woc',
		canonical: '/walking-on-custard/',
		component: WoCPage,
		layoutType: 'main',
	},
	{
		path: '/walking-on-custard',
		canonical: '/walking-on-custard/',
		component: WoCPage,
		layoutType: 'main',
	},
	{
		path: '/books',
		canonical: '/books/',
		component: Books,
		layoutType: 'main',
	},
	{
		path: '/shop-before-life',
		canonical: '/shop-before-life/',
		component: ShopBeforeLife,
		layoutType: 'main',
	},
	{
		path: '/sbl',
		canonical: '/shop-before-life/',
		component: ShopBeforeLife,
		layoutType: 'main',
	},
	{
		path: '/articles',
		canonical: '/articles/',
		component: Articles,
		layoutType: 'main',
	},
	{
		path: '/speaking',
		canonical: '/speaking/',
		component: Speaking,
		layoutType: 'main',
	},
	{
		path: '/humour-consultant',
		canonical: '/humour-consultant/',
		component: ComedyWriting,
		layoutType: 'main',
	},
	{
		path: '/comedy-writing',
		canonical: '/humour-consultant/',
		component: ComedyWriting,
		layoutType: 'main',
	},
	{
		path: '/occasional-email-experience',
		canonical: '/occasional-email-experience/',
		component: OccasionalEmailExperience,
		layoutType: 'main',
	},
	{
		path: '/mailing',
		canonical: '/occasional-email-experience/',
		component: OccasionalEmailExperience,
		layoutType: 'main',
	},
	{
		path: '/interactive',
		canonical: '/interactive/',
		component: Interactive,
		layoutType: 'main',
	},
	{
		path: '/contact',
		canonical: '/contact/',
		component: Contact,
		layoutType: 'main',
	},
	{
		path: '/support',
		canonical: '/support/',
		component: Support,
		layoutType: 'main',
	},
	{
		path: '/privacy',
		canonical: '/privacy/',
		component: Privacy,
		layoutType: 'main',
	},
	{
		path: '/now',
		canonical: '/now/',
		component: NowPage,
		layoutType: 'main',
	},
	{
		path: '/confirm-signup',
		canonical: '/confirm-signup/',
		component: ConfirmSignup,
		layoutType: 'main',
	},
	{
		path: '/signup-confirmed',
		canonical: '/signup-confirmed/',
		component: SignupConfirmed,
		layoutType: 'main',
	},
];

export default allRoutes;
