(function(){
    'use strict';

    angular
        .module('videoExhibit')
        .directive('vids', vids);

    function vids($q){
        return {
            restrict: 'A',
            scope:{
              vids: '='  
            },
            link: function(scope, element, attrs){
                console.log("src = "+element.attr('source'));
//                 var vid = $('<video style="display: none;"/>');
//                    vid.append('<source src="'+element.attr('src')+'" type="video/mp4"/></source>')
//                    vid.on('canplay', function(){
//
//                        console.log("imageWidth:"+vid[0].videoWidth);
//                        console.log("imageHeight:"+vid[0].videoHeight);
//                        vid.remove();
//                        
//                    });
                
//                var vdo = element.find('video')[0];
//                vdo.on('loadstart', function () {
//                   console.log('onloadstart');
//                });
                
//                var video = document.createElement('video');
//                video.src = 'images/SampleVideo.mp4';
//                
//                video.on('loadedmetadata', function() {
//        
//                    console.log("stradaaaa");
//
//                });
//                video.bind('loadeddata', function(e) {
//                    console.log(e.target.duration);
//                  });
//                video.onload('canplay', function(){
//                    
//                     console.log("videoWidth:"+video[0].videoWidth);
//                     console.log("videoHeight:"+video[0].videoHeight);
//                    video.remove();
//                });
                
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
