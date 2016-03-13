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
        
        BootstrapDialog.confirm({
            title: 'Información',
            message: '¿Está seguro de almacenar el registro?',
            type: BootstrapDialog.TYPE_INFO,
            closable: false,
            draggable: false,
            btnCancelLabel: 'No',
            btnOKLabel: 'Si',
            btnOKClass: 'btn-info',
            callback: function(result) {
                if (result) {
                    personService.createPerson(Person).then(function(response) {
                        BootstrapDialog.alert({
                            title: 'Perfecto',
                            message: '¡Información almacenada correctamente!',
                            type: BootstrapDialog.TYPE_SUCCESS,
                            closable: true,
                            draggable: true,
                            buttonLabel: 'Aceptar',
                        });
                    });
                }
                else {
                    /* Empty */
                }
            }
        });
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