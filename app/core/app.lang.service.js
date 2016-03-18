(function(){
    'use strict';

    angular
        .module('mainApp')
        .factory('langService', langService);

    function langService($http, configuration){
        
        var defaultLanguage = configuration.defaultLanguage;
        console.log("defaultLanguage from langService "+configuration.defaultLanguage);
        
        var serviceObj = {
            data : {},
            changeLanguage : change
        }
        
        loadDefaultLanguage();
        
        return serviceObj;
        
        /**
         * language change event
         * @param {type} langCode
         * @returns {undefined}
         */
        function change(langCode){
                
            $http.get('lang/'+langCode+'.json').then(function(response) {
                serviceObj.data = response.data;
            });
            
//            $rootScope.$broadcast('languageIsChanged',{code: langCode});       
  
        }
        
        /**
         * loads the default language data
         * @returns {undefined}
         */
        function loadDefaultLanguage(){
            $http.get('lang/'+defaultLanguage+'.json').then(function(response) {
                serviceObj.data = response.data;
            });  
        }
        
    }
    
    langService.$inject = ['$http', 'configuration'];
})();
