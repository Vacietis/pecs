(function(){
    'use strict';

    angular
        .module('fomTest')
        .factory('quizFactory', quizFactory);

    function quizFactory(langService){
           
        var questions = [];
        
//        $scope.$on('$routeChangeStart', function() { 
//                $scope.langText.length = 0;
//                console.log("Exiting quiz game = langSize ");
//                console.log($scope.langText);
//            });
//            
//            $scope.$on('$routeChangeSuccess', function() { 
//                
//                $scope.langText = langService;
//                console.log("Entering quiz GAME.. langSize ");
//                console.log(+$scope.langText);
//            });
       
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
            },
            reloadQuestions : function (){
                questions = langService.data.factOrMyth.questions;
                return questions;
            }
        }
    }
    
    quizFactory.$inject = ['langService'];
})();
