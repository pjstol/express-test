/*global angular*/
angular.module('myApp', ['ngMaterial']).controller('AppCtrl', function($scope,$http) {

  $scope.myDate = new Date();

  $scope.myDate.year = ""+$scope.myDate.getFullYear();
  $scope.myDate.month = ("0" + ($scope.myDate.getMonth()+1)).slice(-2);
  $scope.myDate.date = ("0" + $scope.myDate.getDate()).slice(-2);
  $scope.myDate.stringBusqueda = ""+$scope.myDate.year+
                                    $scope.myDate.month+
                                    $scope.myDate.date;

  $scope.times = [];
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
        $scope.fotos = response.data.message;
        console.log($scope.fotos);
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
  };

  $scope.reqDate = function(){
    
    // $scope.myDate = new Date();

    $scope.myDate.year = ""+$scope.myDate.getFullYear();
    $scope.myDate.month = ("0" + ($scope.myDate.getMonth()+1)).slice(-2);
    $scope.myDate.date = ("0" + $scope.myDate.getDate()).slice(-2);
    $scope.myDate.stringBusqueda = ""+$scope.myDate.year+
                                      $scope.myDate.month+
                                      $scope.myDate.date;

    for (var i = 0; i < $scope.triton.length ; i++){
      $scope.times.push($scope.fotos[i].id);
    }
    
    function dia(a){
      return a.indexOf($scope.myDate.stringBusqueda) > -1;
    }
    
    Array.prototype.toHours = function(){
      var temp = [];
      for (var j = 0; j < this.length; j++){
        temp.push(this[j].substr(17,2) + ':' + this[j].substr(19,2));
      }
      return temp;
    }
    
    $scope.times = $scope.times.filter(dia).toHours();
    
  };
  console.log("Solo para comprobar git repository");
  $scope.selectedHour = function(){
    $scope.alfa = "https://storage.googleapis.com/" +
                  $scope.time.bucket.id + "/" +
                  $scope.time.id;
  }
  
  
});
