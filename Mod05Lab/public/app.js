// var express = require('express');
// var app = express();
// app.use(express.static('public'));
// app.use(function(req, res) {
//     res.sendFile(__dirname + '/public/index.html');
// });
// app.listen(2319, function () {
//     console.log('Our app is listening on port 2319!');
// });

angular.module('app').config([
    '$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/items/', {
                templateUrl: '/app/items/index.html',
                controller: 'ItemsController',
                controllerAs: 'vm'
            })
            .when('/contact/', {
                templateUrl: '/app/contact/index.html',
                controller: 'ContactController',
                controllerAs: 'vm'
            })
            .when('/', {
                templateUrl: '/app/home/index.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });
    }
]);