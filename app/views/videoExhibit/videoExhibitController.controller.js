(function(){
    'use strict';

    angular
        .module('videoExhibit')
        .controller('videoExhibitController', videoExhibitController);

        function videoExhibitController($scope, langService, ngDialog, $controller, $route, $timeout){
            
            $scope.videoList = langService;
            
            var paramValue = $route.current.$$route.paramExample;
            $scope.clickedPath = paramValue;
            
//            $scope.pauseOrPlay = function(e){
//                var videoElements = angular.element(e.srcElement);
//                videoElements[0].pause();
//                console.log("working");
//            }
            
            $scope.loaded = false;
            $timeout(function(){
               $scope.loaded = true; 
            }, 500);
            
            
            
            $scope.showVideoPopup = function(videoObj){
                if( $scope.swiping ) { return; }
                
                ngDialog.open({ 
                    scope: $scope,
                    template: 'app/views/videoExhibit/videoExhibit.popUp.html',
                    controller: $controller('videoPopupController', {
                        $scope: $scope,
                        name: videoObj.videoTitle,
                        videoWidth: videoObj.width,
                        videoHeight: videoObj.height,
                        videoDuration: videoObj.duration
                    })
                });
            }
        }
        
    videoExhibitController.$inject = ['$scope', 'langService', 'ngDialog', '$controller', '$route', '$timeout'];
       
})();