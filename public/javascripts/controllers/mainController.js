app.controller('mainCtrl',
['$scope', 'cardSetsFactory','schoolsFactory', 'departmentsFactory', 'coursesFactory',
function($scope, cardSetsFactory, schoolsFactory, departmentsFactory, coursesFactory){
    $scope.cards = [];
    $scope.schools = [];
    $scope.currentCard = {};

    var handsOnTable = new Handsontable($.find('#htTable')[0], {
        colHeaders: ['צד אחורי', 'צד קדמי'],
        columns : [{type: 'text', data:'back', width:250}, {type: 'text', data:'front', width:150}],
        minSpareRows : 1,
        data: $scope.cards
    });

    handsOnTable.addHook('afterSelection', function(rowStart, columnStart, rowEnd, columnEnd)
    {
        $scope.$apply(function() {
            $scope.currentCard = $scope.cards[rowStart];
        });
    });

     // Creates the flip object on the card


    schoolsFactory.getSchools().then(function(schools){
        $scope.schools = schools;
    });

    $scope.schoolsChange = function(){
        schoolsFactory.getSchoolById($scope.chosenSchool._id).then(function(retSchool){
            $scope.departments = retSchool.departments;
        });
    };

    $scope.departmentsChange = function(){
        departmentsFactory.getDepartmentById($scope.chosenDepartment._id).then(function(retDepartment){
            $scope.courses = retDepartment.courses;
        });
    };

    $scope.coursesChange = function(){
        coursesFactory.getCourseById($scope.chosenCourse._id).then(function(retCourse){
            $scope.cardSets = retCourse.cardSets;
        });
    };

    $scope.cardSetChange = function() {
        cardSetsFactory.getCardSet($scope.chosenCardSet._id).then(function(cardSet){
            $scope.cards = cardSet.cards;
        });
    }

    // TODO : Is watch really neccessary here?
    $scope.$watch('cards', function(newValue, oldValue) {
        handsOnTable.loadData(newValue);
        $scope.currentCard = {};
    });

    }]);