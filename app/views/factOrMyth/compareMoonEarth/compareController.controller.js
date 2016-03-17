(function(){
    'use strict';

    angular
        .module('compare')
        .controller('compareControler', compareControler);

        function compareControler($window, $scope, temp){
            
            var CONF = EURO_MAP_DATA.config;
            
            var COUNTRIES = EURO_MAP_DATA.countries;
            
            console.log("conf"+CONF.mapWidth);
            
            var co = this;
            
            co.tempText = "yuhuuuu";
            
            co.imageArray = COUNTRIES;
            
            co.testingValue = temp;
            console.log(co.testingValue);
            
            $scope.data = { active: false };
    
            $scope.toggle = function () {
              $scope.data.active = !$scope.data.active;
            };
            
//            $('.tempDiv').text("waza1");
            $('.tempDiv').css({
                width: "100px !important",
                height: "100px !important"
            });
            
//            angular.forEach(COUNTRIES, function (task, index) {
//                console.log(" countries.name task "+ task.name);
//                console.log(" countries.name index"+ index);
//                var $img = $('<img />').addClass('coin filler').data('country', task.name); 
//                $(".tempDiv").append($img);
//                
//                // create the actual draggable image only when the filler has loaded
//                $img.one('load', function(){
//                    console.log("bra");
//                     // we create another image that will be dragged, and that will be displayed bigger atop ohter coins
//                    var $draggableImg = $('<img />').attr('src', 'images/euro-map/'+task.name+'.png').addClass('coin drop-item-'+task.name);
//
//    //                $draggableImg.on('mouseup', function(){
//    //                    if(!$draggableImg.hasClass('highlight')){
//    //                        clearCoinSelection();
//    //                    
//    //                        if(!$draggableImg.data('justdragged') && !$draggableImg.hasClass('dropped')){
//    //                            $draggableImg.addClass('highlight');
//    //                            $draggableImg.attr('src', $draggableImg.data('bigimageurl'));
//    //
//    //                            var bottomPosition = $draggableImg.offset().top + bigCoinHeight*scaleRatio;
//    //                            if(bottomPosition > windowSize.height){
//    //                                var change = (bottomPosition-windowSize.height);
//    //                                $draggableImg.css({
//    //                                   transform: 'translate(0, -'+change/scaleRatio+'px)'
//    //                                });
//    //                            }
//    //                        }
//    //                    }else{
//    //                        clearCoinSelection();
//    //                    }
//    
//                        $(".tempDiv").append($draggableImg);
//                        
//                    });
//                    
//                    
//
//                });
//            
//    function resizeGame(){
//            var windowSize = {
//                width: $(window).width(),
//                height: $(window).height()
//            };
//            var targetSize = {
//                width: 1920,
//                height: 1080
//            };
//
//            var wRatio = windowSize.width/targetSize.width;
//            var hRatio = windowSize.height/targetSize.height;
//            if(windowSize.width < targetSize.width || windowSize.height < targetSize.height){
//                var scaleRatio = $window.Math.min(hRatio, wRatio);
//            }else{
//                scaleRatio = 1;
//            }
////            $(".main-view").css({
////                transform: 'scale('+scaleRatio+','+scaleRatio+')'
////            });
////
////            $(".main-view").css({
////                width: targetSize.width+'px'
////            })
////            
//            console.log("$(.main-view).offset "+$(".main-view").offset());
////            setTimeout(function(){
////                var spaceOnRight = targetSize.width - mediumCoinWidth*5 - CONF.mapWidth;
////                var spaceOnLeft = windowSize.width - targetSize.width*scaleRatio;
////                var newWidth = targetSize.width+(spaceOnLeft-spaceOnRight)/2/scaleRatio;
////                $gameField.css({
////                    width: newWidth+'px'
////                })
////                gameFieldOffset = $gameField.offset();
////            }, 0);
////
////
////            $gameField.find('.filler').each(function(index, filler){
////                var $filler = $(filler);
////                var $coin = $gameField.find('.coin.drop-item-'+$filler.data('country'));
////                var position = $filler.position();
////                $coin.css({
////                    top: (position.top/scaleRatio)+'px',
////                    left: (position.left/scaleRatio)+'px'
////                });
////            });
////
////            gameFieldOffset = $gameField.offset();
//        };
        
//        resizeGame();
            
            
        }
        
    compareControler.$inject = ["$window", '$scope', 'temp'];
       
})();