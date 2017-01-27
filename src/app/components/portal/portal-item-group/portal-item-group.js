(function() {
	'use strict';
	
	var app = angular.module('app');
	
	app.component('portalItemGroup', {
        bindings: {
            'groupTitle': '@',
            'groupIcon': '@'
        },
        transclude: true,
		templateUrl: 'app/components/portal/portal-item-group/portal-item-group.html',
		controller: ['$state', function($state) {
			var self = this;
			self.toggle = toggle;

			function toggle() {
				self.collapsed = !self.collapsed;
			}

            self.$onInit = function () {
				self.collapsed = false;
            };
		}]
		});
})();
