(function(){
    'use strict';

    angular
        .module('mainApp')
        .directive('navigation', navigation);

    function navigation($rootScope, $location){
        return {
            retrict : 'E',
            templateUrl: 'app/widgets/templates/template.navigation.html',
            link: function($scope, $element, $attrs) {
//                var elementPath = $attrs.href.substring(1);
//                $scope.$location = location;
//                $scope.$watch('$location.path()', function(locationPath) {
//                    (elementPath === locationPath) ? $element.addClass("current") : $element.removeClass("current");
//                });

            $rootScope.isHomePage = true;
            $rootScope.isQuizPage = false;
            //$rootScope.langselected = 
            
            $rootScope.$on('languageIsChanged',function(event, data){
//                console.log("data.code "+data.code);
//                var temp = data.code;
//                
//                console.log("temp = $('."+temp+"')");

                angular.forEach($rootScope.languages, function(value, key) {

                    if(key === data.code){
//                        $("."+key).attr('disabled','disabled');
                        $rootScope.langselected = key;
                    } else{
//                        $("."+key).removeAttr('disabled');
                    }

                });
                
//                console.log(data.code);
//                if(data.code === "eng"){
//                    $(".eng").attr('disabled','disabled');
//                    $(".lv").removeAttr('disabled'); 
//                } else {
//                    $(".lv").attr('disabled','disabled');
//                    $(".eng").removeAttr('disabled'); 
//                }
                
                
//                if(data.code = 'lv'){
//                    
//                }
//                
//                ve.loaded = false;
//                $timeout(function(){
//                   ve.loaded = true; 
//                }, 500);
            });

            $rootScope.$on('$routeChangeStart', function() { 
                $rootScope.currentPath = $location.path();
                if($rootScope.currentPath === '/'){
                    $rootScope.isHomePage = true;
                    $rootScope.isQuizPage = false;
                } else if($rootScope.currentPath === '/factMyth/quiz'){
                    $rootScope.isQuizPage = true;
                    $rootScope.isHomePage = false;
                } 
                else{
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
