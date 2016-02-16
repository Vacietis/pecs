(function(){
    'use strict';

    angular
        .module('fomTest')
        .directive('quiz', quiz);

    function quiz(quizFactory, ngDialog, $controller, $rootScope){
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

                $rootScope.reset = function() {
                    scope.inProgress = false;
                    scope.score = 0;
                    $rootScope.score = scope.score;
                    ngDialog.close();
                }

                scope.getQuestion = function() {
                    var q = quizFactory.getQuestion(scope.id);
                    if(q) {
                        scope.question = q.question;
                        scope.options = q.options;
                        scope.answer = q.answer;
                        scope.answerMode = true;
                        scope.imageSrc = q.image;
                        $rootScope.answerText = q.answerText;
                        $rootScope.testInProgress = true;
                        console.log("testInProgress: "+$rootScope.testInProgress);
                    } else {
//                        scope.quizOver = true;
                        $rootScope.testInProgress = false;
                        console.log("testInProgress: "+$rootScope.testInProgress);
                        ngDialog.open({ 
                        template: 'app/views/factOrMyth/fomTest/fomTest.endResult.popup.html',
                        className: 'ngdialog-theme-default testAnswerngDialog',
                        showClose: false,
                        overlay: false
                        
//                        controller: $controller('testPopupController', {
//                            checkAnswer:  scope.correctAns,
//                            score: scope.score
//                        })
                    });
                    }
                };

                scope.checkAnswer = function(val) {
                    if(val === scope.options[scope.answer]) {
                        scope.score++;
                        $rootScope.score = scope.score;
                        scope.correctAns = true;
                        $rootScope.correctAns = scope.correctAns;
//                        $('quiz').css("background-color", "green");
                    } else {
                        scope.correctAns = false;
                        $rootScope.correctAns = scope.correctAns;
                        $rootScope.score = scope.score;
//                        $('quiz').css("background-color", "red");
                    }
                    
                    ngDialog.open({ 
                        template: 'app/views/factOrMyth/fomTest/popup.answer.popup.html',
                        className: 'ngdialog-theme-default testAnswerngDialog',
                        showClose: false,
                        overlay: false
                        
//                        controller: $controller('testPopupController', {
//                            checkAnswer:  scope.correctAns,
//                            score: scope.score
//                        })
                    });

                    scope.answerMode = false;
                };

                $rootScope.nextQuestion = function() {
                    scope.id++;
                    scope.getQuestion();
//                    $('quiz').css("background-color", "cadetblue");   
                   ngDialog.close();
                };
                
                scope.getIDArr = function(){
                  scope.arr = scope.getQuestion();
                }

                $rootScope.reset();
            }
        }   
    };
    })();

