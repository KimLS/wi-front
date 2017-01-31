'use strict';

import './zone-status.scss';
import t from './zone-status.html';

var app = angular.module('app');

app.component('zoneStatus', {
	template: t,
	controller: ['$state', function($state) {
		var self = this;

        self.$onInit = function () {
        };
	}]
});
