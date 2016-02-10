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
                
//                $location.hash("object-id-"+scope.scrollValue);
//                $anchorScroll();
                
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

