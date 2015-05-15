'use strict';

angular.module('soliloquy')
  .controller('CourseCtrl', function ($scope) {
    $scope.users = [
      {
        id: 1,
        name: "Artie",
        logins: 25,
        lastLogin: "2015-05-01",
        action: "view profile"
      },
      {
        id: 2,
        name: "Jazahn",
        logins: 21,
        lastLogin: "2015-05-13",
        action: "view profile"
      },
      {
        id: 3,
        name: "Mike",
        logins: 1,
        lastLogin: "2013-01-12",
        action: "view profile"
      },
      {
        id: 4,
        name: "Bill",
        logins: 18,
        lastLogin: "2015-04-01",
        action: "view profile"
      }
    ];

  });
