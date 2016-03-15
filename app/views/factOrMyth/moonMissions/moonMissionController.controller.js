(function(){
    'use strict';

    angular
        .module('moonMissions')
        .controller('moonMissionsControler', moonMissionsControler);

        function moonMissionsControler(){
            
            var mm = this;
            
            mm.tempText = "yuhuuuu";
            mm.dragArray = [];
            for(var i = 0; i < 2; i++){
                mm.dragArray.push({title: "title"+i, titleDrop: "drop"+i});
            }
            
        }
        
    moonMissionsControler.$inject = [];
       
})();