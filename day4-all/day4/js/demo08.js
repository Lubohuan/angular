/**
 * Created by bjwsl-001 on 2017/2/4.
 */

var app = angular.module("myApp",['ng']);

//通过service方法创建服务
app.service("$write", function () {

  this.write = function () {
    console.log('$write服务的方法被调用了');
  }
  
})

//标记式依赖注入

var ctrFunc = function($scope,$write){
  $write.write();
}

ctrFunc.$inject = ["$scope","$write"];


app.controller('myCtrl', ctrFunc);

