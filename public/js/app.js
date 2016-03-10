'use strict';


/* App Module  that includes all the modules needed for this cu.App module
 ngRoute --- for routing
 ui.bootstrap --- for all bootstrap funcitionalities
 cu.Animations  -- custom module for animation that uses ngAnimate module
 controllers -- controller module that has all the controllers used

 */

var cuApp = angular.module('helloWorldApp', [
    'ngRoute',
    'ui.bootstrap',
    'homeController',
    'homeServices',
    'homeDirectives',
    'homeFilters'
]);

/*
 Define all the routing used for this app
 templateUrl --> have the partial url defined
 controller --> what controller to use

 */

cuApp.config(['$routeProvider','$locationProvider',
    function ($routeProvider,$locationProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'views/home.html',
                controller: 'HelloController'
            }).
            otherwise({
                redirectTo: '/home'
            });

            // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }]);

cuApp.run(function ($rootScope) {


});