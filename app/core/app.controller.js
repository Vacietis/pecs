(function(){
    'use strict';

    angular
        .module('mainApp')
        .controller('mainController', mainController);

        function mainController($scope, $http){
            
//            $scope.stendi = [];
//            $http.get('lang/lv.json').then(function(response) {
//                $scope.stendi = response.data.stendi;
//            });
            $scope.language = 'lv';

            $scope.stendi = [];
//            $scope.fomViews = [];
            $scope.lang = function (language) {
                $http.get('lang/'+language+'.json').then(function(response) {
                    $scope.stendi = response.data.stendi;
//                    $scope.fomViews = response.data.factOrMyth.fomViews;
                });
            };
        }
        
    mainController.$inject = ['$scope', '$http'];
       
})();