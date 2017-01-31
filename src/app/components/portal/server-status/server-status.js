'use strict';

import './server-status.scss';
import t from './server-status.html';

var app = angular.module('app');

app.component('serverStatus', {
	template: t,
	controller: ['$state', function($state) {
		var self = this;

        self.$onInit = function () {
        };
	}]
});
