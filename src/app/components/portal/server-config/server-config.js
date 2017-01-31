'use strict';

import './server-config.scss';
import t from './server-config.html';

var app = angular.module('app');

app.component('serverConfig', {
	template: t,
	controller: ['$state', function($state) {
		var self = this;

        self.$onInit = function () {
        };
	}]
});
