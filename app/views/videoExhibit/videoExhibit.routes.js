(function(){
    'use strict';

    angular
        .module('videoExhibit')
        .config(config);

    function config($routeProvider){
        
        $routeProvider.when('/vid/sun', {
            templateUrl: 'app/views/videoExhibit/templates/sun.template.html',
            controller : "videoExhibitController"
        }).when('/vid/moon', {
            templateUrl: 'app/views/videoExhibit/templates/moon.template.html',
        });
                
    }

    config.$inject = ['$routeProvider'];
})();