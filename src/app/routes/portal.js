'use strict';
  
var app = angular.module('app');

app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/portal', '/portal/landing')

        $stateProvider.state('portal', {
			url: '/portal',
			template: '<portal></portal>'
		});

        $stateProvider.state('portal.landing', {
			url: '/landing',
			template: '<landing></landing>'
		});

		$stateProvider.state('portal.server-status', {
			url: '/server-status',
			template: '<server-status></server-status>'
		});

        $stateProvider.state('portal.launcher-status', {
			url: '/launcher-status',
			template: '<launcher-status></launcher-status>'
		});

        $stateProvider.state('portal.zone-status', {
			url: '/zone-status',
			template: '<zone-status></zone-status>'
		});

		$stateProvider.state('portal.player-status', {
			url: '/player-status',
			template: '<player-status></player-status>'
		});

		$stateProvider.state('portal.server-config', {
			url: '/server-config',
			template: '<server-config></server-config>'
		});
	}
]);
