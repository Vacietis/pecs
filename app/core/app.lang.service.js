(function(){
    'use strict';

    angular
        .module('mainApp')
        .factory('langService', langService);

    function langService($http){
        
        var defaultLanguage = 'eng';
        
        var serviceObj = {
            data : {},
            changeLanguage : change,
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
    
    langService.$inject = ['$http'];
})();
