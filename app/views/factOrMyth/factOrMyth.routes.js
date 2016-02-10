(function(){
    'use strict';

    angular
        .module('factOrMyth')
        .config(config);

    function config($routeProvider){
        
        $routeProvider.when('/factMyth/quiz', {
            templateUrl: 'app/views/factOrMyth/fomTest/fomTest.html',
            controller: "fomTestController"
        }).when('/factMyth/missions', {
            templateUrl: 'app/views/factOrMyth/moonMissions/missions.html',
        }).when('/factMyth/compares', {
            templateUrl: 'app/views/factOrMyth/compareMoonEarth/compares.html',
        }).when('/factMyth/dragGame', {
            templateUrl: 'app/views/factOrMyth/dragTop/dragGame.html',
            controller: 'dragTopController'
        }).when('/factMyth/otherScience', {
            templateUrl: 'app/views/factOrMyth/otherScience/otherScience.html',
            controller: 'otherScienceController'
        }).when('/factMyth/pictureGallery', {
            templateUrl: 'app/views/factOrMyth/picGallery/pictureGallery.html',
            controller:'picGalleryController'
        });
                
    }

    config.$inject = ['$routeProvider'];
})();