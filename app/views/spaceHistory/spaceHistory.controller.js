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
                    console.log("ENGLISH");
                    $scope.latviaLogo = 'latviaLogo';
                    
                    var historyObjects = langService.data.spaceHistory.spaceObjects;
                    
                    $scope.setScrollableWidth(historyObjects);
                    
                    //lidz galam neiet situacija kad ir uzpiests latvian objects un aizskrolots lidz galam
                    // un tad nospiests wolrd objects, tad nenomainās dati
                    
                } else {
                    
                    $scope.tempVal = "latvian";
                    console.log("LATVIAN");
                    $scope.latviaLogo = 'englishLogo';
                    
                    var latvianHistoryObjects = langService.data.spaceHistory.latvianSpaceObjects;
                    
                    $scope.setScrollableWidth(latvianHistoryObjects);
                }
            }
            
            
            $scope.setScrollableWidth($scope.historyObejcts);
            
            
//            $scope.scrolltoStart = function(){
//                    elem.scrollLeft(0);
//                }
//                
//            $scope.scrolltoEnd = function(){
//                //elem.scrollLeft(elem.scrollWidth());
//                console.log($scope.scrollEndPosition);
//            }
            
//            $scope.scrollto = function (scrollPath){
//                $location.hash(scrollPath);
//                //$anchorScroll.xOffset = 250;
//                $anchorScroll();
//            } 
        }
        
    spaceHistoryController.$inject = ['$scope', 'ngDialog', '$anchorScroll', '$location', '$controller', 'langService', '$rootScope' ];
       
})();