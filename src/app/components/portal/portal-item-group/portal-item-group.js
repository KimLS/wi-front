'use strict';

import './portal-item-group.scss';
import t from './portal-item-group.html';

var app = angular.module('app');

app.component('portalItemGroup', {
    bindings: {
        'groupTitle': '@',
        'groupIcon': '@'
    },
    transclude: true,
	template: t,
	controller: ['$state', function($state) {
		var self = this;
		self.toggle = toggle;

		function toggle() {
			self.collapsed = !self.collapsed;
		}

        self.$onInit = function () {
			self.collapsed = false;
        };
	}]
});
