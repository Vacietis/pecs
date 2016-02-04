(function(){
    'use strict';

    angular
        .module('factOrMyth')
        .config(config);

    function config($routeProvider){
        
        $routeProvider.when('/factMyth/quiz', {
            templateUrl: 'app/views/factOrMyth/fomTest/fomTest.html',
        }).when('/factMyth/missions', {
            templateUrl: 'app/views/factOrMyth/moonMissions/missions.html',
        }).when('/factMyth/compares', {
            templateUrl: 'app/views/factOrMyth/compareMoonEarth/compares.html',
        }).when('/factMyth/dragGame', {
            templateUrl: 'app/views/factOrMyth/dragTop/dragGame.html',
            controller: 'dragTopController'
        }).when('/factMyth/otherSciences', {
            templateUrl: 'app/views/factOrMyth/otherScinces/otherSciences.html',
        }).when('/factMyth/pictureGallery', {
            templateUrl: 'app/views/factOrMyth/picGallery/pictureGallery.html',
        });
                
    }

    config.$inject = ['$routeProvider'];
})();