/**
 * Created by bjwsl-001 on 2017/2/4.
 */
var app = angular.module('myApp', ['ng']);

//通过service创建一个服务
app.service("$heartBeat", ["$interval",function ($interval) {
  this.startBeat = function () {
    promise = $interval(function () {
      console.log('心跳');
    },1000);

  };

  this.stopBeat = function () {
    $interval.cancel(promise);
  }

}])

app.controller('myCtrl',["$scope","$heartBeat", function ($scope,$heartBeat) {

  $scope.start = function () {
    $heartBeat.startBeat();
  }

  $scope.stop = function () {
    $heartBeat.stopBeat();
  }

}]);