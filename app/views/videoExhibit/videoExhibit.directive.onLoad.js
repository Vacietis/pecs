(function(){
    'use strict';

    angular
        .module('videoExhibit')
        .directive('onLoad', vids);

    function vids($rootScope){
        return {
            
            restrict: 'A',
            scope: {
                onLoad: "=",
                saturs: "="
            },
            link: function(scope, element, attr) {  
                
                var vid = $('<video style="display: none;"/>');
                vid.append('<source src="'+scope.onLoad+'" type="video/mp4"/></source>')
                vid.on('canplay', function(){
                    
                    scope.saturs.width = vid[0].videoWidth;
                    scope.saturs.height = vid[0].videoHeight;
                    
                    vid.remove();
                    
//                    $rootScope.loaded = true;
                });
            }
            
        };
    }
    })();
