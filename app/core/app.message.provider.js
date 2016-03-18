(function(){
    'use strict';

    angular
        .module('mainApp')
        .provider('message', message);

        function message(){
            
            var text = null;
             
            this.setText = function(textString){
                text = textString;
            }
            this.$get = [function(){
                return text;
            }]
        }
       
})();