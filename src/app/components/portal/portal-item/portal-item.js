(function() {
	'use strict';
	
	var app = angular.module('app');
	
	app.component('portalItem', {
        bindings: {
            'uiSref': '@',
			'itemIcon': '@',
			'itemName': '@'
        },
		templateUrl: 'app/components/portal/portal-item/portal-item.html',
		controller: ['$state', function($state) {
			var self = this;

            self.$onInit = function () {
				
            };
		}]
		});
})();
