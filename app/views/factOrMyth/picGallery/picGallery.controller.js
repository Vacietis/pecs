(function(){
    'use strict';

    angular
        .module('picGallery')
        .controller('picGalleryController', picGalleryController)
        .animation('.slide-animation', slideAnimation);

        function picGalleryController($scope, ngDialog){
            
//            $scope.stendi = [];
//            $http.get('lang/lv.json').then(function(response) {
//                $scope.stendi = response.data.stendi;
//            });
            $scope.clickToOpen = function () {
                ngDialog.open({ template: 'app/views/factOrMyth/fomTest/popUp.html' });
            };
            
            $scope.slides = [
                {image: 'images/foto_1_07final.png', description: 'Image 00'},
                {image: 'images/foto_1_10.png', description: 'Image 01'},
                {image: 'images/foto_2_03.png', description: 'Image 02'},
                {image: 'images/foto_2_04.png', description: 'Image 03'},
                {image: 'images/foto_3_03.png', description: 'Image 04'}
            ];
            
            $scope.direction = 'left';
            $scope.currentIndex = 0;
            
            $scope.setCurrentSlideIndex = function(index){
                $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
                $scope.currentIndex = index;
            }
            
            $scope.isCurrentIndex = function(index){
                return $scope.currentIndex === index;
            }
            
            $scope.prevSlide = function(){
                $scope.direction = 'left';
                $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
            }
            $scope.nextSlide = function(){
                $scope.direction = 'right';
                $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
            }
            
        }
        
        function slideAnimation(){
            return {
                addClass: function (element, className, done) {
                    if (className == 'ng-hide') {
                        var scope = element.scope();
                        // ANIMATION CODE GOES HERE   
                        var finishPoint = element.parent().width();
                        if(scope.direction !== 'right') {
                            finishPoint = -finishPoint;
                        }
                        TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                    }
                    else {
                        done();
                    }
                },
                removeClass: function (element, className, done) {
                    if (className == 'ng-hide') {
                        var scope = element.scope();
                        // ANIMATION CODE GOES HERE
                        element.removeClass('ng-hide');
                        
                        var startPoint = element.parent().width();
                        if(scope.direction === 'right') {
                            startPoint = -startPoint;
                        }

                        TweenMax.set(element, { left: startPoint });
                        TweenMax.to(element, 0.5, {left: 0, onComplete: done });
                    }
                    else {
                        done();
                    }
                }
            };
        }
        
    picGalleryController.$inject = ['$scope', 'ngDialog'];
       
})();