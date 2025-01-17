var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    
    $routeProvider
    
    .when('/',{
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    .when('/second/:num',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});




myApp.controller('mainController',['$scope', '$log',function($scope, $log){
    
     $scope.person ={
        name: 'John Doe',
        address: '555 Main St., New York, NY 1111'
    }
}]);

myApp.controller('secondController',['$scope', '$log','$routeParams',function($scope, $log, $routeParams){
    $scope.num =3;

    
}]);


myApp.directive("searchResult", function(){
    return {
        restrict: 'AECM', //'A', 'C','M', 'E', 'AE'(default) => element, attribute, class, comment
        templateUrl: 'directives/searchresult.html',
        replace: true
    }

});
