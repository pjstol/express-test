/*global angular*/
angular.module('myApp', ['ngMaterial']).controller('AppCtrl', function($scope,$http) {

  $scope.myDate = new Date();

  $scope.myDate.year = ""+$scope.myDate.getFullYear();
  $scope.myDate.month = ("0" + ($scope.myDate.getMonth()+1)).slice(-2);
  $scope.myDate.date = ("0" + $scope.myDate.getDate()).slice(-2);
  $scope.myDate.stringBusqueda = ""+$scope.myDate.year+$scope.myDate.month+$scope.myDate.date;

  $scope.times = ["10:20", "11:35", "12:50", "13:20", "14:55"];
  $scope.alfa = "http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg";
  $scope.fotos = [];

  $scope.reqDate = function(){
    $scope.myDate.year = ""+$scope.myDate.getFullYear();
    $scope.myDate.month = ("0" + ($scope.myDate.getMonth()+1)).slice(-2);
    $scope.myDate.date = ("0" + $scope.myDate.getDate()).slice(-2);
    $scope.myDate.stringBusqueda = ""+$scope.myDate.year+$scope.myDate.month+$scope.myDate.date;
    
    /*global $http*/
    
    return $http({
        method: 'GET',
        url: '/api',
        params: { 
            date: $scope.myDate.stringBusqueda, 
            year: $scope.myDate.year,  
            day: $scope.myDate.date
        }
    }).then(function(response){
          $scope.fotos = response.data.message.name;
          $scope.alfa = "https://storage.googleapis.com/" + response.data.message[2].bucket.id + "/" + response.data.message[2].id;
          // console.log("Successful call to the API, " + response.data.message.length + " images available for the selected day =)");
          // console.log(response.data.messages);
          console.log(response.data.message);
        });
    }
});
// return $http.get('/api')