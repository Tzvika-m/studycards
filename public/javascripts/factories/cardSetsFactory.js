app.factory('cardSetsFactory', ['$http', function($http){
    var factory = {};
    factory.getCardSet = function(cardSetId ){
        return $http.get('/cardSets', {params : {cardSetId : cardSetId}}).then(function (response) {
            return response.data;
        });
    };
    return factory;
}]);