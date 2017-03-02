/**
 * Created by Administrator on 2017/3/1.
 */
angular.module('app',['app.controllers','ngRoute'])
    .config(['$routeProvider','$rootScopeProvider', function ($routeProvider,$rootScopeProvider) {
        $routeProvider
            .when('/today',{
                templateUrl:'tpl/common.html',
                controller:'todayCtrl'
            })
            .when('/late',{
                templateUrl:'tpl/common.html',
                controller:'lateCtrl'
            })
            .when('/login',{
                templateUrl:'tpl/login.html',
                controller:'loginCtrl'
            })
        .otherwise({redirectTo:'/login'});
    }])

