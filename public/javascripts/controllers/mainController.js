app.controller('mainCtrl', ['$scope', 'cardSetsFactory','schoolsFactory',
                    function($scope, cardSetsFactory, schoolsFactory){
    $scope.cards = [];
    $scope.schools = [];
                        
    var handsOnTable = new Handsontable($.find('#htTable')[0], {
        colHeaders: ['Front', 'Back'],
        columns : [{type: 'text', data:'front', width:150}, {type: 'text', data:'back', width:250}],
        minSpareRows : 1,
        data: $scope.cards
    });

    schoolsFactory.getSchools().then(function(schools){
        $scope.schools = schools;
    });

    $scope.cardsetChosen = function() {

        cardSetsFactory.getCardSet($scope.chosenCardSetId).then(function(cardSets){
            handsOnTable.loadData(cardSets.cards);
        });
    }
    }]);