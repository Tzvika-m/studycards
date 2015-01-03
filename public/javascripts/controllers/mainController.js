app.controller('mainCtrl', ['$scope', 'cardSetsFactory', function($scope, cardSetsFactory){
    $scope.cards = [];
    var handsOnTable = new Handsontable($.find('#htTable')[0], {
        colHeaders: ['Front', 'Back'],
        columns : [{type: 'text', data:'front', width:150}, {type: 'text', data:'back', width:250}],
        minSpareRows : 1,
        data: $scope.cards
    });

    $scope.cardsetChosen = function() {

        cardSetsFactory.getCardSet($scope.chosenCardSetId).then(function(cardSets){
            handsOnTable.loadData(cardSets.cards);
        });
    }
    }]);