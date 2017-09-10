// (function () {
//     "use strict";

//     var app = angular.module("Bookshelf", ["ngRoute"]);

//     app.config(routeConfig);

//     function routeConfig($routeProvider, $locationProvider) {
//         $routeProvider.caseInsensitiveMatch = true;

//         $routeProvider
//             .when("/login", { template: "views/login.html" })
//             .when("/book", { templateUrl: "views/book.html" })
//             .when("/", { template: "<library>" })
//             .otherwise({ redirectTo: "/" });

//     }
// })();

angular.module('Bookshelf', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('library', {
                url: '/library',
                templateUrl: "views/library.html",
                controller: "libraryCtrl",

            })
            .state('login', {
                url: '/login',
                templateUrl: "views/login.html",
            })
            .state('register', {
                url: '/register',
                templateUrl: 'views/register.html'
            })

            .state('book', {
                url: '/book/:id',
                templateUrl: 'views/book.html',
                controller: "bookCtrl"
            })


        // $urlRouterProvider
        //     .otherwise('/');
    });