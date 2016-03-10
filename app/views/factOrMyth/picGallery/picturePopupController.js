(function(){
    'use strict';

    angular
        .module('picGallery')
        .controller('picturePopupController', picturePopupController);
//        .animation('.slide-animation', slideAnimation);

        function picturePopupController($scope, name, width, height, langService, resize){
            
            var tempArr = langService.data.factOrMyth.pictureGallery;
            
            var imageWidth = width;
            var imageHeight = height;
            
            resize.checkIfFitsInWindow(imageWidth, imageHeight);
            
            imageHeight = resize.objectsResizedHeight;
            imageWidth = resize.objectsResizedWidth;
            
            $scope.widthx = imageWidth;
            $scope.heightx = imageHeight;
            
            angular.forEach(tempArr, function(value, key) {

                if(value.description === name){
                    $scope.imageSrc = value.image;
//                    console.log("br: "+value.description);
                } 
            });
        }
        
    picturePopupController.$inject = ['$scope', 'name', 'width', 'height', 'langService', 'resize'];
       
})();