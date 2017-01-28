'use strict';
var $ = jQuery = require('jquery');
require('imports-loader?define=>false!datatables.net')(jQuery);

import angular from 'angular';
import 'angular-material';
import 'angular-ui-router';
import 'angular-loading-bar';
import 'angular-animate';
import 'ngstorage';
import 'angular-datatables';
import '../node_modules/angular-material/angular-material.min.css';
import '../node_modules/angular-loading-bar/build/loading-bar.min.css';
import '../node_modules/mdi/css/materialdesignicons.min.css';
import '../node_modules/datatables.net-dt/css/jquery.dataTables.css';
import '../node_modules/angular-datatables/dist/css/angular-datatables.min.css';
import './style.scss'

var app = angular.module('app', ['ngMaterial', 'ui.router', 'angular-loading-bar', 'ngAnimate' ,'ngStorage', 'datatables']);

app.config(['$sceDelegateProvider', 'cfpLoadingBarProvider', '$animateProvider', '$compileProvider', '$localStorageProvider', '$sessionStorageProvider', '$httpProvider', 
    function($sceDelegateProvider, cfpLoadingBarProvider, $animateProvider, $compileProvider, $localStorageProvider, $sessionStorageProvider, $httpProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
			'self'
		]);

        $animateProvider.classNameFilter(/^((?!(fa-spinner|fa-cog|fa-refresh|fa-circle-o-notch)).)*$/);

        $compileProvider.preAssignBindingsEnabled(true);

        $localStorageProvider.setKeyPrefix('eqemu_wi_');
        $sessionStorageProvider.setKeyPrefix('eqemu_wi_');

        $httpProvider.interceptors.push('applyAuthIntercept');
        $httpProvider.interceptors.push('checkAuthIntercept');
    }]);

angular.element(function() {
    angular.bootstrap(document, ['app']);
});

require('./app/app.js');
require('./app/services');
require('./app/routes');
require('./app/components');
require('./app/interceptors');