(function () {
'use strict';

/**
 * @ngdoc function
 * @name angularJSBootstrapWebApp.controller:AddPersonCtrl
 * @description
 * # AddPersonCtrl
 * Controller of the angularJSBootstrapWebApp
 */
angular.module('angularJSBootstrapWebApp').controller('AddPersonCtrl', addPersonController);
    
addPersonController.$inject = ['$scope', 'personService'];

function addPersonController($scope, personService) {
    
    $scope.Person = {};
    $scope.listPersons = [];
    
    $scope.addPerson = function(Person) {
        alert("Cédula: " + Person.cedula + ", Nombre: " + Person.nombre + ", Apellido: " + Person.apellido + ", Email: " + Person.email);
        
        personService.createPerson(Person).then(function(response) {
            alert("Person Created!!!");
        });
        
        /*personService.findAllPersons().then(function(response) {
            $scope.listPersons = response;
            alert("Ejecute el servicio");
            alert("listPersons: " + $scope.listPersons[0].cedula);
        });*/
        
    };
    
    $scope.cleanPerson = function(personForm) {
        var userConfirm = confirm("¿Clear Form?");
        if (userConfirm === true) {
            $scope.Person = {};
            personForm.cedula.$touched = false;
            personForm.nombre.$touched = false;
            personForm.apellido.$touched = false;
            personForm.edad.$touched = false;
            personForm.email.$touched = false;
        }
    };
}
})();