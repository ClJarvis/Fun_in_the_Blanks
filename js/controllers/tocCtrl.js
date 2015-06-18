app.controller('tocCtrl', function($scope, $location) {
  $scope.message='Table of Contents';
  $scope.lambForm=function() {
  $location.path ('/lamb')
}

  $scope.threelittleForm=function() {
  $location.path ('/threelittle_form')
  }

  $scope.beanstalkForm=function() {
    $location.path ('/beanstalk_form')
  }

});
