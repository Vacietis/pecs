(function(){
    'use strict';

    angular
        .module('moonMissions')
        .controller('moonMissionsControler', moonMissionsControler);

        function moonMissionsControler($window){
            
            var mm = this;
            
            mm.tempText = "yuhuuuu";
            mm.dragArray = [];
            for(var i = 0; i < 4; i++){
                mm.dragArray.push({title: "title"+i, titleDrop: "drop"+i, id:i});
            }
            
//            if(droped){
//                var index = array.indexOf(5);
//                array.splice(index, 1);
//            }
//            
            mm.shuffleArray = function(array){
                
                var arrayLength = array.length;
                var remainigItem;
                var existingItem;
                
                while(arrayLength){
                    remainigItem = $window.Math.floor($window.Math.random() * arrayLength-- );
                    existingItem = array[arrayLength];
                    array[arrayLength] = array[remainigItem];
                    array[remainigItem] = existingItem;
                }
            }
            
            mm.shuffleArray(mm.dragArray);
            
            
        }
        
    moonMissionsControler.$inject = ['$window'];
       
})();