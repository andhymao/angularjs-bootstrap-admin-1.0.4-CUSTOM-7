(function () {
'use strict';

/**
 * @ngdoc function
 * @name angularJSBootstrapWebApp.controller:PersonService
 * @description
 * # PersonService
 * Service of the angularJSBootstrapWebApp
 */
angular.module('angularJSBootstrapWebApp').factory('personService', personService);
    
personService.$inject = ['$http', '$q'];

function personService($http, $q) {
    
    var url = "http://localhost:14221/JEE7RESTServiceProject/webresources/RESTFulServices/";
    var service = {};
    
    /**
     * @createPerson
     *
     */
    service.createPerson = function(Person) {
        
        var deferred = $q.defer();

        $http({
            method: 'POST',
            url: url + "createPerson/",
            data: JSON.stringify(Person)
        })
        .success(function(response) {
            console.log(response);
            deferred.resolve(response);
        })
        .error(function(error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };
    
    /**
     * @findAllPersons
     *
     */
    service.findAllPersons = function() {
        
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: url + "findAllPersons/",
            dataType: 'json'
        })
        .success(function(response) {
            console.log(response);
            deferred.resolve(response);
        })
        .error(function (error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };
    
    return service;
}
})();