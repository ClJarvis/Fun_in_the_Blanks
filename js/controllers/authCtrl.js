app.controller( 'AuthCtrl', ['$scope', '$location', 'Auth', function($scope, $location, Auth) {
  $scope.login = function() {
    Auth.login($scope.user.email, $scope.user.password, function() {
      $location.path('/index');
      $scope.$apply();
    });
  };

  $scope.register = function () {
    Auth.register($scope.user.email, $scope.user.password, function() {
      Auth.login($scope.user.email, $scope.user.password, function() {
        console.log($scope.user.email);
        $location.path('/index');
        $scope.$apply();
        });
    });
  };

  $scope.logout=function(){
        Auth.logout(function() {
          $location.path('/login');
          $scope.$apply();
        });
      };

}]);
