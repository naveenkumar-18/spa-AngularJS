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
            var len=arr.length;
            if($scope.string==""){
                len=0;
            }
            if(len==0){
                $scope.message="Please enter data first";
            }
            else if(len<=3){
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