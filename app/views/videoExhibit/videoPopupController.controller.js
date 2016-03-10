(function(){
    'use strict';

    angular
        .module('videoExhibit')
        .controller('videoPopupController', videoPopupController);

        function videoPopupController($scope, name, videoWidth, videoHeight, videoDuration, langService, resize){
            
            var tempArr = langService.data.videoExhibit.videoParts;
            
            var vWidth = videoWidth;
            var vHeight = videoHeight;
            
            resize.checkIfFitsInWindow(vWidth, vHeight);
            
            $scope.widthx = resize.objectsResizedWidth;
            $scope.heightx = resize.objectsResizedHeight;
            
            $scope.videoDur = videoDuration;
            
            angular.forEach(tempArr, function(value, key) {
                    
                    angular.forEach(value.videoList, function(value, key) {
                        
                        if(value.videoTitle === name){
                            $scope.videoSrc = value.video;
                        }
                
                    });
                    
            });
            
            
            
            //if(langService.data.spaceHistory.spaceObjects.objectTitle === name){
//                console.log(langService.data.spaceHistory.spaceObjects.objectTitle);
             
            
        }
        
    videoPopupController.$inject = ['$scope', 'name', 'videoWidth', 'videoHeight', 'videoDuration', 'langService', 'resize'];
       
})();