(function(){
    'use strict';

    angular
        .module('videoExhibit')
        .config(config);

    function config($routeProvider){
        
        $routeProvider.when('/vid/sun', {
            templateUrl: 'app/videoExhibit/templates/sun.template.html',
        }).when('/vid/moon', {
            templateUrl: 'app/videoExhibit/templates/moon.template.html',
        });
                
    }

    config.$inject = ['$routeProvider'];
})();