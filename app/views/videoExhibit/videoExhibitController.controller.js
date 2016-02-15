(function(){
    'use strict';

    angular
        .module('videoExhibit')
        .controller('videoExhibitController', videoExhibitController);

        function videoExhibitController($scope, langService, ngDialog, $controller, $route){
            
            $scope.videoList = langService;
            
            var paramValue = $route.current.$$route.paramExample;
            $scope.clickedPath = paramValue;
            
            $scope.showVideoPopup = function(videPar, fromTemplate){
                if( $scope.swiping ) { return; }
                ngDialog.open({ 
                    scope: $scope,
                    template: 'app/views/videoExhibit/videoExhibit.popUp.html',
                    className: 'ngdialog-theme-default videongDialog',
                    controller: $controller('videoPopupController', {
                        $scope: $scope,
                        name: videPar,
                        list: fromTemplate
                    })
                });
            }
        }
        
    videoExhibitController.$inject = ['$scope', 'langService', 'ngDialog', '$controller', '$route'];
       
})();