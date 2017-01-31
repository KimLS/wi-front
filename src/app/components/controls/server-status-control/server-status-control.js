'use strict';

import './server-status-control.scss';
import t from './server-status-control.html';

var app = angular.module('app');

app.component('serverStatusControl', {
	template: t,
	controller: ['$state', '$interval', 'appConfig', '$http', function($state, $interval, appConfig, $http) {
		var self = this;
		self.connected = false;
		self.locked = false;
		self.isDown = isDown;
		self.isLocked = isLocked;
		self.isUp = isUp;

		function isDown() {
			if(self.connected) {
				return false;
			}

			return true;
		}

		function isLocked() {
			if(self.locked) {
				return true;
			}

			return false;
		}

		function isUp() {
			if(!isDown() && !isLocked()) {
				return true;
			}

			return false;
		}

		function checkStatus() {
			$http.post(appConfig.config.api_url + '/api/eqw/islocked')
                .then(function(response) {
					//We're connected to the backend 
					//but backend isn't connected to world
					if(response.data.status === 'ENCONNECTED') {
						self.connected = false;
						self.locked = false;
					} else { //both connected
						self.connected = true;
						self.locked = response.data.response;
					}
                }, function(response) {
					//Some sort of error or not connected at all
                    self.connected = false;
					self.locked = false;
                });
		}

        self.$onInit = function () {
			checkStatus();
			self.stop = $interval(checkStatus, 3000);
        };

		self.$onDestroy = function () {
			$interval.cancel(self.stop);
		};
	}]
});
