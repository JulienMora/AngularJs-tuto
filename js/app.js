var app = angular.module("myApp", ['ngMaterial', 'ngMessages']);

app.service("serviceExample", function(){
    this.service = function() {
        console.log("test service !")
    };
   
});