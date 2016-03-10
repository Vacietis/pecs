(function(){
    'use strict';

    angular
        .module('picGallery')
        .controller('picturePopupController', picturePopupController);
//        .animation('.slide-animation', slideAnimation);

        function picturePopupController($scope, name, width, height, langService){
            
            var tempArr = langService.data.factOrMyth.pictureGallery;
            
            var windowSize = {
                width: $(window).width(),
                height: $(window).height()
            };
            
            var pictureSize = {
                width: width,
                height: height
            };
            
            var imageWidth = pictureSize.width;
            var imageHeight = pictureSize.height;
            var imageRatio = pictureSize.width / pictureSize.height;
            
        
            if(imageHeight > windowSize.height || imageHeight > windowSize.height && imageWidth > windowSize.width){
                //-200 to controll space between window and picture
                imageHeight = (windowSize.height - 200);
                imageWidth = imageHeight  * imageRatio;
                console.log("augstums parak liels un size tagad "+imageWidth+"x"+imageHeight);
                
            } else if (imageWidth > windowSize.width){
                imageWidth = (windowSize.width - 200);
                imageHeight = imageWidth /imageRatio;
                console.log("platums parak liels un size tagad "+imageWidth+"x"+imageHeight);
            }
            
            $scope.widthx = imageWidth;
            $scope.heightx = imageHeight;
            
            console.log("window : "+windowSize.width+"x"+windowSize.height);
            console.log("picture : "+pictureSize.width+"x"+pictureSize.height);
            
            angular.forEach(tempArr, function(value, key) {

                if(value.description === name){
                    $scope.imageSrc = value.image;
//                    console.log("br: "+value.description);
                } 
            });
        }
        
    picturePopupController.$inject = ['$scope', 'name', 'width', 'height', 'langService'];
       
})();