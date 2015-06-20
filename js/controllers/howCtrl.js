app.controller('howCtrl', function ($scope, $location) {
  $scope.message='How to page';
  $scope.howto=function() {
  $location.path ('/howto')
  }
});
