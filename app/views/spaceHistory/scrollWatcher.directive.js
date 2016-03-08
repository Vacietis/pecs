(function(){
    'use strict';

    angular
        .module('spaceHistory')
        .directive('scrollWatcher', scrollWatcher);

    function scrollWatcher(spaceHistoryScroll, $location, $anchorScroll, $window, $document){
        return {
            restrict: 'A',
            link: function(scope,elem,attrs){ 
                
                //eleemnta platums
                var elementWidth = elem[0].offsetWidth;
                
                console.log("spaceHistoryScroll.getScrollPosition(): "+$window.Math.round(spaceHistoryScroll.getScrollPosition()));
                scope.scrollValue = $window.Math.round(spaceHistoryScroll.getScrollPosition());
                
//                scope.scrollStartPosition = 0;
                scope.isScrolledToStart = true;
                scope.isScrolledToEnd = false;
//                scope.scrollEndPosition = scope.scrollEndPosition;
                
                scope.scrolltoStart = function(){
                    
                    elem.animate({
                        scrollLeft:0
                    },{ duration: 1000, easing: "easeOutSine" });
                    
                }
                
                scope.scrolltoEnd = function(){
                    
                    elem.animate({
                        scrollLeft:scope.scrollEndPosition
                    },{ duration: 1000, easing: "easeOutSine" });
                    
                    console.log("scrollEndPosition: "+scope.scrollEndPosition);

                }

                elem.on('scroll', function(){
                    var left = this.scrollLeft;
                    scope.$apply(function(){
                        scope.scrollValue = left;
                        if(left == 0){
                            scope.isScrolledToStart = true;
                        } else if(left == scope.scrollEndPosition){
                            scope.isScrolledToEnd = true;
                        } else {
                            scope.isScrolledToStart = false;
                            scope.isScrolledToEnd = false;
                        }
                    });
                    
                });
                
                elem.scrollLeft(scope.scrollValue);
                
                
                scope.$on('$destroy', function(){
                    console.log("destroyed at scroll x:"+elem.scrollLeft());
                    spaceHistoryScroll.saveScrollPosition(elem.scrollLeft());
                })
                
//                elem.on('scroll', function(){
//                    
//                    console.log(this.scrollLeft);      
//                  
//                });
//                
//    
            }
        }
    };
    
    })();