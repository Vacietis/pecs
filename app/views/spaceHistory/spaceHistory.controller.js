(function(){
    'use strict';

    angular
        .module('spaceHistory')
        .controller('spaceHistoryController', spaceHistoryController);

        function spaceHistoryController($scope, ngDialog){
            
//            $scope.stendi = [];
//            $http.get('lang/lv.json').then(function(response) {
//                $scope.stendi = response.data.stendi;
//            });
            $scope.language = 'lv';

            $scope.historyObejcts = [];
            
            
            for(var i=0; i<10; i++){
                $scope.historyObejcts.push({'titles':'item'+i})
            }
            
            $scope.clickToOpenHistory = function () {
                ngDialog.open({ template: 'app/views/factOrMyth/fomTest/popUp.html' });
            };
            
            
            
//            $scope.fomViews = [];
//            $scope.lang = function (language) {
//                $http.get('lang/'+language+'.json').then(function(response) {
//                    $scope.stendi = response.data.stendi;
////                    $scope.fomViews = response.data.factOrMyth.fomViews;
//                });
//            };
        }
        
    spaceHistoryController.$inject = ['$scope', 'ngDialog'];
       
})();