(function(){
    'use strict';

    angular
        .module('videoExhibit')
        .controller('videoPopupController', videoPopupController);

        function videoPopupController($scope, name, langService){
            
            $scope.objName = name;
            
            var tempArr = langService.data.videoExhibit.videoList1;
            
            angular.forEach(tempArr, function(value, key) {
                if(value.videoTitle === name){
                    $scope.videoSrc = value.video;
                    console.log(value.video);
                }
                //console.log(value.video);
                console.log(value.video);
              });
            
            
            
            //if(langService.data.spaceHistory.spaceObjects.objectTitle === name){
//                console.log(langService.data.spaceHistory.spaceObjects.objectTitle);
             
            
        }
        
    videoPopupController.$inject = ['$scope', 'name', 'langService'];
       
})();