'use strict';

import './portal-item.scss';
import t from './portal-item.html';

var app = angular.module('app');

app.component('portalItem', {
    bindings: {
        'uiSref': '@',
		'itemIcon': '<',
		'itemName': '@'
    },
	template: t,
	controller: ['$state', function($state) {
		var self = this;

        self.$onInit = function () {
        };
	}]
});
