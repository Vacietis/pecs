(function(){
    'use strict';

    angular
        .module('videoExhibit')
        .controller('videoExhibitController', videoExhibitController);

        function videoExhibitController($scope, langService, ngDialog, $controller){
            
            $scope.videoList = langService;
            $scope.showVideoPopup = function(videPar){
                ngDialog.open({ 
                    scope: $scope,
                    template: 'app/views/videoExhibit/videoExhibit.popUp.html',
                    className: 'ngdialog-theme-default sciencengDialog',
                    controller: $controller('videoPopupController', {
                        $scope: $scope,
                        name: videPar
                    })
                });
            }
        }
        
    videoExhibitController.$inject = ['$scope', 'langService', 'ngDialog', '$controller'];
       
})();