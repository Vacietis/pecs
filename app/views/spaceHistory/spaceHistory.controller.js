(function(){
    'use strict';

    angular
        .module('spaceHistory')
        .controller('spaceHistoryController', spaceHistoryController);

        function spaceHistoryController($scope, ngDialog, $anchorScroll, $location, $document, $window, $rootScope){  
            
//            var executedOnce = false;
//            if(!executedOnce){
//                $location.hash('object-id-19');
//                $anchorScroll();
//                executedOnce = true;
//            }
            
            $scope.historyObejcts = [];
            for(var i=0; i<30; i++){
                $scope.historyObejcts.push({'titles':'item'+i})
            }
            
            $scope.clickToOpenHistory = function () {
                ngDialog.open({ 
                    template: 'app/views/factOrMyth/fomTest/popUp.html',
                    controller: 'SomeController'
                });
            };
            
            $scope.scrollto = function (scrollPath){
                $location.hash(scrollPath);
                $anchorScroll();
            }
            
            document.getElementById('testDIV').addEventListener('scroll',function(){
    
                //console.log(document.getElementById('testDIV').scrollLeft);
                $(".log").html("scroll x:"+document.getElementById('testDIV').scrollLeft);

            });
            
//            $location.hash('object-id-19');
//            $anchorScroll();
            
        }
        
    spaceHistoryController.$inject = ['$scope', 'ngDialog', '$anchorScroll', '$location', '$document', '$window', '$rootScope'];
       
})();