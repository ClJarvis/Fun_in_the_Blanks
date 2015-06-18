angular.module('StoryApp.storyService', []).service('storyService', function() {
  var currentStory= [];
  return {
    setStory :function (story) {
      currentStory = story;
    },
    getStory : function () {
      return currentStory;
    }
  }
})
