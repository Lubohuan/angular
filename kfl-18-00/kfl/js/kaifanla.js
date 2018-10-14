/**
 * Created by bjwsl-001 on 2017/2/7.
 */

var app = angular.module('kfl', ['ng', 'ngRoute']);

app.config(function ($routeProvider) {

  $routeProvider
    .when("/start", {
      templateUrl: 'tpl/start.html'
    })
    .when("/main", {
      controller: 'mainCtrl',
      templateUrl: 'tpl/main.html'
    })
    .when("/detail", {
      templateUrl: 'tpl/detail.html'
    })
    .when('/detail/:id',{
      controller:  'detailCtrl',
      templateUrl: 'tpl/detail.html'
    })
    .when("/order", {
      templateUrl: 'tpl/order.html'
    })
    .when('/order/:id',{
      controller:'orderCtrl',
      templateUrl: 'tpl/order.html'
    })
    .when("/myorder", {
      controller:  'myOrderCtrl',
      templateUrl: 'tpl/myorder.html'
    })
    .otherwise({redirectTo: '/start'})
})

app.controller('parentCtrl', ['$scope', '$location',
  function ($scope, $location) {

    $scope.jump = function (routePath) {
      $location.path(routePath);
    }
  }
])

app.controller('mainCtrl',
  ['$scope', '$http', function ($scope, $http) {

    $scope.hasMore = true;
    $http
      .get('data/dish_getbypage.php')
      .success(function (data) {
        //console.log(data);
        $scope.dishList = data;
      })

    $scope.loadMore = function () {
      $http
        .get('data/dish_getbypage.php?start=' + $scope.dishList.length)
        .success(function (data) {
          if (data.length < 5) {
            $scope.hasMore = false;
          }
          $scope.dishList = $scope.dishList.concat(data);

        })
    }

    $scope.$watch('kw', function () {
      if($scope.kw)
      {
        $http
          .get('data/dish_getbykw.php?kw=' + $scope.kw)
          .success(function (data) {
            console.log(data);
            $scope.dishList = data;
          })
      }

    });

  }])

app.controller('detailCtrl',['$scope','$http','$routeParams',
  function ($scope, $http, $routeParams) {

    //console.log($routeParams.id);
    $http
      .get('data/dish_getbyid.php?id='+$routeParams.id)
      .success(function (data) {
        //console.log(data);
        $scope.dish = data[0];
      })

  }])

app.controller('orderCtrl',['$scope','$http','$routeParams',
  function($scope,$http,$routeParams){
    var id = $routeParams.id;
    console.log(id);

    $scope.order = {'did':id};

    //$.param();

    $scope.submitOrder = function () {

      console.log($scope.order);
      var params = $.param($scope.order)
      console.log(params);
      $http.get("data/order_add.php?"+params)
      .success(function (data) {
          console.log(data);
          var result = data[0];
          if(result.msg == 'succ')
          {
            $scope.succMsg = "下单成功，订单编号为:"+result.oid;
            sessionStorage.setItem("phone",$scope.order.phone);
          }
          else
          {
            $scope.errMsg = "下单失败";
          }
        })

    }

  }
])

app.controller('myOrderCtrl',['$scope','$http',
  function ($scope,$http) {

    var phone = sessionStorage.getItem("phone")
    $http
      .get('data/order_getbyphone.php?phone='+phone)
      .success(function (data) {
        console.log(data);
        $scope.orderList = data;
      })

}]);













