(function(){
    'use strict';

    angular
        .module('videoExhibit')
        .controller('videoPopupController', videoPopupController);

        function videoPopupController($scope, name, videoWidth, videoHeight, videoDuration, langService){
            
            var tempArr = langService.data.videoExhibit.videoParts;
            
            var windowSize = {
                width: $(window).width(),
                height: $(window).height()
            };
            
            var videoSize = {
                width: videoWidth,
                height: videoHeight
            };
            
            var vWidth = videoSize.width;
            var vHeight = videoSize.height;
            var vRatio = videoSize.width / videoSize.height;
            
        
            if(vHeight >= windowSize.height || vHeight >= windowSize.height && vWidth >= windowSize.width){
                //-200 to controll space between window and picture
                vHeight = (windowSize.height - 200);
                vWidth = vHeight  * vRatio;
                console.log("augstums parak liels un size tagad "+vWidth+"x"+vHeight);
                
            } else if (vWidth >= windowSize.width){
                vWidth = (windowSize.width - 200);
                vHeight = vWidth /vRatio;
                console.log("platums parak liels un size tagad "+vWidth+"x"+vHeight);
            }
            
            $scope.widthx = vWidth;
            $scope.heightx = vHeight;
            
            $scope.videoDur = videoDuration;
            
            console.log("videoTitle : "+name);
            console.log("window : "+windowSize.width+"x"+windowSize.height);
            console.log("video Start: "+videoSize.width+"x"+videoSize.height);
            console.log("video End: "+vWidth+"x"+vHeight);
            
            
            angular.forEach(tempArr, function(value, key) {
                    
                    angular.forEach(value.videoList, function(value, key) {
                        
                        if(value.videoTitle === name){
                            console.log("value.src "+value.video);
                            console.log("<------------------------------------------>");
                            $scope.videoSrc = value.video;
                        }
                
                    });
                    
            });
            
            
            
            //if(langService.data.spaceHistory.spaceObjects.objectTitle === name){
//                console.log(langService.data.spaceHistory.spaceObjects.objectTitle);
             
            
        }
        
    videoPopupController.$inject = ['$scope', 'name', 'videoWidth', 'videoHeight', 'videoDuration', 'langService'];
       
})();