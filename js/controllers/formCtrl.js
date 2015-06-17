app.controller('formCtrl', function($scope, $location) {
  $scope.message= 'basic form';
  $scope.buildStory=function() {
  $location.path ('/story_templates/little_buddy_tmpl', $scope.story)

  }
  $scope.buildStory=function() {
  $location.path ('/story_templates/three_little_tmpl', $scope.story)
  }

  $scope.buildStory=function() {
  $location.path ('/story_templates/beanstalk_tmpl', $scope.story)
  }
});


