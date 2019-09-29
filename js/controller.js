app.controller("myCtrl", function($scope, $log, $filter) {

    // Variables
    $scope.myArray = [
        {
            id: 1,
            type: "ZONE",
            dateStart: "",
            dateEnd: "",
            value: "Zone Analytics"
        },
        {
            id: 2,
            type: "HOME",
            dateStart: "",
            dateEnd: "",
            value: "Home Analytics"
        },
        {
            id: 3,
            type: "TEST",
            dateStart: "",
            dateEnd: "",
            value: "Test Analytics"
        }
    ];

    $scope.dateStart = "";
    $scope.dateEnd = "";
    $scope.dateMin = new Date();

    //Methods
    $scope.exportCsv = (type, dateStart, dateEnd) => {
        let dateStartFormated = $filter('date')(dateStart, 'yyyy/MM/dd');
        let dateEndFormated = $filter('date')(dateEnd, 'yyyy/MM/dd');

        let dateStartCalc =  new Date(dateStartFormated);
        let dateEndCalc =  new Date(dateEndFormated);

        let diffTime = Math.abs(dateEndCalc -  dateStartCalc);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        $log.log("Type : " + type, "Date Start : " +  dateStartFormated, "Date End : " +  dateEndFormated);
        
        if ( diffDays >= 0 ) {
            // Make the export
            $log.log("DateDiff : " + diffDays);
        } else {
            $log.log("Erreur de formatage entre les dates");
        }
    };


    $scope.testFunc = (test) => {
        $log.log(test)
    };
});