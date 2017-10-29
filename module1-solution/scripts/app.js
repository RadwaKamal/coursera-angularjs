(function(){
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];

   function LunchCheckController($scope){
       
       $scope.mealItems = "";
       $scope.result = {};

       $scope.checkItems = function(){
           var items = $scope.mealItems.replace(/ /g,'').split(',');
           var nonEmptyLen = items.filter(Boolean).length; // Get only length on non-empty strings
            if (nonEmptyLen == 0){
                $scope.result.msg = "Please enter data first";
                setState('error');                                    
            } else if (nonEmptyLen <= 3){
                $scope.result.msg = "Enjoy!";
                setState('success');                                                    
            } else{
                $scope.result.msg = "Too much!";
                setState('success');                                                    
            }
       }

       function setState(state){
           if (state == 'error'){
                $scope.result.error = true;    
                $scope.result.success = false;  
           } else{
                $scope.result.success = true;
                $scope.result.error = false;
           }
       }
   } 

})();