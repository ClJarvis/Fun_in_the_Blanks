app.controller('tocCtrl', function($scope, $location) {
  $scope.message='Table of Contents';
  $scope.lambForm=function() {
  $location.path ('/lamb_form')
}

  $scope.threelittleForm=function() {
  $location.path ('/threelittle_form')
  }

  $scope.beanstalkForm=function() {
    $location.path ('/beanstalk_form')
  }

});
