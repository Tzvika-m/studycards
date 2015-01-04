/**
 * Created by Zvika on 04/01/2015.
 */
app.factory('coursesFactory', ['$http', function($http){
    var factory = {};

    factory.getCourseById = function (id) {
        return $http.get('/courses/'+id).then(function(repsonse){
            return repsonse.data;
        });
    };

    return factory;
}]);