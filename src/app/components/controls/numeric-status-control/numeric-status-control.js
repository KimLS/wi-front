'use strict';

import './numeric-status-control.scss';
import t from './numeric-status-control.html';

var app = angular.module('app');

app.component('numericStatusControl', {
    bindings: {
        path: '@'
    },
	template: t,
	controller: ['$state', '$interval', 'appConfig', '$http', function($state, $interval, appConfig, $http) {
		var self = this;
		self.count = 0;

		function checkValue() {
			$http.post(appConfig.config.api_url + self.path)
                .then(function(response) {
					//We're connected to the backend 
					//but backend isn't connected to world
					if(response.data.status === 'ENCONNECTED') {
						self.count = 0;
					} else { //both connected
						self.count = response.data.response;
					}
                }, function(response) {
					//Some sort of error or not connected at all
                    self.count = 0;
                });
		}

        self.$onInit = function () {
			checkValue();
			self.stop = $interval(checkValue, 3000);
        };

		self.$onDestroy = function () {
			$interval.cancel(self.stop);
		};
	}]
});
