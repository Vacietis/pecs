(function(){
    'use strict';

    angular
        .module('mainApp')
        .directive('navigation', navigation);

    function navigation($rootScope, location, ngDialog, configuration){
        return {
            retrict : 'E',
            templateUrl: 'app/widgets/templates/template.navigation.html',
            link: function($scope, $element, $attrs) {
                
                //for Space mission if you are in LV
                $rootScope.debugLatvianHistory = configuration.debugLatvianHistory;

                $scope.isHomePage = true;
                $scope.isQuizPage = false;

                $scope.$on('$routeChangeStart', function() { 

                    $scope.state = location.checkLocation();
                    $scope.isHomePage = location.isHome;
                    $scope.isQuizPage = location.isQuiz;
                    
                });
                
                
                $scope.languages = configuration.languageArray;
                $scope.langselected = configuration.defaultLanguage;
                
                /**
                 * gets the configure file to fill language buttons 
                 * and latvian history button if exhibit is located in LV
                 */
//                $http.get('app/core/config.json').then(function(response) {
//                    $scope.languages = response.data.languages;
//                    $rootScope.debugLatvianHistory = response.data.latvianSpaceHistory;
//                });
                

                $scope.back = function () {

                    if(location.getCurrentPath() === '/factMyth/quiz' && $rootScope.testInProgress){

                        ngDialog.open({ 
                            template: 'app/widgets/popup/check.Popup.html',
                        });

                    } else {

                        location.goToPreviousUrl();

                    }   
                 };

                $scope.goBackHistory = function(){
                     location.goToPreviousUrl();
                     ngDialog.close();

                     // for quiz test
                     $rootScope.testInProgress = false;
                }
                
                $scope.home = function () {
            
                    if(location.getCurrentPath() === '/factMyth/quiz' && $rootScope.testInProgress){

                        ngDialog.open({ 
                            template: 'app/widgets/popup/check.Popup.html',
                        });

                    } else {

                        location.goToPreviousUrl();

                    }   

                };
                
                $scope.languageIsclicked = function(par){
                    
                    angular.forEach($rootScope.languages, function(value, key) {

                        if(key === par) $scope.langselected = key;
    //                        $("."+key).attr('disabled','disabled');

                    });
                    
                }
                
                /**
                 * event triggers when the one of language buttons is clicked
                 */
//                $rootScope.$on('languageIsChanged',function(event, data){

                   

//                });


                }
          
        };
    }
    })();
