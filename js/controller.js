app.controller("myCtrl", function($scope) {
    $scope.myArray = [
        {
            type: "ZONE",
            value: "Zone Analytics"
        },
        {
            type: "HOME",
            value: "Home Analytics"
        },
        {
            type: "TEST",
            value: "Test Analytics"
        }
    ];

    $scope.exportCsv = (type) => {
        console.log(type)
    }
});