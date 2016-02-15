(function(){
    'use strict';

    angular
        .module('fomTest')
        .controller('fomTestController', fomTestController);

        function fomTestController($scope, ngDialog, langService){
            
            $scope.langText = langService;
            
            $scope.clickToOpen = function () {
                ngDialog.open({ template: 'app/views/factOrMyth/fomTest/popUp.html' });
            };
            
//            $scope.clickToOpen();
            
//            $scope.reloadQuestions = function(){
//                $scope.langText.length = 0;
//                $scope.langText = langService;
//            }


            
        }
        
    fomTestController.$inject = ['$scope', 'ngDialog', 'langService'];
       
})();