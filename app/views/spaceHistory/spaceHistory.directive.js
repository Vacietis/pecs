(function(){
    'use strict';

    angular
        .module('spaceHistory')
        .directive('scrollWatcher', scrollWatcher);

    function scrollWatcher(){
        return {
            restrict: 'A',
            link: function(scope,elem,attrs){
                elem.on('scroll', function(){
                    
                    console.log(this.scrollLeft);
                  
                  
                });
            }
        }
    };
    
    })();

