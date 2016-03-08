(function(){
    'use strict';

    angular
        .module('picGallery')
        .controller('picGalleryController', picGalleryController);
//        .animation('.slide-animation', slideAnimation);

        function picGalleryController($scope, ngDialog, langService, $controller, $timeout){
            
            //json for dummy images
//            {
//                "image": "images/600x400.png",
//                "description": "600x400 LV"
//            },
//            {
//                "image": "images/2500x400.png",
//                "description": "2500x400 LV"
//            },
//            {
//                "image": "images/100x1200.png",
//                "description": "100x1200 LV"
//            }
            
            $scope.activeSlide = 0


            $scope.clickToOpen = function () {
                ngDialog.open({ template: 'app/views/factOrMyth/fomTest/popUp.html' });
            };
            
            $scope.slides = langService.data.factOrMyth.pictureGallery;
            $scope.slidesText = langService;
            
            $scope.loaded = false;
            $timeout(function(){
               $scope.loaded = true; 
            }, 500);
            
//            $scope.image = {
//                path: "",
//                width: 0,
//                height: 0
//            }
//            $scope.loadimage = function () {
//                var img = new Image();
//                img.onload = function () {
//                    $scope.$apply(function() {
//                        $scope.image.width = img.width;
//                        $scope.image.height = img.height;
//                        $scope.image.path = "images/foto_1_10.png";
//                      });
//                }
//                img.src = 'images/foto_1_10.png';
//            }
            
            $scope.showGalleryPopup = function(videPar, pic){
//                console.log("BRA: "+obj.attrs);

//                console.log("bra: "+pic.width, pic.height)
                if( $scope.swiping ) { return; }
                ngDialog.open({ 
                    scope: $scope,
                    template: 'app/views/factOrMyth/picGallery/picGallery.popup.html',
                    className: 'ngdialog-theme-default videongDialog',
                    controller: $controller('picturePopupController', {
                        $scope: $scope,
                        name: videPar,
                        width: pic.width,
                        height: pic.height
                    })
                });
            }
            
//            $scope.slides = [
//                {image: 'images/foto_1_07final.png', description: 'Image 00'},
//                {image: 'images/foto_1_10.png', description: 'Image 01'},
//                {image: 'images/foto_2_03.png', description: 'Image 02'},
//                {image: 'images/foto_2_04.png', description: 'Image 03'},
//                {image: 'images/foto_3_03.png', description: 'Image 04'}
//            ];
            
//            $scope.direction = 'left';
//            $scope.currentIndex = 0;
//            
//            $scope.setCurrentSlideIndex = function(index){
//                $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
//                $scope.currentIndex = index;
//            }
//            
//            $scope.isCurrentIndex = function(index){
//                return $scope.currentIndex === index;
//            }
//            
//            $scope.prevSlide = function(){
//                $scope.direction = 'left';
//                $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
//            }
//            $scope.nextSlide = function(){
//                $scope.direction = 'right';
//                $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
//            }
            
        }
        
//        function slideAnimation(){
//            return {
//                addClass: function (element, className, done) {
//                    if (className == 'ng-hide') {
//                        var scope = element.scope();
//                        // ANIMATION CODE GOES HERE   
//                        var finishPoint = element.parent().width();
//                        if(scope.direction !== 'right') {
//                            finishPoint = -finishPoint;
//                        }
//                        TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
//                    }
//                    else {
//                        done();
//                    }
//                },
//                removeClass: function (element, className, done) {
//                    if (className == 'ng-hide') {
//                        var scope = element.scope();
//                        // ANIMATION CODE GOES HERE
//                        element.removeClass('ng-hide');
//                        
//                        var startPoint = element.parent().width();
//                        if(scope.direction === 'right') {
//                            startPoint = -startPoint;
//                        }
//
//                        TweenMax.set(element, { left: startPoint });
//                        TweenMax.to(element, 0.5, {left: 0, onComplete: done });
//                    }
//                    else {
//                        done();
//                    }
//                }
//            };
//        }
        
    picGalleryController.$inject = ['$scope', 'ngDialog', 'langService', '$controller', '$timeout'];
       
})();