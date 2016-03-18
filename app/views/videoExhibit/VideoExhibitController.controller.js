(function(){
    'use strict';

    angular
        .module('videoExhibit')
        .controller('VideoExhibitController', VideoExhibitController);

        function VideoExhibitController($scope, langService, ngDialog, $route, $timeout, $rootScope, resize){
            
            var ve = this;
            
            ve.videoList = langService;
            
            var paramValue = $route.current.$$route.paramExample;
            ve.clickedPath = paramValue;
            
            $scope.$on('languageIsChanged',function(event, data){
                ve.loaded = false;
                $timeout(function(){
                   ve.loaded = true; 
                }, 500);
            });
            
            ve.loaded = false;
            $timeout(function(){
               ve.loaded = true; 
            }, 500);
            
            
            ve.videoPlayClick = function(){
                $rootScope.$broadcast('videoIsClicked',{});
            }
            
            ve.showVideoPopup = function(videoObj){
                
                if( $scope.swiping ) { return; }

                if(videoObj.isLoaded){
                    
                    resize.checkIfFitsInWindow(videoObj.width, videoObj.height);

                    $scope.widthx = resize.objectsResizedWidth;
                    $scope.heightx = resize.objectsResizedHeight;

                    $scope.videoObj = videoObj;
                    $scope.videoDur = videoObj.duration;
                    
                    ngDialog.open({ 
                        scope: $scope,
                        template: 'app/widgets/popup/videoExhibit.popUp.html'
                    });
                }
                
            }
        }
        
    VideoExhibitController.$inject = ['$scope', 'langService', 'ngDialog', '$route', '$timeout', '$rootScope', 'resize'];
       
})();