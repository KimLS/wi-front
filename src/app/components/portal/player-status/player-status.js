'use strict';

import './player-status.scss';
import t from './player-status.html';

var app = angular.module('app');

app.component('playerStatus', {
	template: t,
	controller: ['$state', function($state) {
		var self = this;

        self.$onInit = function () {
        };
	}]
});
