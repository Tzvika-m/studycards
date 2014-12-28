app.factory('usersFactory', ['$http', function($http){
    var factory = {};
    factory.getUsers = function(){
        return $http.get('/users');
    };
    return factory;
}]);