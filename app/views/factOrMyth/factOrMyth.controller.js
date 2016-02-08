(function(){
    'use strict';

    angular
        .module('factOrMyth')
        .controller('factOrMythController', factOrMythController);

        function factOrMythController($scope, langService){

            $scope.fomView = langService;

        }
        
    factOrMythController.$inject = ['$scope', 'langService'];
       
})();