'use strict';

import './portal-item-group/portal-item-group.js';
import './portal-item/portal-item.js';
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

			self.serverStatusIcon = require('../../../assets/icons/dev/svg/computer.svg');
			self.launcherStatusIcon = require('../../../assets/icons/dev/svg/hierarchy-structure.svg');
			self.zoneStatusIcon = require('../../../assets/icons/dev/svg/computer-1.svg');
			self.configureIcon = require('../../../assets/icons/dev/svg/cogwheel.svg');
        };
	}]
});
