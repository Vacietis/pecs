(function(){
    'use strict';

    angular
        .module('spaceHistory')
        .controller('PopupController', PopupController);

        function PopupController($scope, name, langService){
            
            var tempArr = langService.data.spaceHistory.spaceObjects;
            
            angular.forEach(tempArr, function(value, key) {
                if(value.objectTitle == name){
                    $scope.objName = value.objectTitle;
                    $scope.objText = value.objectText;
                    $scope.imagePath = value.objImgPath;
                }
              });
        }
        
    PopupController.$inject = ['$scope', 'name', 'langService'];
       
})();