(function(){
    'use strict';

    angular
        .module('videoExhibit')
        .config(config);

    function config($routeProvider){
        
        $routeProvider.when('/vid/sun', {
            templateUrl: 'app/views/videoExhibit/video.template.html',
            controller : "videoExhibitController",
            paramExample: 'sun'
        }).when('/vid/moon', {
            templateUrl: 'app/views/videoExhibit/video.template.html',
            controller : "videoExhibitController",
            paramExample: 'moon'
        });
                
    }

    config.$inject = ['$routeProvider'];
})();