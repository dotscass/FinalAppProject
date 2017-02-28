angular.module('myNews.controllers', [])
.controller("reminderCtrl", function ($scope, service1) {
    $scope.reminder={};
    var reminder;
    //$scope.reminder.priority="Medium";
    var storage=localStorage.getItem("url");
   // console.log(storage);

    if (storage===null){
        $scope.submit=true;
        $scope.reminder.priority="Medium";
        $scope.reminder.complete=false;

    }else{
        $scope.submit=false;
        service1.getBlob(callbackOK, callbackNOK, storage);
        function callbackOK(response){
            //console.log(response);
            $scope.reminder.title=response.title;
            $scope.reminder.description=response.description;
            $scope.reminder.priority=response.priority;
            $scope.reminder.complete=response.complete;
        }
        function callbackNOK(errorstatus){
            console.log(errorstatus);
        }
        
    }


    //$scope.submit=true;
    $scope.submitb=function(){
        $scope.submit=false;
        reminder=$scope.reminder;
        //console.log(reminder);

        service1.postBlob(reminder, callbackOK, callbackNOK);
        function callbackOK(response){
         //console.log(response);
         // $scope.reminder.title=response.title;
         // $scope.reminder.description=response.description;
         // $scope.reminder.priority=response.priority;
         // $scope.reminder.complete=response.complete;

         
     }
     function callbackNOK(errorstatus){
        console.log(errorstatus);
    }

};

$scope.update=function(){
    reminder=$scope.reminder;
 service1.putBlob(callbackOK, callbackNOK, reminder);
 function callbackOK(response){
   
   // $scope.reminder.title=response.title;
   // console.log(response.title);
   // $scope.reminder.description=response.description;
   // $scope.reminder.priority=response.priority;
   // $scope.reminder.complete=response.complete;


}
function callbackNOK(errorStatus){
        console.log(errorStatus);
        
    }
};

$scope.delete=function(){
    // service1.deleteBlob(callbackOK, callbackNOK);
    // function callbackOK(response){
        localStorage.removeItem("url");
        $scope.reminder.title="";
        $scope.reminder.description="";
         $scope.reminder.priority="Medium";
         $scope.submit=true;
        $scope.reminder.complete=false;



    
    // function callbackNOK(errorStatus, errorStatusText){
    //     console.log(errorstatus);
    //     console.log(errorStatusTexttatus);
    // }



        //$scope.reminder.priority="";


    };

});	
