(function(){
    'use strict';

    angular
        .module('otherScience')
        .controller('otherScienceController', otherScienceController);

        function otherScienceController($scope, ngDialog, langService, $controller){  
           
            $scope.otherScienceView = langService;
            
            $scope.showOtherSciencePopUp = function(popUpName){
                ngDialog.open({ 
                    scope: $scope,
                    template: 'app/views/factOrMyth/otherScience/otherScience.popUP.html',
                    className: 'ngdialog-theme-default sciencengDialog',
                    controller: $controller('sciencePopupController', {
                        $scope: $scope,
                        name: popUpName
                    })
                });
            }
            
//            $scope.clickToOpenHistory = function (objIndex) {
//                ngDialog.open({ 
//                    scope: $scope,
//                    template: 'app/views/spaceHistory/historyPopUP.html',
//                    controller: $controller('PopupController', {
//                        $scope: $scope,
//                        name: objIndex
//                    })
//                });
//            };
            
        }
        
    otherScienceController.$inject = ['$scope', 'ngDialog', 'langService', '$controller'];
       
})();