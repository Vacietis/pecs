(function(){
    'use strict';

    angular
        .module('mainApp')
        .run(startRun);

    function startRun($rootScope, $location, $http, langService, ngDialog, $controller){
        $rootScope.defaultLanguage = 'eng';
        var history = [];
        $rootScope.currentPath = null;
        $rootScope.lang = langService;

        $rootScope.$on('$routeChangeSuccess', function() {
            
            //jauztaisa ifs lai pusho masiva tikai uniqe vertibas
            history.push($location.$$path);
            
//            if(history.length == 0){
//                history.push($location.$$path);
//            } else {
//                angular.forEach(history, function(value, key) {
//
//                    if(value !== $location.$$path){
//                        console.log("JAUNS array elements : "+$location.$$path);   
//                        history.push($location.$$path);
//                    } else {
//                        console.log("esošie: "+$location.$$path);
//                    }
//                    
//                });
//            }
        });

        $rootScope.back = function () {
            if($rootScope.currentPath === '/factMyth/quiz' && $rootScope.testInProgress){
                ngDialog.open({ 
                    template: 'app/widgets/checkPopup/check.Popup.html',
                    });
            } else {
                 var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
                 $location.path(prevUrl);
            }   
        };
        
        $rootScope.goBackHistory = function(){
             var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
             $location.path(prevUrl);
             ngDialog.close();
             $rootScope.testInProgress = false;
        }
        
        $rootScope.closePopup = function(){
            ngDialog.close();
        }

        $rootScope.home = function () {
            history.length = 0;
            $location.path("/");
        };
        
        $rootScope.$on('$routeChangeStart', function() { 
            $rootScope.currentPath = $location.path();
            if($rootScope.currentPath === '/'){
                $rootScope.isHomePage = true;
                $rootScope.isQuizPage = false;
            } else if($rootScope.currentPath === '/factMyth/quiz'){
                $rootScope.isQuizPage = true;
                $rootScope.isHomePage = false;
            } else{
                $rootScope.isHomePage = false;
                $rootScope.isQuizPage = false;
            }
        });
        
//        $routeScope.checkPath = function(path){
//            $rootScope.currentPath = $location.path();
//        }
        
//        $rootScope.isActive = function(viewLocation) {
//            return viewLocation === $location.path();
//        };
        
        $rootScope.isHomePage = $location.path() === '#/';

//        $rootScope.stendi = [];
//        $http.get('lang/'+$rootScope.defaultLanguage+'.json').then(function(response) {
//            $rootScope.stendi = response.data.stendi;
//            
//        });
//
//        $rootScope.langChange = function (language) {
//            $http.get('lang/'+language+'.json').then(function(response) {
//                $rootScope.stendi = response.data.stendi;
//                console.log(response.data.stendi);
//            });
//        };
        
        

        $rootScope.languages = [];
        $http.get('app/core/config.json').then(function(response) {
            $rootScope.languages = response.data.languages;
            $rootScope.debugLatvianHistory = response.data.latvianSpaceHistory;
        });
    }
    
    startRun.$inject = ['$rootScope', '$location', '$http', 'langService', 'ngDialog', '$controller'];
    
})();