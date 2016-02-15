(function(){
    'use strict';

    angular
        .module('mainApp')
        .provider('RouteData', RouteData);

        function RouteData(){
            
            var settings = {};
            var hookToRootScope = false;

            this.applyConfig = function(newSettings) {
              settings = newSettings;
            };

            this.hookeToRootScope = function(enableRootScopeHook) {
              hookToRootScope = enableRootScopeHook;
            };

            function RouteData() {

              this.set = function(index, value) {
                settings[index] = value;
              };

              this.get = function(index) {
                if(settings.hasOwnProperty(index)) {
                  return settings[index];
                } else {
                  console.log('RouteData: Attempt to access a propery that has not been set');
                }
              };

              this.isHookedToRootSope = function() {
                return hookToRootScope;
              };
            }

            this.$get = function() {
                return new RouteData();
            };
        }
        
    RouteData.$inject = [];
       
})();