app.controller('mainCtrl', ['$scope', 'cardSetsFactory','schoolsFactory', 'departmentsFactory', 'coursesFactory',
                    function($scope, cardSetsFactory, schoolsFactory, departmentsFactory, coursesFactory){
    $scope.cards = [];
    $scope.schools = [];
    $scope.testMessage = "hi";

    var handsOnTable = new Handsontable($.find('#htTable')[0], {
        colHeaders: ['Front', 'Back'],
        columns : [{type: 'text', data:'front', width:150}, {type: 'text', data:'back', width:250}],
        minSpareRows : 1,
        data: $scope.cards
    });

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

    $scope.cardsetChosen = function() {
        cardSetsFactory.getCardSet($scope.chosenCardSet._id).then(function(cardSets){
            handsOnTable.loadData(cardSets.cards);
        });
    }
    }]);