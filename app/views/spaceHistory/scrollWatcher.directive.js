(function(){
    'use strict';

    angular
        .module('spaceHistory')
        .directive('scrollWatcher', scrollWatcher);

    function scrollWatcher(spaceHistoryScroll, $location, $anchorScroll, $window){
        return {
            restrict: 'A',
            link: function(scope,elem,attrs){ 
                
                console.log("spaceHistoryScroll.getScrollPosition(): "+$window.Math.round(spaceHistoryScroll.getScrollPosition()));
                scope.scrollValue = $window.Math.round(spaceHistoryScroll.getScrollPosition());
                
                scope.scrolltoStart = function(){
                    elem.scrollLeft(0);
                }
                
                scope.scrolltoEnd = function(){
                    elem.scrollLeft(scope.scrollEndPosition);
                    //jaizdoma ka apreikinat pareizi
                    console.log("bam"+scope.scrollEndPosition);
                }

                elem.on('scroll', function(){
                    var left = this.scrollLeft;
                    scope.$apply(function(){
                        scope.scrollValue = left;
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

