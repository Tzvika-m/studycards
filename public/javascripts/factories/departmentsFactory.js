/**
 * Created by Zvika on 04/01/2015.
 */
app.factory('departmentsFactory', ['$http', function($http){
    var factory = {};

    factory.getDepartmentById = function (id) {
        return $http.get('/departments/'+id).then(function(repsonse){
            return repsonse.data;
        });
    };

    return factory;
}]);