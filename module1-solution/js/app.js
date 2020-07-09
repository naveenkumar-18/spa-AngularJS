(function (){
    "use strict";
    angular.module("capApp",[])
    .controller("capController",function ($scope,$filter){
        $scope.name="naveen";
        $scope.capitalize= function (){
            var ucase= $filter("uppercase");
            $scope.name=ucase($scope.name);
        }
    });
})();