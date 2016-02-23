(function(){
    'use strict';

    angular
        .module('mainApp')
        .directive('navigation', navigation);

    function navigation($rootScope, $location){
        return {
            retrict : 'E',
            templateUrl: 'app/widgets/template.navigation.html',
            link: function($scope, $element, $attrs) {
//                var elementPath = $attrs.href.substring(1);
//                $scope.$location = location;
//                $scope.$watch('$location.path()', function(locationPath) {
//                    (elementPath === locationPath) ? $element.addClass("current") : $element.removeClass("current");
//                });

            $rootScope.isHomePage = true;
            $rootScope.isQuizPage = false

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
        
            
            }
          
        };
    }
    })();
