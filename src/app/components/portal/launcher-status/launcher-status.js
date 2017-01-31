'use strict';

import './launcher-status.scss';
import t from './launcher-status.html';

var app = angular.module('app');

app.component('launcherStatus', {
	template: t,
	controller: ['$state', function($state) {
		var self = this;

        self.$onInit = function () {
        };
	}]
});
