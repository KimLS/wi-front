'use strict';

import json from './../../../config.json';
var app = angular.module('app');

app.service('appConfig', function() {
    this.config = json;
});