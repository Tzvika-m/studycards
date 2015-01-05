/**
 * Created by Zvika on 03/01/2015.
 */
app.factory('schoolsFactory', ['$http', function($http){
    var factory = {};
    factory.getSchools = function(){
        return $http.get('/schools').then(function (response) {
            return response.data;
        });
    };

    factory.getSchoolById = function (id) {
        return $http.get('/schools/' + id).then(function(repsonse){
            return repsonse.data;
        });
    };

    return factory;
}]);