(function(){
    'use strict';

    angular
        .module('mainApp')
        .config(config);

    function config($routeProvider){
        
        $routeProvider.when('/', {
            templateUrl: 'app/views/homePage.html',
//            controller : 'mainController'
        }).when('/factMyth', {
            templateUrl: 'app/views/factOrMyth/factOrMythView.html',
            controller : 'factOrMythController'
        }).when('/hist', {
            templateUrl: 'app/views/spaceHistory/spaceHistory.html',
            controller : 'spaceHistoryController'
        }).otherwise({
            redirectTo : '/'
        });
                
    }

    config.$inject = ['$routeProvider'];
})();