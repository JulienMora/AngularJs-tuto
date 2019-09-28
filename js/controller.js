app.controller("myCtrl", function($scope, $log, $filter) {
    // Variables
    $scope.myArray = [
        {
            id: 1,
            type: "ZONE",
            value: "Zone Analytics"
        },
        {
            id: 2,
            type: "HOME",
            value: "Home Analytics"
        },
        {
            id: 3,
            type: "TEST",
            value: "Test Analytics"
        }
    ];

    $scope.test = "";
    $scope.myDate = "";

    $scope.exportCsv = (type, date) => {
        let dateFormated = $filter('date')(date, 'dd/MM/yyyy');
        $log.log(type, dateFormated)
    }


    $scope.testFunc = (test) => {
        $log.log(test)
    }
});