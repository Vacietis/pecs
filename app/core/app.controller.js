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
            $scope.lang = function (language) {
                $http.get('lang/'+language+'.json').then(function(response) {
                    $scope.stendi = response.data.stendi;
                });
            };
        }
        
    mainController.$inject = ['$scope', '$http'];
       
})();