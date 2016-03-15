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
            controller: 'moonMissionsControler as mm'
        }).when('/factMyth/compares', {
            templateUrl: 'app/views/factOrMyth/fomTest/fomTest.html',
            controller: "fomTestController"
        }).when('/factMyth/dragGame', {
            templateUrl: 'app/views/factOrMyth/dragTop/dragGame.html',
            controller: 'dragTopController as dt'
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