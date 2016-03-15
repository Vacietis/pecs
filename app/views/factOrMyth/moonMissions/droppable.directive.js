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
                        
                        accept: '.'+attrs.droppableAccept,
//                        hoverClass: "drop-hover",
                        over: function(event, ui){
//                            elem.text("over");
                            ui.draggable.css({
                                border: "5px dotted red",
                                backgroundColor: "yellow"
                            });
                        },
                        out: function(event, ui){
//                            elem.text("out");
                            ui.draggable.css({
                                border: "none",
                                 backgroundColor: "gray"
                            });
                        },
                        drop: function(event, ui){
//                           elem.text("dropped");
                           snapToMiddle(ui.draggable,$(this));
                        }
                });
            //}

                

                
                var snapToMiddle = function(dragger, target){
                    
                    var topMove = target.position().top - dragger.data('position').top + (target.outerHeight(true) - dragger.outerHeight(true)) / 2;
                    var leftMove= (target.position().left - dragger.data('position').left + (target.outerWidth(true) - dragger.outerWidth(true)) / 2);
                    
                    console.log("topMove: "+topMove+" leftMove: "+leftMove);
//                 
                    dragger.animate({top:topMove, left:leftMove},{duration:600,easing:'easeOutBack'});
//                    
                }
            }
        }   
    };
    })();

