'use strict';

import './landing.scss';
import t from './landing.html';

var app = angular.module('app');

app.component('landing', {
	template: t,
	controller: ['$state', function($state) {
		var self = this;

        self.$onInit = function () {
            self.serverStatusIcon = require('../../../../assets/icons/dev/svg/computer.svg');
			self.launcherStatusIcon = require('../../../../assets/icons/dev/svg/hierarchy-structure.svg');
			self.zoneStatusIcon = require('../../../../assets/icons/dev/svg/computer-1.svg');
			self.playerStatusIcon = require('../../../../assets/icons/game/svg/game-controller-3.svg');
			self.configureIcon = require('../../../../assets/icons/dev/svg/cogwheel.svg');
        };
	}]
});
