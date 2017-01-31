'use strict';

import './server-config-control.scss';
import t from './server-config-control.html';

var app = angular.module('app');

app.component('serverConfigControl', {
    bindings: {
        key: '@'
    },
	template: t,
	controller: ['$state', '$interval', 'appConfig', '$http', function($state, $interval, appConfig, $http) {
		var self = this;
		self.value = '';

		function checkValue() {
			var data = { params: [ self.key ] };
			$http.post(appConfig.config.api_url + '/api/eqw/getconfig', data)
                .then(function(response) {
					//We're connected to the backend 
					//but backend isn't connected to world
					if(response.data.status === 'ENCONNECTED') {
						self.value = '';
					} else { //both connected
						self.value = response.data.response;
					}
                }, function(response) {
					//Some sort of error or not connected at all
                    self.value = '';
                });
		}

        self.$onInit = function () {
			checkValue();
			self.stop = $interval(checkValue, 10000);
        };

		self.$onDestroy = function () {
			$interval.cancel(self.stop);
		};
	}]
});
