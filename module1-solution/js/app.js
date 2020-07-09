(function (){
    "use strict";
    angular.module("LunchCheck",[])
    .controller("LunchCheckController", LunchController);
    LunchController.$inject=["$scope"];
    function LunchController ($scope){
        $scope.string="";
        $scope.message="";
        $scope.display= function (){
            var arr=parseString($scope.string);
            if(arr.length==0){
                $scope.message="Please enter data first";
            }
            else if(arr.length<=3){
                $scope.message="Enjoy!";
            }
            else{
                $scope.message="Too much!";
            }
        };
        function parseString (string){
            var arr=string.split(',');
            return arr;
        }
    }
})();