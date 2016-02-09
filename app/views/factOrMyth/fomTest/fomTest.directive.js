(function(){
    'use strict';

    angular
        .module('fomTest')
        .directive('quiz', quiz);

    function quiz(quizFactory){
        return {
        restrict: 'EA',
        scope: {
            langText: '='
        },
        templateUrl: 'app/views/factOrMyth/fomTest/fomTest.template.html',
            link: function(scope, elem, attrs) {
                scope.start = function() {
                    quizFactory.reloadQuestions();
                    scope.id = 0;
                    scope.quizOver = false;
                    scope.inProgress = true;
                    scope.getQuestion();
                    scope.arraylength = 5;
                    scope.idArr = [];
                    scope.idArr = quizFactory.getArray();
                };

                scope.reset = function() {
                    scope.inProgress = false;
                    scope.score = 0;
                }

                scope.getQuestion = function() {
                    var q = quizFactory.getQuestion(scope.id);
                    if(q) {
                        scope.question = q.question;
                        scope.options = q.options;
                        scope.answer = q.answer;
                        scope.answerMode = true;
                    } else {
                        scope.quizOver = true;
                    }
                };

                scope.checkAnswer = function(val) {
                    if(val === scope.options[scope.answer]) {
                        scope.score++;
                        scope.correctAns = true;
                        $('quiz').css("background-color", "green");
                    } else {
                        scope.correctAns = false;
                        $('quiz').css("background-color", "red");
                    }

                    scope.answerMode = false;
                };

                scope.nextQuestion = function() {
                    scope.id++;
                    scope.getQuestion();
                    $('quiz').css("background-color", "cadetblue");   
                };
                
                scope.getIDArr = function(){
                  scope.arr = scope.getQuestion();
                }

                scope.reset();
            }
        }   
    };
    })();

