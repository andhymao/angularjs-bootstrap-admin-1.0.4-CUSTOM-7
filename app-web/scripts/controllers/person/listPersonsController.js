(function () {
'use strict';

/**
 * @ngdoc function
 * @name angularJSBootstrapWebApp.controller:ListPersonsCtrl
 * @description
 * # ListPersonsCtrl
 * Controller of the angularJSBootstrapWebApp
 */
angular.module('angularJSBootstrapWebApp').controller('ListPersonsCtrl', listPersonsController);
    
listPersonsController.$inject = ['$scope', 'personService'];

function listPersonsController($scope, personService) {
    
    $scope.gridOptions = {
        data: [],
        sort: {
            predicate: 'cedula',
            direction: 'asc'
        }
    };
    
    personService.findAllPersons().then(function(response) {
        $scope.gridOptions.data = response;
    });
}
})();