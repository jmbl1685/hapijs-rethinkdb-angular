'use strict';

angular.module('myApp', [])
  .controller('myController', function ($scope, $http) {

    $scope.title = "Image Gallery";
    $scope.images = [];

    $http.get('/image').then((res) => {

      $scope.images = res.data;

    }).catch((err) => {
      console.log(err);
    });

  });

