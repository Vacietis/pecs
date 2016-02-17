(function(){
    'use strict';

    angular
        .module('picGallery')
        .directive('images', images);

    function images($q){
        return {
            restrict: 'E',
            link: function(scope, element, attrs){
               scope.preload = function(picSrc) {
                var deffered = $q.defer(),
                image = new Image();
        
                image.onload = function () {
//                    $scope.image.width = img.width;
//                    $scope.image.height = img.height;
//                    $scope.image.path = $scope.imageurl;
                    
                    attrs.$set('widthx',image.width);
                    attrs.$set('heightx',image.height);
                }

                image.src = picSrc;
                
                
                
                if (image.complete) {

                  deffered.resolve();

                } else {

                  image.addEventListener('load', function() {
                    deffered.resolve();
                  });

                  image.addEventListener('error', function() {
                    deffered.reject();
                  });
                }

                return deffered.promise;
              }

              //element.hide();

              scope.preload(attrs.src).then(function(){
                element.css({
                  "background-image": "url('" + attrs.src + "')"
                });
                //element.fadeIn();
              })
            }
        };
    }
    })();

