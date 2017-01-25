/*global angular*/
angular.module('datepickerBasicUsage',
    ['ngMaterial', 'ngMessages']).controller('AppCtrl', function($scope) {

  $scope.myDate = new Date();

  $scope.myDate.year = ""+$scope.myDate.getFullYear();
  $scope.myDate.month = ("0" + ($scope.myDate.getMonth()+1)).slice(-2);
  $scope.myDate.date = ("0" + $scope.myDate.getDate()).slice(-2);
  $scope.myDate.stringBusqueda = ""+$scope.myDate.year+$scope.myDate.month+$scope.myDate.date;

  $scope.reqDate = function(){
    $scope.myDate.year = ""+$scope.myDate.getFullYear();
    $scope.myDate.month = ("0" + ($scope.myDate.getMonth()+1)).slice(-2);
    $scope.myDate.date = ("0" + $scope.myDate.getDate()).slice(-2);
    $scope.myDate.stringBusqueda = ""+$scope.myDate.year+$scope.myDate.month+$scope.myDate.date;
    }
  $scope.times = ["10:20", "11:35", "12:50", "13:20", "14:55"];
});
