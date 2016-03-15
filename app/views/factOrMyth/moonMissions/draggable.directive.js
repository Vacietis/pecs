(function(){
    'use strict';

    angular
        .module('moonMissions')
        .directive('draggable', draggable);

    function draggable(){
        return {
        restrict: 'A',
            link: function(scope, elem, attrs) {
                elem.draggable({
                    revert: 'invalid',
                    create: function(){
                        $(this).data('position',$(this).position())
                    },
                    start: function(event, ui){
//                        elem.text("starting");
                        console.log("started")
                    },
                    stop: function(event, ui){
                        elem.text("stoped");
                    },
                    cursor: 'pointer',
                    drag: function(event, ui){
                        elem.text("position x:"+ui.position.left+" y:"+ui.position.top);
                    }
                });
            }
        }   
    };
    })();

