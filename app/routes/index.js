/**
 * Main index.js module (routing)
 */

angular
	.module('routes', [])
	.controller('home', require('./controllers/home'))
	.config(function($stateProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				template: require('./views/home'),
				controller: 'home'
			})
	})