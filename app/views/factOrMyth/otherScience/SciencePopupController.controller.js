(function(){
    'use strict';

    angular
        .module('otherScience')
        .controller('sciencePopupController', sciencePopupController);

        function sciencePopupController($scope, name, langService){
            
             $scope.objName = name;
            
            var tempArr = langService.data.factOrMyth.otherScience.otherScienceViews;
            
            console.log("NAME : "+name);
            
            angular.forEach(tempArr, function(value, key) {
                if(value.title === name){
                    $scope.objName = value.title;
                    $scope.objText = value.content.text;
                    $scope.imagePath = value.content.picture;
                    $scope.videoSrc = value.content.video;
                    console.log(value.title);
                }
                console.log(value.title);
              });
            
            
            
            //if(langService.data.spaceHistory.spaceObjects.objectTitle === name){
//                console.log(langService.data.spaceHistory.spaceObjects.objectTitle);
             
            
        }
        
    sciencePopupController.$inject = ['$scope', 'name', 'langService'];
       
})();