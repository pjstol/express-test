angular.module('datepickerBasicUsage',
    ['ngMaterial', 'ngMessages']).controller('AppCtrl', function($scope) {

  $scope.myDate = new Date();

  $scope.myDate.year = $scope.myDate.getFullYear();
  $scope.myDate.month = $scope.myDate.getMonth()+1;
  $scope.myDate.date = $scope.myDate.getDate();

  var stringBusqueda = $scope.year + $scope.month + $scope.date;

  // $scope.myDate = new Date();

  // $scope.minDate = new Date(
  //     $scope.myDate.getFullYear(),
  //     $scope.myDate.getMonth() - 2,
  //     $scope.myDate.getDate());
  //
  // $scope.maxDate = new Date(
  //     $scope.myDate.getFullYear(),
  //     $scope.myDate.getMonth() + 2,
  //     $scope.myDate.getDate());

  // $scope.onlyWeekendsPredicate = function(date) {
  //   var day = date.getDay();
  //   return day === 0 || day === 6;
  // };


});
