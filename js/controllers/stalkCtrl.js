app.controller('stalkCtrl', function ($scope, $location) {
  $scope.message = "bean stalk story";
  $scope.story= {};
  $scope.myStory=false;
  $scope.myForm=true;

  $scope.buildStory=function() {
    $scope.myForm=false;
    $scope.myStory=true;
  }

  $scope.tableContents = function () {
    $location.path('/chapters')
  }

});
