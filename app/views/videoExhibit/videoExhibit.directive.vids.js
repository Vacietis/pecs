(function(){
    'use strict';

    angular
        .module('videoExhibit')
        .directive('vids', vids);

    function vids($q){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                
//                 console.log(element.prop('height'));
                 
//                 var video = new Video();
//                 video.onload = function () {
//////                    $scope.image.width = img.width;
//////                    $scope.image.height = img.height;
//////                    $scope.image.path = $scope.imageurl;
////                    
//                    attrs.$set('widthx',video.width);
//                    attrs.$set('heightx',video.height);
////                        console.log("imageWidth:"+image.width);
////                        console.log("imageHeight:"+image.height);
//                }
//
//                video.src = attrs.src;
                 
//               scope.preload = function(picSrc) {
//                var deffered = $q.defer(),
//                image = new Image();
//        
//                image.onload = function () {
////                    $scope.image.width = img.width;
////                    $scope.image.height = img.height;
////                    $scope.image.path = $scope.imageurl;
//                    
//                    attrs.$set('widthx',image.width);
//                    attrs.$set('heightx',image.height);
//                }
//
                
////                image.widthx = image.width;
////                image.heightx = image.height;
//                
//                
//                if (image.complete) {
//
//                  deffered.resolve();
//
//                } else {
//
//                  image.addEventListener('load', function() {
//                    deffered.resolve();
//                  });
//
//                  image.addEventListener('error', function() {
//                    deffered.reject();
//                  });
//                }
//
//                return deffered.promise;
//              }
//
////              element.hide();
//
//              scope.preload(attrs.src).then(function(){
////                element.css({
////                  "background-image": "url('" + attrs.src + "')"
////                });
////                element.fadeIn();
//              })
            }
        };
    }
    })();
