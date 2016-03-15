(function(){
    'use strict';

    angular
        .module('moonMissions')
        .directive('droppable', droppable);

    function droppable(){
        return {
        restrict: 'A',
            link: function(scope, elem, attrs) {
                    
                    elem.droppable({
                    accept: '.title0',
                    hoverClass: "drop-hover",
                    over: function(event, ui){
                        elem.text("over");
                        ui.draggable.css({
                            border: "5px dotted red"
                        });
                    },
                    out: function(event, ui){
                        elem.text("out");
                        ui.draggable.css({
                            border: "none"
                        });
                    },
                    drop: function(event, ui){
                       elem.text("dropped");
                       snapToMiddle(ui.draggable,$(this));
                       console.log(elem.width()+"yes");
                    }
                });
            //}

                

                
                var snapToMiddle = function(dragger, target){
                    
                    var topMove = target.position().top - dragger.data('position').top + (target.outerHeight(true) - dragger.outerHeight(true)) / 2;
                    var leftMove= (target.position().left - dragger.data('position').left + (target.outerWidth(true) - dragger.outerWidth(true)) / 2);
//                 
                    dragger.animate({top:topMove, left:leftMove},{duration:600,easing:'easeOutBack'});
//                    
                }
            }
        }   
    };
    })();

