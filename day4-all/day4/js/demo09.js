/**
 * Created by bjwsl-001 on 2017/2/4.
 */


var app = angular.module('myApp',['ng']);

//自定义一个$print的服务
app.factory("$print", function () {

  return {
    print: function () {
      console.log("$print的方法被调用了");
    }
  }
})
//采用行内式依赖注入
app.controller("myCtrl",["$scope","$print",

  function ($scope,$print) {
  
    $scope.funcPrint = function () {
      $print.print();
    }

}])















