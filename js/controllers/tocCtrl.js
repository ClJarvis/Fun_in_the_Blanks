app.controller('tocCtrl', function ($scope, $location) {
  $scope.message='Table of Contents';
  $scope.lambForm=function() {
  $location.path ('/lamb')
}

  $scope.threelittleForm=function() {
  $location.path ('/pig')
  }

  $scope.beanstalkForm=function() {
    $location.path ('/bean')
  }

  $scope.homePage=function() {
  $location.path ('/chapters')
  }

   $scope.howto=function() {
    $location.path ('/howto')
  }

  $scope.classicForm=function() {
    $location.path ('/classic')
  }

});
