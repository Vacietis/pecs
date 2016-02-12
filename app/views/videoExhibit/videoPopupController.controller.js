(function(){
    'use strict';

    angular
        .module('videoExhibit')
        .controller('videoPopupController', videoPopupController);

        function videoPopupController($scope, name, langService, list){
            
            console.log("asfasfasf: "+list);
            
            var tempArr = langService.data.videoExhibit.videoParts;
            
            angular.forEach(tempArr, function(value, key) {
                    
                    angular.forEach(value.videoList.videoListSun, function(value, key) {
                        
                        if(value.videoTitle === name){
                            $scope.videoSrc = value.video;
                            console.log(value.videoTitle);
                        }
                
                    });
                    
            });
            
            
            
            //if(langService.data.spaceHistory.spaceObjects.objectTitle === name){
//                console.log(langService.data.spaceHistory.spaceObjects.objectTitle);
             
            
        }
        
    videoPopupController.$inject = ['$scope', 'name', 'langService', 'list'];
       
})();