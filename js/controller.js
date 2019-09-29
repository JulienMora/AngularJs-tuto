app.controller("myCtrl", function($scope, $log, $filter, serviceExample) {

    // Variables
    $scope.myArray = [
        {
            id: 1,
            type: "ZONE",
            dateStart: "",
            dateEnd: "",
            value: "Zone Analytics",
            available: true,
        },
        {
            id: 2,
            type: "HOME",
            dateStart: "",
            dateEnd: "",
            value: "Home Analytics",
            available: true,
        },
        {
            id: 3,
            type: "TEST",
            dateStart: "",
            dateEnd: "",
            value: "Test Analytics",
            available: false,
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

            //Test service 
            serviceExample.service();
        } else {
            $log.log("Erreur de formatage entre les dates");
        }
    };


    $scope.testFunc = (test) => {
        $log.log(test)
    };
});