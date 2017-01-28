'use strict';

import './app.scss';
import t from './app.html';

var app = angular.module('app');

app.component('appRoot', {
	template: t,
	controller: ['$state', function($state) {
		var self = this;

        this.$onInit = function () {
        };
	}]
});
