(function(){
    'use strict';

    angular
        .module('mainApp')
        .config(config);

    function config($routeProvider){
        
        $routeProvider.when('/', {
            templateUrl: 'app/views/homePage.html'
        }).when('/factMyth', {
            templateUrl: 'app/views/factOrMyth/factOrMythView.html',
            controller : 'factOrMythController'
            //noradit servisam laiieladejas pec serivsa
        }).when('/hist', {
            templateUrl: 'app/views/spaceHistory/spaceHistory.html',
            controller : 'spaceHistoryController'
        }).when('/vid', {
            templateUrl: 'app/views/videoExhibit/videoExhibit.html',
            controller : 'videoExhibitController'
        }).otherwise({
            redirectTo : '/'
        });
                
    }

    config.$inject = ['$routeProvider'];
})();