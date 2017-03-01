/**
 * Created by Administrator on 2017/3/1.
 */
angular.module('app',['app.controllers','ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/today',{
                templateUrl:'tpl/common.html',
                controller:'todayCtrl'
            })
            .when('/late',{
                templateUrl:'tpl/common.html',
                controller:'lateCtrl'
            })
        .otherwise({redirectTo:'/today'});
    }])
