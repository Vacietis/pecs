(function(){
    'use strict';

    angular
        .module('mainApp')
        .config(startConfig);

    function startConfig(messageProvider){
        
        messageProvider.setText("Hello fgfgnfg world!");
        
        
//        console.log("config");
//        
//        $rootScope.languages = [];
//        $http.get('app/core/config.json').then(function(response) {
//            $rootScope.languages = response.data.languages;
//            $rootScope.debugLatvianHistory = response.data.latvianSpaceHistory;
//        });
//        
//        

//seit vajag factory

//        config.setUpLanguages();
//        config.setVersion();

            
    }
    
//    startConfig.$inject = ['helloWorldProvider'];
    
})();