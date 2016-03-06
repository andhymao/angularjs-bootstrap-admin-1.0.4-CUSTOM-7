'use strict';

/**
 * @ngdoc overview
 * @name angularJswebAppApp
 * @description
 * # angularJswebAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularJSBootstrapWebApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    //'ui.bootstrap',
    'dataGrid',
    'pagination'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/person/addPerson.html',
        controller: 'AddPersonCtrl',
        controllerAs: 'addPerson'
      })
      .when('/listPersons', {
        templateUrl: 'views/person/listPersons.html',
        controller: 'ListPersonsCtrl',
        controllerAs: 'listPersons'
      })
      .otherwise({
        redirectTo: '/'
      });
  });