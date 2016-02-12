(function(){
    'use strict';

    angular
        .module('dragTop')
        .controller('dragTopController', dragTopController);

        function dragTopController($scope, langService){

              var originalDraggables = langService.data.factOrMyth.dragQuestions;
//              [
//                { title: 'jautajums 1' },
//                { title: 'jaut 2' },
//                { title: 'j3??' },
//                { title: 'waz4?' },
//                { title: 'cool5??' },
//                { title: 'laps6' },
//                { title: '77777' },
//                { title: 'notike8' }
//              ];

              $scope.draggables = originalDraggables.map(function(x){
                return [x];
              });
              $scope.selectedComponents = [];



              $scope.sortingLog = [];

              $scope.draggableOptions = {
                connectWith: ".connected-drop-target-sortable",
                stop: function (e, ui) {
                  // if the element is removed from the first container
                  if (ui.item.sortable.source.hasClass('draggable-element-container') &&
                      ui.item.sortable.droptarget &&
                      ui.item.sortable.droptarget != ui.item.sortable.source &&
                      ui.item.sortable.droptarget.hasClass('connected-drop-target-sortable')) {
                    // restore the removed item
//                    ui.item.sortable.sourceModel.push(ui.item.sortable.model);
//                    ui.item.sortable.sourceModel.slice(ui.item.sortable.model);
                  }
                }
              };

              $scope.sortableOptions = {};
              
              $scope.logModels = function () {
                $scope.newArray = [];
                $scope.sortingLog = [];
                var count = 9;
                var place = 0;
                var logEntry = $scope.selectedComponents.map(function (x) {
                    place++;
                    count--;
                    var tempObj = {"title":x.title, "punkti":count};
                    $scope.newArray.push(tempObj);
                  return tempObj;
                }).join('');
                
                console.log(newArray);
                $scope.sortingLog.push(logEntry);
              };
            
        }
        
    dragTopController.$inject = ['$scope', 'langService'];
       
})();