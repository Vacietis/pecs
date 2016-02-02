(function(){
    'use strict';

    angular
        .module('mainApp')
        .run(startRun);

    function startRun($rootScope, $location, $http){
        $rootScope.defaultLanguage = 'lv';
        var history = [];

        $rootScope.$on('$routeChangeSuccess', function() {
            history.push($location.$$path);
        });

        $rootScope.back = function () {
            var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
            $location.path(prevUrl);
        };

        $rootScope.home = function () {
            history.length = 0;
            $location.path("/");
        };

        $rootScope.stendi = [];
        $http.get('lang/'+$rootScope.defaultLanguage+'.json').then(function(response) {
            $rootScope.stendi = response.data.stendi;
        });

        $rootScope.lang = function (language) {
            $http.get('lang/'+language+'.json').then(function(response) {
                $rootScope.stendi = response.data.stendi;
            });
        };

        $rootScope.languages = [];
        $http.get('app/core/config.json').then(function(response) {
            $rootScope.languages = response.data.languages;
        });
    }
    
    startRun.$inject = ['$rootScope', '$location', '$http'];
    
})();