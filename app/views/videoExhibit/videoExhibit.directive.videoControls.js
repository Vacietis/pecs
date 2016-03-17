(function(){
    'use strict';

    angular
        .module('videoExhibit')
        .directive('videoControls', vids);

    function vids($window){
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/templates/template.videoControls.html',
            scope: {
                vid: "=",
                duration: "="
            },
            link: function(scope, element, attr) { 
                
                var currentVideo = $("#"+attr.vid);
                var currentVideoTime = $(".video-time");
                var currentVideoSeekBar = $(".seek-bar-input");
                var currentVideoVolumeBar = $(".valume-bar-input");
                
                var isPlaying = false;
                
                scope.volumeIsClicked = false;

                scope.currentVideoVolume = 50;
                
                scope.$on('videoIsClicked',function(event, data){
                    scope.customPlay();
                });
                
                scope.customPlay = function(){
                    if(!isPlaying){
                        currentVideo[0].play();
                        isPlaying = true;
                        scope.playPause = "glyphicon-pause";
                    } else {
                        currentVideo[0].pause();
                        isPlaying = false;
                        scope.playPause = "glyphicon-play";
                    }
                };
                
                scope.customVolume = function(){

                    scope.volumeIsClicked = !scope.volumeIsClicked;
                    
                };
                
                currentVideo.on('timeupdate', function(){
                    var value = (100 / currentVideo[0].duration) * currentVideo[0].currentTime;
                    currentVideoSeekBar.val(value);
                    scope.checkTime(currentVideo[0].currentTime, currentVideo[0].duration, currentVideoTime);
                    
                    if(currentVideo[0].currentTime === currentVideo[0].duration){
                        scope.$apply(function(){
                            scope.playPause = "glyphicon-play";
                        });
                        isPlaying = false;
                    }
                });
                
                currentVideoSeekBar.change(function(){
                   var time = currentVideo[0].duration * (this.value / 100);
                   currentVideo[0].currentTime = time;
                });
                
                currentVideoVolumeBar.change(function(){
                   currentVideo[0].volume = (this.value/100);
                   var tempVolumeValue = this.value/100;
                   
                   scope.$apply(function(){
                           scope.currentVideoVolume = (tempVolumeValue*100);
                       });
                });
                
                scope.checkTime = function(curr, duration, seekBarTemp){
                    var minutes = $window.Math.floor(curr / 60);
                    var seconds = $window.Math.round(curr - minutes * 60);
                    var tminutes = $window.Math.floor(duration / 60);
                    var tseconds = $window.Math.round(duration - tminutes * 60);
                    if(seconds === 60){
                        seconds = 0;
                        minutes ++;
                    }
                    if(minutes < 10) { minutes = '0'+minutes; }
                    if(tminutes < 10) { tminutes = '0'+tminutes; }
                    if(seconds < 10) { seconds = '0'+seconds; }
                    if(tseconds < 10) { tseconds = '0'+tseconds; }

                    seekBarTemp.text(minutes+":"+seconds + " / "+tminutes+":"+tseconds);
                };
                
                
                scope.checkTime(0, scope.duration, currentVideoTime);
                
            }
        };
    }
    })();
