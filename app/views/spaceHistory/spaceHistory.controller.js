(function(){
    'use strict';

    angular
        .module('spaceHistory')
        .controller('spaceHistoryController', spaceHistoryController);

        function spaceHistoryController($scope, ngDialog, $anchorScroll, $location, $controller, langService, $rootScope){  
                
            $scope.historyObejcts = langService.data.spaceHistory.spaceObjects;
            
            $scope.clickToOpenHistory = function (objIndex) {
                ngDialog.open({ 
                    scope: $scope,
                    template: 'app/views/spaceHistory/historyPopUP.html',
                    controller: $controller('PopupController', {
                        $scope: $scope,
                        name: objIndex,
                        historyObj : $scope.tempVal
                    })
                });
            };
            
            $scope.openOtherHistory = function(changeLang){
                if($scope.tempVal === 'latvian' && changeLang === true){
                    $scope.historyObejcts = langService.data.spaceHistory.spaceObjects;
                    $scope.tempVal = "english";
                    console.log("ENGLISH");
                    $scope.latviaLogo = 'latviaLogo';
                    
                } else {
                    $scope.historyObejcts = langService.data.spaceHistory.latvianSpaceObjects;
                    $scope.tempVal = "latvian";
                    console.log("LATVIAN");
                    $scope.latviaLogo = 'englishLogo';
                }
            }
            
            $scope.scrollto = function (scrollPath){
                $location.hash(scrollPath);
                //$anchorScroll.xOffset = 250;
                $anchorScroll();
            } 
        }
        
    spaceHistoryController.$inject = ['$scope', 'ngDialog', '$anchorScroll', '$location', '$controller', 'langService', '$rootScope' ];
       
})();