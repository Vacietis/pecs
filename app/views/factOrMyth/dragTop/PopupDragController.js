(function(){
    'use strict';

    angular
        .module('dragTop')
        .controller('PopupDragController', PopupDragController);

        function PopupDragController($scope, isShown, langService){
//            var tempArr = [];
            console.log("isShown: "+isShown);
          
            $scope.dragPopTitle = langService.data.factOrMyth.dragGame.title;
            $scope.dragPopText = langService.data.factOrMyth.dragGame.popupText;
            $scope.isContinueButtonVisible = isShown;
            $scope.continueButton = langService.data.factOrMyth.dragGame.continue;
                
//            angular.forEach(tempArr, function(value, key) {
//                if(value.objectTitle == name){
//                    $scope.objName = value.objectTitle;
//                    $scope.objText = value.objectText;
//                    $scope.imagePath = value.objImgPath;
//                }
//              });
        }
        
    PopupDragController.$inject = ['$scope', 'isShown', 'langService'];
       
})();