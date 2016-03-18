(function(){
    'use strict';

    angular
        .module('mainApp')
        .factory('configuration', configuration);

    function configuration($http){
        
        
        console.log("from configuration ");
        var languageArray = [];
        var debugLatvianHistory;
        var defaultLanguage;
        
        var configuration = {
            languageArray: languageArray,
            getDefaultLanguage: getDefaultLanguage,
            debugLatvianHistory: debugLatvianHistory,
            defaultLanguage: defaultLanguage
        };
        
        function getDefaultLanguage(){
            $http.get('app/core/config.json').then(function(response) {
                configuration.languageArray = response.data.languages;
                configuration.defaultLanguage = response.data.exhibitionLanguage;
                configuration.debugLatvianHistory = response.data.latvianSpaceHistory;
                console.log("$get done all data");
            });
        }
        
        getDefaultLanguage();
        
        return configuration;
        
    }
    
    configuration.$inject = ['$http'];
})();
