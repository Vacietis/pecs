(function(){
    'use strict';

    angular
        .module('picGallery')
        .controller('picGalleryController', picGalleryController);
//        .animation('.slide-animation', slideAnimation);

        function picGalleryController($scope, ngDialog, langService, $timeout, resize){
            
            var pg = this;
            
            // for video gallery to fade in
            pg.loaded = false;
            
            $timeout(function(){
               pg.loaded = true; 
            }, 500);
            console.log("pg.loaded "+pg.loaded);

            pg.swiping = false;
            
            pg.activeSlide = 0

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
                
                console.log("1");

                resize.checkIfFitsInWindow(pic.width, pic.height);

                pg.widthx = resize.objectsResizedWidth;
                pg.heightx = resize.objectsResizedHeight;
                
                pg.pic = pic;
                
                ngDialog.open({ 
                    scope: pg,
                    template: 'app/views/factOrMyth/picGallery/picGallery.popup.html'
                });
            }
            
        }
        
    picGalleryController.$inject = ['$scope', 'ngDialog', 'langService', '$controller', '$timeout', 'resize'];
       
})();