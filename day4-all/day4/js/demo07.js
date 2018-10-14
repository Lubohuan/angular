/**
 * Created by bjwsl-001 on 2017/2/4.
 */

var app = angular.module("myApp",['ng']);

//通过factory方法创建服务
app.factory('$show',function(){
  return {
    show: function () {
      alert("$show服务中的方法被调用了")
    }
  }
})


app.controller('myCtrl', function ($scope,$show) {

  $scope.showAlert = function () {
    $show.show();
  }

});