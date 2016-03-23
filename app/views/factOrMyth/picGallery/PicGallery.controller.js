(function(){
    'use strict';

    angular
        .module('picGallery')
        .controller('PicGalleryController', PicGalleryController);

        function PicGalleryController($scope, ngDialog, langService, $timeout, resize){
            
            var pg = this;
            
            // for video gallery to fade in
            pg.loaded = false;
            
            $timeout(function(){
               pg.loaded = true; 
            }, 500);
            console.log("pg.loaded "+pg.loaded);

            pg.swiping = false;
            
            pg.activeSlide = 0;

            pg.clickToOpen = function () {
                ngDialog.open({ template: 'app/views/factOrMyth/fomTest/popUp.html' });
            };
            
            // slides object fills the image gallery source and 
            // slides object won't be changed when language button will be pressed 
            pg.slides = langService.data.factOrMyth.pictureGallery.pictures;
            
            //slidesText object fills image description and will change on lang click
            pg.slidesText = langService;
                     
            pg.showGalleryPopup = function(pic){

                if( $scope.swiping ) { 
                    return;
                }

                resize.checkIfFitsInWindow(pic.width, pic.height);

                $scope.widthx = resize.objectsResizedWidth;
                $scope.heightx = resize.objectsResizedHeight;
                
                $scope.pic = pic;
                
                ngDialog.open({ 
                    scope: $scope,
                    template: 'app/widgets/popup/picGallery.popup.html'
                });
            }
            
        }
        
    PicGalleryController.$inject = ['$scope', 'ngDialog', 'langService', '$timeout', 'resize'];
       
})();