(function(){
    'use strict';

    angular
        .module('picGallery')
        .controller('picturePopupController', picturePopupController);
//        .animation('.slide-animation', slideAnimation);

        function picturePopupController($scope, name, langService){
            
            var tempArr = langService.data.factOrMyth.pictureGallery;
            
            angular.forEach(tempArr, function(value, key) {

                if(value.description === name){
                    $scope.imageSrc = value.image;
//                    console.log("br: "+value.description);
                } 
            });
        }
        
    picturePopupController.$inject = ['$scope', 'name', 'langService'];
       
})();