/*global angular*/
angular.module('myApp', ['ngMaterial']).controller('AppCtrl', function($scope,$http) {

  $scope.myDate = new Date();

  $scope.myDate.year = ""+$scope.myDate.getFullYear();
  $scope.myDate.month = ("0" + ($scope.myDate.getMonth()+1)).slice(-2);
  $scope.myDate.date = ("0" + $scope.myDate.getDate()).slice(-2);
  $scope.myDate.stringBusqueda = ""+$scope.myDate.year+$scope.myDate.month+$scope.myDate.date;

  $scope.times = ["10:20", "11:35", "12:50", "13:20", "14:55"];

  $scope.reqDate = function(){
    $scope.myDate.year = ""+$scope.myDate.getFullYear();
    $scope.myDate.month = ("0" + ($scope.myDate.getMonth()+1)).slice(-2);
    $scope.myDate.date = ("0" + $scope.myDate.getDate()).slice(-2);
    $scope.myDate.stringBusqueda = ""+$scope.myDate.year+$scope.myDate.month+$scope.myDate.date;
    // Try to use an http call from angularjs to the backend to fetch files in the static folder
    // $scope.times = array of the filenames in the static folder of the date selected
    /*global $http*/
    return $http.get('/api')
        .then(function(response){
          $scope.times = response.data.message;
          console.log("Successful call to the API, " + response.data.message.length + " images available for the selected day =)");
          // console.log(response.data.messages);
        });
    }

});
