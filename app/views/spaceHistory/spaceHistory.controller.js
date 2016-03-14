(function(){
    'use strict';

    angular
        .module('spaceHistory')
        .controller('spaceHistoryController', spaceHistoryController);

        function spaceHistoryController($scope, ngDialog, $anchorScroll, $location, $controller, langService, $rootScope){  
                
            $scope.historyObejcts = langService.data.spaceHistory.spaceObjects;
            
            
            $scope.setScrollableWidth = function(spaceObjectArray){
                var oneContainerwidth = 240;
                var scrollContainerDivSize = (spaceObjectArray.length * oneContainerwidth);
                
                //diference between element scroll position and actual conteiner width
                var diffScrollWidth = 798;
                
                console.log("length: "+spaceObjectArray.length);
            
                document.getElementById("scrollLength").style.minWidth = (scrollContainerDivSize) +"px";
                
                
                $scope.scrollEndPosition = (scrollContainerDivSize-diffScrollWidth);
                console.log("scrollLength: "+(scrollContainerDivSize-diffScrollWidth));
                
            }
            
            
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
            
            $scope.tempVal = "english";
            $scope.openOtherHistory = function(changeLang){
                if($scope.tempVal === 'latvian' && changeLang === true){
                    
                    $scope.tempVal = "english";
                    $scope.latviaLogo = 'latviaLogo';
                    
                    var historyObjects = langService.data.spaceHistory.spaceObjects;
                    
                    $scope.setScrollableWidth(historyObjects);
                    
                    console.log("END "+ $scope.isScrolledToEnd);
                    console.log("START "+$scope.isScrolledToStart);
                    
                    if($scope.isScrolledToEnd){
                        $rootScope.$broadcast('endPosition',{});
                    }
                    
                    //lidz galam neiet situacija kad ir uzpiests latvian objects un aizskrolots lidz galam
                    // un tad nospiests wolrd objects, tad neaizscrollojas lidz world object beigam
                    // un neparadas ka var pascrollot pa labi
                    
                } else {
                    
                    $scope.tempVal = "latvian";
                    $scope.latviaLogo = 'englishLogo';
                    
                    var latvianHistoryObjects = langService.data.spaceHistory.latvianSpaceObjects;
                    
                    console.log("END "+ $scope.isScrolledToEnd);
                    console.log("START "+ $scope.isScrolledToStart);
                    
                    if($scope.isScrolledToEnd){
                        $rootScope.$broadcast('endPosition',{});
                    }
                    
                    $scope.setScrollableWidth(latvianHistoryObjects);
                }
            }
            
            
            $scope.setScrollableWidth($scope.historyObejcts);
            
        }
        
    spaceHistoryController.$inject = ['$scope', 'ngDialog', '$anchorScroll', '$location', '$controller', 'langService', '$rootScope' ];
       
})();