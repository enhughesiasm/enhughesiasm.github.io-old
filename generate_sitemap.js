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

console.log('\x1b[33m%s\x1b[0m', 'Beginning sitemap.'); // 33 = yellow

new Sitemap(Routes)
	.filterPaths(filterConfig)
	.applyParams(paramsConfig)
	.build('https://enhughesiasm.com', { limitCountPaths: 5000 })
	.save('./public/sitemap.xml', 'static');

console.log('\x1b[32m%s\x1b[0m', 'Sitemap generation code completed.'); // 32 = green
