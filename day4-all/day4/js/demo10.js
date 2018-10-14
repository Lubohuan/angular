/**
 * Created by bjwsl-001 on 2017/2/4.
 */

var app = angular.module('myApp',['ng']);

app.factory("$add", function () {
  return {
    add:function(num1,num2){
      var total = num1+num2
      alert("总和为"+total);
    }
  }
})

//采用行内式依赖注入的方式 注入服务
app.controller('myCtrl',["$scope","$add",
  function ($scope,$add) {
    $scope.funcAdd = function () {
      $add.add($scope.number1,$scope.number2);
    }
}]);