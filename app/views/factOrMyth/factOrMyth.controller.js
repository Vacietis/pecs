(function(){
    'use strict';

    angular
        .module('factOrMyth')
        .controller('factOrMythController', factOrMythController);

        function factOrMythController($scope, $http){
           
            $scope.language = 'lv';

            $scope.fomViews = [];
            
            $http.get('lang/'+$scope.language+'.json').then(function(response) {
                $scope.fomViews = response.data.factOrMyth.fomViews;
            });
            
        }
        
    factOrMythController.$inject = ['$scope', '$http'];
       
})();