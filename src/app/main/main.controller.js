'use strict';

angular.module('soliloquy')
  .controller('MainCtrl', function ($scope) {
    $scope.current_course_id = null;
    $scope.current_collection_id = null;

    $scope.courses = [
      {
        id: null,
        title: "All",
        collections: []
      },
      {
        id: 1,
        title: "Russian 1A",
        collections: [
          {
            id: 1,
            title: "Week 1"
          },
          {
            id: 2,
            title: "Week 2"
          },
          {
            id: 3,
            title: "Week 3"
          },
          {
            id: 4,
            title: "Week 4"
          }
        ]
      },
      {
        id: 2,
        title: "Chinese 1B",
        collections: [
          {
            id: 5,
            title: "星期 1"
          },
          {
            id: 6,
            title: "星期 2"
          },
          {
            id: 7,
            title: "星期 3"
          },
          {
            id: 8,
            title: "星期 4"
          }
        ]
      },
      {
        id: 3,
        title: "Itallian 22",
        collections: [
          {
            id: 9,
            title: "Nouns"
          },
          {
            id: 10,
            title: "Verbs"
          }
        ]
      },
      {
        id: 4,
        title: "French 33",
        collections: [
          {
            id: 11,
            title: "Week 1"
          },
          {
            id: 12,
            title: "Week 2"
          }
        ]
      },
      {
        id: 5,
        title: "German 44"
      }
    ];

    $scope.collections = [
      {
        id: null,
        title: "All"
      },
      {
        id: 1,
        title: "Week 1"
      },
      {
        id: 2,
        title: "Week 2"
      },
      {
        id: 3,
        title: "Week 3"
      },
      {
        id: 4,
        title: "Week 4"
      },
      {
        id: 5,
        title: "Nouns"
      },
      {
        id: 6,
        title: "Verbs"
      },
      {
        id: 7,
        title: "Adjectives"
      }
    ];

    $scope.exercises = [
      {
        id: 1,
        title: "exercise 1"
      },
      {
        id: 2,
        title: "exercise 2"
      },
      {
        id: 3,
        title: "exercise 3"
      },
      {
        id: 4,
        title: "exercise 4"
      },
      {
        id: 5,
        title: "exercise 5"
      },
      {
        id: 6,
        title: "exercise 6"
      },

    ];

    $scope.courseClass = function(course){
      if($scope.current_course_id == course.id){
        if(course.id == null){
          // build "all" collections
          if(course.collections.length == 0) {
            $scope.courses.forEach(function (crs) {
              if (crs.collections) {
                course.collections = course.collections.concat(crs.collections);
              }
            });
          }
        }
        $scope.collections = course.collections;
        return "btn-primary";
      } else {
        return "";
      }
    };
    $scope.collectionClass = function(collection_id){
      if($scope.current_collection_id == collection_id){
        return "btn-primary";
      } else {
        return "";
      }
    };




  })
  .controller('SearchCtrl', function($scope){




  });
