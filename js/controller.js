app.controller("myCtrl", function($scope, $log, $filter, serviceExample, $document) {

    // Variables
    $scope.myArray = [
        {
            id: 1,
            type: "ZONE",
            dateStart: "",
            dateEnd: "",
            rangePicker: {
                start: "10/10/2010",
                end: "17/10/2010"
            },
            value: "Zone Analytics",
            available: true,
        },
        {
            id: 2,
            type: "HOME",
            dateStart: "",
            dateEnd: "",
            rangePicker: {
                start: "15/10/2010",
                end: "24/10/2010"
            },
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

        //$log.log("Type : " + type, "Date Start : " +  dateStartFormated, "Date End : " +  dateEndFormated);
        
        if ( diffDays >= 0 ) {
            // Make the export
           //$log.log("DateDiff : " + diffDays);

            //Test service 
            serviceExample.service();
        } else {
            //$log.log("Erreur de formatage entre les dates");
        }
    };

    $scope.setDateRange = (type) => {
        $log.log("click on setDateRangeFunc");
        $scope.myArray.map(function(el) {
            //console.log(el);
            if (el.type === type) {
                //console.log(type)
                el.rangePicker.start = "00/00/0000";
                el.rangePicker.end = "11/11/1111";
            }
        });
    };

    var prettifyPeriods = (model) => {
        model.map(function(el) {
            //console.log(el)
            if (el.rangePicker) {
                Object.assign(el, {"prettifyPeriod": el.rangePicker.start + " to " + el.rangePicker.end});
            }
        });
    };

    prettifyPeriods($scope.myArray);

    //console.log($scope.myArray);

    $scope.testFunc = (test) => {
        $log.log(test)
    };

    /*
    *   Chartjs 
    */

    /*

    $scope.chartjsDatas = {
        datas: {
            labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai",	"Sao Paulo",	"New York",	"Karachi","Buenos Aires",	"Delhi","Moscow"],
            datasets: [{
                label: 'Series 1', // Name the series
                data: [500,	50,	2424,	14040,	14141,	4111,	4544,	47,	5555, 6811], // Specify the data values array
                fill: false,
                borderColor: '#2196f3', // Add custom color border (Line)
                backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            },
                    {
                label: 'Series 2', // Name the series
                data: [1288,	88942,	44545,	7588,	99,	242,	1417,	5504,	75, 457], // Specify the data values array
                fill: false,
                borderColor: '#4CAF50', // Add custom color border (Line)
                backgroundColor: '#4CAF50', // Add custom color background (Points and Fill)
                borderWidth: 1 // Specify bar border width
            }]
        },
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
        }
    };
        

    let init = () => {
        var ctx = angular.element(document.getElementById("myChart").getContext('2d'));

        new Chart(ctx, {
            type: 'line',
            data: $scope.chartjsDatas.datas,
            options: $scope.chartjsDatas.options
        });
    };

    init();
    
*/
});