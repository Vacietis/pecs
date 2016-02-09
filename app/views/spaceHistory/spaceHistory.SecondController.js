(function(){
    'use strict';

    angular
        .module('spaceHistory')
        .controller('SomeController', SomeController);

        function SomeController($scope, ngDialog, langService){
            
            $scope.langText = langService;
            
        }
        
    SomeController.$inject = ['$scope', 'ngDialog', 'langService'];
       
})();