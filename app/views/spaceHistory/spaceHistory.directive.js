(function(){
    'use strict';

    angular
        .module('spaceHistory')
        .directive('childscopeWatcher', childscopeWatcher);

    function childscopeWatcher(){
        return {

            restrict: 'A',
            link: function(scope,elem,attrs){
                elem.on('scroll', function(evt){
                   console.log(evt.scrollLeft);
                });
            }

        }
    };
    
    })();

