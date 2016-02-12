(function(){
    'use strict';

    angular
        .module('spaceHistory')
        .controller('PopupController', PopupController);

        function PopupController($scope, name, langService, historyObj){
            var tempArr = [];
            console.log(historyObj);
          
            if(typeof historyObj === "undefined" || historyObj === "english"){
                tempArr = langService.data.spaceHistory.spaceObjects;
                console.log("trapijju");
            } else {
                tempArr = langService.data.spaceHistory.latvianSpaceObjects;
            }
            
            angular.forEach(tempArr, function(value, key) {
                if(value.objectTitle == name){
                    $scope.objName = value.objectTitle;
                    $scope.objText = value.objectText;
                    $scope.imagePath = value.objImgPath;
                }
              });
        }
        
    PopupController.$inject = ['$scope', 'name', 'langService', 'historyObj'];
       
})();