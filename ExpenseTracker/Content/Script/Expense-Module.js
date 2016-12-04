var app = angular.module("ExpenseTrackerapp", ['ngRoute'], ['trNgGrid']);
debugger;

app.config(['$routeProvider', function ($routeProvider) {
    debugger;
    $routeProvider
   .when('/', {
       templateUrl: '../ETHome/ETMain',

   })
        .when("/User", {
            templateUrl: '../User/UserDetail',
            controller: 'ExpenseTrackerController'
        })

   .when("/Shop", {
       templateUrl: '../Shop/ShopDetail',
       controller: 'ShopControllers'
   })
    $routeProvider.otherwise({ redirectTo: '../ETHome/ETMain' });
}]);




