/*global angular*/
angular.module('datepickerBasicUsage',
    ['ngMaterial', 'ngMessages']).controller('AppCtrl',['$scope','$http', function($scope,$http) {

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
    // Try to use an http call from angularjs to the backend to fetch files in the static folder
    // $scope.times = array of the filenames in the static folder of the date selected
    /*global $http*/
    return $http({
      method: 'GET',
      url: '/'
      }).then(function successCallback(response) {
        console.log(response);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }
  $scope.times = ["10:20", "11:35", "12:50", "13:20", "14:55"];
}]);
