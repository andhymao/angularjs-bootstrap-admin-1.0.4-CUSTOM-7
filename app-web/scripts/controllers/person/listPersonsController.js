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
        data: [{
            "cedula": 16071759,
            "nombre": 'Andrés Mauricio',
            "apellido": 'Ocampo Salazar',
            "edad": 34,
            "email": 'andresm.ocampo@carvajal.com'
        },
        {
            "cedula": 30237977,
            "nombre": 'Diana Marcela',
            "apellido": 'Gonzalez Montoya',
            "edad": 33,
            "email": 'dyanymarce@gmail.com'
        },
        {
            "cedula": 24315851,
            "nombre": 'Olga Cecilia',
            "apellido": 'Montoya Alvarez',
            "edad": 62,
            "email": 'olga.cecilia@gmail.com'
        },
        {
            "cedula": '10245353',
            "nombre": 'Mario Augusto',
            "apellido": 'Ocampo Gomez',
            "edad": 58,
            "email": 'mario.ocampo@carvajal.com'
        },
        {
            "cedula": '24316102',
            "nombre": 'Dora Inés',
            "apellido": 'Salazar Alarcón',
            "edad": 62,
            "email": 'doraines@gmail.com'
        },
        {
            "cedula": '35458965',
            "nombre": 'David Augusto',
            "apellido": 'Ocampo Salazar',
            "edad": 30,
            "email": 'daugos@gmail.com'
        },
        {
            "cedula": '10245359',
            "nombre": 'Carlos Alberto',
            "apellido": 'Arias Briñez',
            "edad": 30,
            "email": 'carlos.arias@gmail.com'
        }],
        sort: {
            predicate: 'cedula',
            direction: 'asc'
        }
    };
    
    /*$scope.getListPersons = function () { personService.findAllPersons().then(function(response) {
        $scope.listPersons = response;
        return  
    })};*/
}
})();