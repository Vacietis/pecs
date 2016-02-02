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
        }).otherwise({
            redirectTo : '/'
        });
                
    }

    config.$inject = ['$routeProvider'];
})();