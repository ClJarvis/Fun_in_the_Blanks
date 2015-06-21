app.controller('formCtrl', function ($scope, $location, storyService) {
  $scope.message= 'basic form';
  $scope.story= {};

  $scope.getStory = function() {
    $scope.story = storyService.getStory();
    console.log(storyService.getStory());
  }
  $scope.buildStory=function() {
    console.log($scope);
    $location.path ('/story_templates/little_buddy_tmpl', $scope.story)

  }
  $scope.buildStory1=function() {
    $location.path ('/story_templates/three_little_tmpl', $scope.story)
  }

  $scope.buildStory2=function() {
    $location.path ('/story_templates/beanstalk_tmpl', $scope.story)
  // console.log($story.name);
  }
});


