// 添加controller.js控制效果
var appTest = angular.module("appTest",[]);
appTest.controller("testController",function($scope){
    // this.$scope = $scope;
    $scope.firstName = "汪易道";

    // 使用class

    let test = new Test();
    console.log(test.print());
});

