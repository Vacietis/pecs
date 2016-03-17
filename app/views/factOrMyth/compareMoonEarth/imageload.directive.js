(function(){
    'use strict';

    angular
        .module('compare')
        .directive('imageLoad', imageLoad);

    function imageLoad(){
        return {
        restrict: 'A',
            link: function(scope, elem, attrs) {
                var fn = attrs.source;
                elem.on('load', function (event) {

                });
            }
        }   
    };
    })();

