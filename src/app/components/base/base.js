'use strict';

import './base.scss';
import t from './base.html';

var app = angular.module('app');

app.component('base', {
	template: t,
	controller: ['$state', function($state) {
		var self = this;

        self.$onInit = function () {
        };
	}]
});
