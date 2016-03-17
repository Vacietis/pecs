(function(){
    'use strict';

    angular
        .module('otherScience')
        .directive('popContent', popContent);

    function popContent($timeout){
        return {
            restrict: 'A',
            link: function(scope,elem,attrs){
                var wraper = 0;
                scope.showScroller = true;
//                $timeout(function() {
//                     console.log("popup-wrapper.height"+$(".popup-wrapper").height());
//                     console.log("element.height()"+elem.height());
//                     wraper = $(".popup-wrapper").height();
//                     if(wraper > elem.height()){
//                         scope.showScroller = true;
//                     } else {
//                         scope.showScroller = false;
//                     }
//
//                }, 0); 
                
//                console.log("scope.showScroller "+scope.showScroller);
                
                //console.log("$element.actual('scrollHeight') "+elem.actual('scrollHeight'));
                
            
                
                elem.on('scroll', function(){
                    
                var height = this.scrollHeight;
                var top = this.offsetHeight;
                console.log("top ---> "+top); 
                
//                    scope.$apply(function(){
//                        scope.scrollValue = top;
//                        if(top === wraper){
//                           scope.showScroller = false;
//                        } else {
//                            scope.showScroller = true;
//                        }
//                        console.log("top "+top); 
//                    });

                });
                
                
                
//                element.height($(window).height() - $('.header').outerHeight());
            }
        }
    };
    
    })();
