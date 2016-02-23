(function(){
    'use strict';

    angular
        .module('dragTop')
        .controller('dragTopController', dragTopController);

        function dragTopController($scope, langService, ngDialog, $controller, $http){

              var originalDraggables = langService.data.factOrMyth.dragGame.dragQuestions;
              
              $scope.save = langService.data.factOrMyth.dragGame.save;
              
              $scope.dragQuestionCount = 0;
              
              $scope.dbIsClicked = false;
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
                        $scope.dragQuestionCount++;
                        
                        $scope.notDragged = "saved";
                  }
                    
                }
              };

              $scope.sortableOptions = {};
              
              $scope.logModels = function () {
                  $scope.dbIsClicked = true;
                    $scope.newArray = [];
                    $scope.sortingLog = [];
                    var count = 11;
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

                $scope.saveUser();

                    
//                $http.get("http://localhost/infoKiosk/app/widgets/db/dbconection.php")
//                 .then(function (response) {$scope.questionsDB = response.data.records;});
         
                 };
                 
                 $scope.saveUser = function(){
                    $http({
                      method: 'post',
                      url: 'http://localhost/infoKiosk/app/widgets/db/dbconection.php',
                      data: $.param({'questionObj' : $scope.newArray, 'type' : 'save_rank' }),
                      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).
                    success(function(data, status, headers, config) {
                        console.log("succes Post");
//                        if(data.success){
//                            if( $scope.editMode ){
//                                $scope.post.users[$scope.index].id = data.id;
//                                $scope.post.users[$scope.index].name = $scope.tempUser.name;
//                                $scope.post.users[$scope.index].email = $scope.tempUser.email;
//                                $scope.post.users[$scope.index].companyName = $scope.tempUser.companyName;
//                                $scope.post.users[$scope.index].designation = $scope.tempUser.designation;
//                            }else{
//                                $scope.post.users.push({
//                                    id : data.id,
//                                    name : $scope.tempUser.name,
//                                    email : $scope.tempUser.email,
//                                    companyName : $scope.tempUser.companyName,
//                                    designation : $scope.tempUser.designation
//                                });
//                            }
//                            $scope.messageSuccess(data.message);
//                            $scope.userForm.$setPristine();
//                            $scope.tempUser = {};
//
//                        }else{
//                            $scope.messageFailure(data.message);
//                        }
                    }).
                    error(function(data, status, headers, config) {
                        //$scope.codeStatus = response || "Request failed";
                        
                        console.log("fail Post");
                    });
                }
            
        }
        
    dragTopController.$inject = ['$scope', 'langService', 'ngDialog', '$controller', '$http'];
       
})();