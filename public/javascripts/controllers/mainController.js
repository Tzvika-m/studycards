app.controller('mainCtrl', ['$scope', 'usersFactory', function($scope, usersFactory){
    usersFactory.getUsers().then(function(response){
        $scope.users = response.data;
    });

    $scope.test = "hello";
    }]);