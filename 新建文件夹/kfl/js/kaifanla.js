/**
 * Created by bjwsl-001 on 2017/2/7.
 */

var app = angular.module('kfl',['ng','ngRoute']);

app.config(function ($routeProvider) {

  $routeProvider
    .when("/start",{
      templateUrl:'tpl/start.html'
    })
    .when("/main",{
      templateUrl:'tpl/main.html'
    })
    .when("/detail",{
      templateUrl:'tpl/detail.html'
    })
    .when("/order",{
      templateUrl:'tpl/order.html'
    })
    .when("/myorder",{
      templateUrl:'tpl/myorder.html'
    })
    .otherwise({redirectTo:'/start'})
})

app.controller('parentCtrl',['$scope','$location',
 function($scope,$location){

   $scope.jump = function (routePath) {
     $location.path(routePath);
   }

 }
])













