app.controller('mainCtrl', ['$scope', 'usersFactory', function($scope, usersFactory){
    usersFactory.getUsers().then(function(data){
        $scope.cards = data;
    });

    $scope.test = "hi there";
    }]);