app.controller('formCtrl', function($scope, $location) {
  $scope.message= 'basic form';
  $scope.buildStory=function() {
  $location.path ('/story_templates/little_buddy_tmpl', $scope.story)
  }

});


