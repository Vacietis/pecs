(function(){
    'use strict';

    angular
        .module('mainApp')
        .factory('location', location);

    /**
     * location service checks the Url and changes values to disable navigation buttons
     * @param {type} $location
     * @returns {app.location.service_L1.location.location}
     */
    function location($location){
        
        var homeUrl = '/';
        var factOrMythQuizUrl = '/factMyth/quiz';
        
        var isHome = false;
        var isQuiz = false;
        
        var history = [];
        
        var location = {
            checkLocation: checkLocation,
            getCurrentPath: getCurrentPath,
            goToPreviousUrl: goToPreviousUrl,
            goToHome: goToHome,
            isHome: isHome,
            isQuiz: isQuiz
        };
        
        function goToHome(){
            history.length = 0;
            $location.path("/");
        }
        
        function goToPreviousUrl(){
            var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
            $location.path(prevUrl);
        }
        
        function getCurrentPath(){
            return $location.path();
        }
       
       function checkLocation(){
           
           var currentPath = getCurrentPath();
           
            if (history.indexOf(currentPath) === -1) {
                 history.push(currentPath)
    //                console.log("history vertibas : "+history);
             }
                
            if(currentPath === homeUrl){

                location.isHome = true;

            } else if(currentPath === factOrMythQuizUrl){
                
                location.isQuiz = true;
            } 

            else{
                
                location.isHome = false;
                location.isQuiz = false;
                
            }
                
           
       }
        
        return location;
        
    }
    
})();
