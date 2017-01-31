'use strict';

import './portal-item-group/portal-item-group.js';
import './portal-item/portal-item.js';
import './landing/landing.js';
import './server-status/server-status.js';
import './launcher-status/launcher-status.js';
import './zone-status/zone-status.js';
import './player-status/player-status.js';
import './server-config/server-config.js';
import './portal.scss';
import t from './portal.html';

var app = angular.module('app');

app.component('portal', {
	template: t,
	controller: ['$state', '$mdDialog', 'loginState', function($state, $mdDialog, loginState) {
		var self = this;
		self.openMenu = openMenu;
		self.logout = logout;
		self.getUserName = getUserName;

		function openMenu($mdOpenMenu, ev) {
			self.originatorEv = ev;
			$mdOpenMenu(ev);
		};

		function logout(ev) {
			var confirm = $mdDialog.confirm()
				.title('Logout')
				.textContent('Are you sure you wish to logout?')
				.ariaLabel('Logout')
				.targetEvent(ev)
				.ok('Logout')
				.cancel('Cancel');

			$mdDialog.show(confirm).then(function() {
				loginState.logout();
				$state.go('login');
			}, function() {

			});
		}

		function getUserName() {
			return loginState.username;
		};

        self.$onInit = function () {
			if(!loginState.isLoggedIn()) {
                $state.go('login');
            };
        };
	}]
});
