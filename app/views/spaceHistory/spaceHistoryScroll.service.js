(function(){
    'use strict';

    angular
        .module('spaceHistory')
        .factory('spaceHistoryScroll', spaceHistoryScroll);

    function spaceHistoryScroll(){
        
        var tempScrollValue = 0;
       
        return {
            getScrollPosition: function() {
                
                return tempScrollValue;
                
            },
            saveScrollPosition: function(prieviousScroll){
                
                tempScrollValue = prieviousScroll;
                
            }
        }
    }
})();
