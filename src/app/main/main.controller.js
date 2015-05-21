'use strict';

angular.module('soliloquy')
  .controller('MainCtrl', function ($scope) {
    $scope.current_course_id = null;
    $scope.current_collection_id = 0;

    $scope.courses = [
      {
        id: null,
        title: 'All',
        collections: []
      },
      {
        id: 1,
        title: 'Russian 1A',
        collections: [
          {
            id: 1,
            title: 'Week 1',
            exercises: [
              {
                id: 1,
                title: 'exercise 1'
              },
              {
                id: 2,
                title: 'exercise 2'
              }
            ]
          },
          {
            id: 2,
            title: 'Week 2',
            exercises: [
              {
                id: 3,
                title: 'exercise 3'
              },
              {
                id: 4,
                title: 'exercise 4'
              }
            ]
          },
          {
            id: 3,
            title: 'Week 3',
            exercises: [
              {
                id: 5,
                title: 'exercise 5'
              },
              {
                id: 6,
                title: 'exercise 6'
              }
            ]
          },
          {
            id: 4,
            title: 'Week 4',
            exercises: [
              {
                id: 7,
                title: 'exercise 7'
              },
              {
                id: 8,
                title: 'exercise 8'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Chinese 1B',
        collections: [
          {
            id: 5,
            title: '星期 1',
            exercises: [
              {
                id: 9,
                title: '练习 1'
              },
              {
                id: 10,
                title: '练习 2'
              }
            ]
          },
          {
            id: 6,
            title: '星期 2',
            exercises: [
              {
                id: 11,
                title: '练习 3'
              },
              {
                id: 12,
                title: '练习 4'
              }
            ]
          },
          {
            id: 7,
            title: '星期 3'
          },
          {
            id: 8,
            title: '星期 4'
          }
        ]
      },
      {
        id: 3,
        title: 'Itallian 22',
        collections: [
          {
            id: 9,
            title: 'Nouns'
          },
          {
            id: 10,
            title: 'Verbs'
          }
        ]
      },
      {
        id: 4,
        title: 'French 33',
        collections: [
          {
            id: 11,
            title: 'Week 1'
          },
          {
            id: 12,
            title: 'Week 2'
          }
        ]
      },
      {
        id: 5,
        title: 'German 44'
      }
    ];

    $scope.courseClass = function(course){
      if($scope.current_course_id == course.id){
        if(course.id == null){
          // build 'all' collections
          if(course.collections.length == 0) {
            $scope.courses.forEach(function (crs) {
              if (crs.collections) {
                course.collections = course.collections.concat(crs.collections);
              }
            });
          }
        }
        $scope.collections = course.collections;
        return 'btn-primary';
      } else {
        return '';
      }
    };
    $scope.collectionClass = function(collection){
      if(collection) {
        if($scope.current_collection_id == collection.id){
          $scope.exercises = collection.exercises;
          return 'btn-primary';
        } else {
          return '';
        }
      } else {
        if($scope.current_collection_id == 0){
          return 'btn-primary';
        }
      }

    };
    $scope.collectionClick = function(id){
      // TODO: refactor this out and put it into an ng-init as well as a click
      $scope.current_collection_id = id;
      if($scope.current_collection_id == 0){
        // get all exercises for the current course
        $scope.courses.forEach(function(crs){
          if(crs.id == $scope.current_course_id){
            $scope.exercises = [];
            crs.collections.forEach(function(col){
              //$scope.exercises.concat(col.exercises);
            });
          }
        });
      }
    };






  })
  .controller('SearchCtrl', function($scope){




  });
