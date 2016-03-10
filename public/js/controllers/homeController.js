
var homeController = angular.module('homeController', []);


/*
 * Controller for adding active class to the menu*/
homeController
.controller('menuBar', ['$scope', '$location',
  function ($scope, $location) {
    
    $scope.isActive = function (viewLocation) {
      var service;
      var active;
      
      service = (
        viewLocation.search('service') != -1 &&
        $location.path().search('service') != -1
      );
      
      active = (viewLocation === $location.path() ||
        ($location.path()).indexOf(viewLocation) === 0 || service);
      
      return active;
    };
  }])
.controller('HelloController', ['$scope', '$sce', '$log', '$rootScope',
  function ($scope, $sce, $log, $rootScope) {
    var init = function () {
      $scope.message = 'Howdy Forecast!';
    };
    
    init();
  }
]);
