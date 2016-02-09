(function(){
    'use strict';

    angular
        .module('spaceHistory')
        .factory('spaceHistoryScroll', spaceHistoryScroll);

    function spaceHistoryScroll($location, $anchorScroll){
       
        return {
            getScrollPosition: function() {
                
//                $location.hash('object-id-19');
                
                return true;
            }
        }
    }
})();
