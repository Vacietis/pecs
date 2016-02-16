(function(){
    'use strict';

    angular
        .module('fomTest')
        .controller('testPopupController', testPopupController);

        function testPopupController($rootScope, checkAnswer, score){
            
            console.log("bra bra bra: "+checkAnswer + "scroe: "+score);
            
            $rootScope.check = checkAnswer;
            
            $rootScope.score = score;
            
//            $scope.langText = langService;
            
//            $scope.clickToOpen = function () {
//                ngDialog.open({ template: 'app/views/factOrMyth/fomTest/popUp.html' });
//            };
            
//            $scope.clickToOpen();
        }
        
    testPopupController.$inject = ['$rootScope', 'checkAnswer', 'score'];
       
})();