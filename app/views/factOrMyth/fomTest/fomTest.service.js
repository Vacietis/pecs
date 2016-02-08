(function(){
    'use strict';

    angular
        .module('fomTest')
        .factory('quizFactory', quizFactory);

    function quizFactory(langService){
           
        var questions = langService.data.factOrMyth.questions;
       
        return {
            getQuestion: function(id) {
                if(id < questions.length) {
                    return questions[id];
                    
                } else {
                    return false;
                }
            },
            getArray : function(){
                return questions;
            }
        }
    }
    
    quizFactory.$inject = ['langService'];
})();
