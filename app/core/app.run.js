(function(){
    'use strict';

    angular
        .module('mainApp')
        .run(startRun);

    function startRun($rootScope, configuration, langService, ngDialog, message, $timeout){
        
   
        $timeout(function(){
           $rootScope.debugLatvianHistory = configuration.debugLatvianHistory;
           $rootScope.lang = langService;

            console.log("$rootScope.debugLatvianHistory "+$rootScope.debugLatvianHistory);
            console.log("$rootScope.lang "+$rootScope.lang);

        }, 2000);
        
        
        console.log("console from provider in conf() "+message.text);
    
        // to prevent inspect element and other stuff
//        document.addEventListener('contextmenu', function(e){
//            e.preventDefault();
//        })
//
        
        $rootScope.closePopup = function(){
            
            ngDialog.close();
            
        }
        
    }
    
    startRun.$inject = ['$rootScope', 'configuration', 'langService', 'ngDialog', 'message', '$timeout'];
    
})();