(function(){
    'use strict';

    angular
        .module('mainApp')
        .factory('resize', resize);

    /**
     * resize service function is to check if passed object parameters (width x height)
     * fits in opened window
     * And edits varibles:
     *                    windowSize.objectsResizedHeight,
     *                    windowSize.objectsResizedWidth
     * stores correct size to use them to modify some objects size;
     * @returns {app.resize.service_L1.resize.windowSize}
     */    
    function resize(){
        
        var windowSize = {
            width: $(window).width(),
            height: $(window).height(),
            checkIfFitsInWindow: checkIfFitsInWindow,
            objectsResizedHeight: 0,
            objectsResizedWidth: 0
        };
        
        function checkIfFitsInWindow(objWidth, objHeight){
            
            var objectsRatio = objWidth / objHeight;
            
            console.log("window : "+windowSize.width+"x"+windowSize.height);
            console.log("object original size : "+objWidth+"x"+objHeight);
            
            if(objHeight > windowSize.height || objHeight >= windowSize.height && objWidth >= windowSize.width){
                //-200 to controll space between window and picture
                windowSize.objectsResizedHeight = (windowSize.height - 200);
                windowSize.objectsResizedWidth = windowSize.objectsResizedHeight  * objectsRatio;
                console.log("Height to big, now --> "+windowSize.objectsResizedWidth+" x "+windowSize.objectsResizedHeight);

            } else if (objWidth > windowSize.width){
                
                windowSize.objectsResizedWidth = (windowSize.width - 200);
                windowSize.objectsResizedHeight = windowSize.objectsResizedWidth / objectsRatio;
                console.log("Width to big, now --> "+windowSize.objectsResizedWidth+" x "+windowSize.objectsResizedHeight);
                
            } else {
                
                windowSize.objectsResizedWidth = objWidth;
                windowSize.objectsResizedHeight = objHeight;
                console.log("Object fits in, no changes");
            }
            
            console.log("--RESIZE SERVICE ENDS--");
            
        }
        
        return windowSize;
        
    }
    
})();
