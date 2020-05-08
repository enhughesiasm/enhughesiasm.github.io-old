require('@babel/register')({
	presets: ['@babel/preset-env', '@babel/preset-react'],
});

const Sitemap = require('react-router-sitemap').default;

const filterConfig = {
	isValid: false,
	rules: [/\*/],
};

const paramsConfig = {};

const Routes = require('./src/components/routes/routes_sitemap').default;

new Sitemap(Routes)
	.filterPaths(filterConfig)
	.applyParams(paramsConfig)
	.build('https://enhughesiasm.com', { limitCountPaths: 5000 })
	.save('./public/sitemap.xml', 'static');

console.log('Sitemap generation code completed.');
