(function(){
    'use strict';

    angular
        .module('dragTop')
        .controller('dragTopController', dragTopController);

        function dragTopController($scope, langService, ngDialog, $controller, $http, $timeout){

              var originalDraggables = langService.data.factOrMyth.dragGame.dragQuestions;
              
              $scope.save = langService.data.factOrMyth.dragGame.save;
              
              $scope.dragQuestionCount = 0;
              
              $scope.showLoading = false;
              $scope.dbIsReady = false;
              
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

              $scope.clickToOpenDragGame = function(isShown){
                  ngDialog.open({ 
                    scope: $scope,
                    template: 'app/views/factOrMyth/dragTop/dragTop.popup.html',
                    className: 'ngdialog-theme-default dragngDialog',
                     controller: $controller('PopupDragController', {
                        $scope: $scope,
                        isShown: isShown
                        })
                    
                    });
              }
              
              $scope.clickToOpenDragGame(false);
              
              $scope.closePop = function(){
                  ngDialog.close();
              }

              $scope.draggables = originalDraggables.map(function(x){
                return [x];
              });
            
            $scope.orderByFunction = function(friend){
                return parseInt(friend.points);
            };
            
              $scope.selectedComponents = [];
//                for(var i= 0; i<=10; i++){
//                    $scope.selectedComponents.push({"question": "jautajums"+i});
//                }
//            console.log($scope.selectedComponents);



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
                        $scope.dragQuestionCount++;
                        
                        $scope.notDragged = "saved";
                  }
                    
                }
              };

              $scope.sortableOptions = {};
              
              $scope.logModels = function () {
                  $scope.showLoading = true;
                  $scope.dbIsReady = false;
                    $scope.newArray = [];
                    $scope.sortingLog = [];
                    var count = 11;
                    var place = 0;
                    var logEntry = $scope.selectedComponents.map(function (x) {
                        place++;
                        count--;
                        var tempObj = {"question":x.title, "points":count};
                        $scope.newArray.push(tempObj);
                      return tempObj;
                    }).join('');

                    console.log($scope.newArray);
//                    $scope.sortingLog.push(logEntry);
//
                $scope.saveRank();

                };
            
                $scope.saveRank = function(){
                    $http({
                      method: 'post',
                      url: 'http://localhost/infoKiosk/app/widgets/db/dbInsert.php',
                      data: $.param({'questionArr' : $scope.newArray}),
                      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                        
                    }).
                    success(function(data, status, headers, config) {
                        console.log("succses Post");
                        console.log(data);
                        
                        $timeout(function() {
                            $scope.getRank()
                        }, 0); 
                        
                    }).
                    error(function(data, status, headers, config) {
                        //$scope.codeStatus = response || "Request failed";
                        
                        console.log("fail Post");
                    });
                }
            
                $scope.getRank = function(){
                    $http.get("http://localhost/infoKiosk/app/widgets/db/dbGet.php")
                     .then(function (response) {
                            $scope.questionsDB = response.data.records;
                            $scope.orderByFunction($scope.questionsDB);
                            $scope.dbIsReady = true;
                            $scope.showLoading = false;
                        });
                }
            
        }
        
    dragTopController.$inject = ['$scope', 'langService', 'ngDialog', '$controller', '$http', '$timeout'];
       
})();