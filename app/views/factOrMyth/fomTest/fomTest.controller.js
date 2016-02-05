(function(){
    'use strict';

    angular
        .module('fomTest')
        .controller('fomTestController', fomTestController);

        function fomTestController($scope, ngDialog){
            
//            $scope.stendi = [];
//            $http.get('lang/lv.json').then(function(response) {
//                $scope.stendi = response.data.stendi;
//            });
            $scope.clickToOpen = function () {
                ngDialog.open({ template: 'app/views/factOrMyth/fomTest/popUp.html' });
            };
        }
        
    fomTestController.$inject = ['$scope', 'ngDialog'];
       
})();