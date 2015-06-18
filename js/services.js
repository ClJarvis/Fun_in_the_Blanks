'use strict'
/*///// services /////*/

angular.module('StoryApp.services', []).
  value('version', '0.1').service('storyService', function() {
    var currentStory = {};
    return {
      setStory : function (story) {
        currentStory = story;
      },
      getStory : function () {
        console.log(currentStory);
      }
    }
  })
