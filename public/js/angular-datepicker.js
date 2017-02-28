/*global angular*/
angular.module('myApp', ['ngMaterial']).controller('AppCtrl', function($scope,$http) {

  $scope.myDate = new Date();

  $scope.myDate.year = ""+$scope.myDate.getFullYear();
  $scope.myDate.month = ("0" + ($scope.myDate.getMonth()+1)).slice(-2);
  $scope.myDate.date = ("0" + $scope.myDate.getDate()).slice(-2);
  $scope.myDate.stringBusqueda = ""+$scope.myDate.year+
                                    $scope.myDate.month+
                                    $scope.myDate.date;

  $scope.times = ["10:20", "11:35", "12:50", "13:20", "14:55"];
  $scope.fotos = [];
  $scope.triton = [];

  /*global $http*/
  $http({
      method: 'GET',
      url: '/api',
      // params: {
      //     date: $scope.myDate.stringBusqueda,
      //     year: $scope.myDate.year,
      //     day: $scope.myDate.date
      // }
  }).then(function(response){
        $scope.triton = response.data.message;
        for (var j = 0; j < $scope.triton.length ; j++){
          $scope.fotos.push($scope.triton[j]);
        }
        $scope.proyecto = $scope.triton[20].id.substr(0,5);
        $scope.camara =  $scope.triton[20].id.substr(5,4);
        $scope.alfa = "https://storage.googleapis.com/" +
                      $scope.triton[$scope.triton.length-1].bucket.id + "/" +
                      $scope.triton[$scope.triton.length-1].id;
      });

  $scope.selectChanged = function(){
    $scope.alfa = "https://storage.googleapis.com/" +
                  $scope.selectedFoto.bucket.id + "/" +
                  $scope.selectedFoto.id;
  }

  $scope.reqDate = function(){
    //función de busqueda para dejar solo horas en el select de la hora
    //y seleccionar las fotos.
    $scope.times = $scope.triton.name;
    }
});
