'use strict';
  
var app = angular.module('app');

app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/login');

		$stateProvider.state('login', {
			url: '/login',
			template: '<login></login>'
		});
	}
]);
