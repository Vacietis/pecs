(function(){
    'use strict';

    angular
        .module('spaceHistory')
        .controller('spaceHistoryController', spaceHistoryController);

        function spaceHistoryController($scope, ngDialog, $anchorScroll, $location, $controller, langService){  
            
//            var executedOnce = false;
//            if(!executedOnce){
//                $location.hash('object-id-19');
//                $anchorScroll();
//                executedOnce = true;
//            }
            
            $scope.historyObejcts = langService;
//            for(var i=0; i<30; i++){
//                $scope.historyObejcts.push({'titles':'item'+i})
//            }
            
            $scope.clickToOpenHistory = function (objIndex) {
                ngDialog.open({ 
                    scope: $scope,
                    template: 'app/views/spaceHistory/historyPopUP.html',
                    controller: $controller('PopupController', {
                        $scope: $scope,
                        name: objIndex
                    })
                });
            };
            
            $scope.scrollto = function (scrollPath){
                $location.hash(scrollPath);
                $anchorScroll();
            }
            
            //$scope.scrollValue = spaceHistoryScroll;
            
//            document.getElementById('testDIV').addEventListener('scroll',function(){
//    
//                //console.log(document.getElementById('testDIV').scrollLeft);
//                $(".log").html("scroll x:"+document.getElementById('testDIV').scrollLeft);
//
//            });
            
//            $location.hash('object-id-19');
//            $anchorScroll();
            
        }
        
    spaceHistoryController.$inject = ['$scope', 'ngDialog', '$anchorScroll', '$location', '$controller', 'langService'];
       
})();