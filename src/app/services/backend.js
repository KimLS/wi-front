'use strict';

var app = angular.module('app');

app.service('backend', ['appConfig', '$timeout', function(appConfig, $timeout) {
    console.log('Setup websocket for: ' + appConfig.config.api_url);
    var self = this;

    function tryConnect() {
        self.socket = new WebSocket(appConfig.config.ws_api_url);

        self.socket.addEventListener('open', function (event) {
            self.connected = true;
        });

        self.socket.addEventListener('close', function (event) {
            self.connected = false;

            $timeout(function() {
                tryConnect();
            }, 3000);
        });

        self.socket.addEventListener('message', function (event) {
        });
    }

    tryConnect();
}]);