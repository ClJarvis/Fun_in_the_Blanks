app.controller('howCtrl', function ($scope, $location) {
  $scope.message='How to page';

  $scope.homePage=function() {
  $location.path ('/')
  }
});
