(function(){
    'use strict';

    angular
        .module('fomTest')
        .factory('quizFactory', quizFactory);

    function quizFactory($http){
           
            var questions = [];
            $http.get('lang/lv.json').then(function(response) {
                questions = response.data.factOrMyth.questions;
            });

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
    
    quizFactory.$inject = ['$http'];
})();
