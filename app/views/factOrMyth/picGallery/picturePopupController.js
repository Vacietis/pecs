(function(){
    'use strict';

    angular
        .module('picGallery')
        .controller('picturePopupController', picturePopupController);
//        .animation('.slide-animation', slideAnimation);

        function picturePopupController($scope, pic, langService, resize){
            
            //var tempArr = langService.data.factOrMyth.pictureGallery.pictures;
            
            var imageWidth = pic.width;
            var imageHeight = pic.height;
            
            resize.checkIfFitsInWindow(imageWidth, imageHeight);
            
            imageHeight = resize.objectsResizedHeight;
            imageWidth = resize.objectsResizedWidth;
            
            $scope.widthx = imageWidth;
            $scope.heightx = imageHeight;
            
            $scope.imageSrc = pic.image;
            
//            angular.forEach(tempArr, function(value, key) {
//
//                if(value.description === name){
//                    $scope.imageSrc = value.image;
////                    console.log("br: "+value.description);
//                } 
//            });
        }
        
    picturePopupController.$inject = ['$scope', 'pic', 'langService', 'resize'];
       
})();