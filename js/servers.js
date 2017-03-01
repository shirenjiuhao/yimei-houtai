/**
 * Created by Administrator on 2017/3/1.
 */
angular.module('app.servers',[])
    .service('todayServer',['$http', function ($http) {
        this.getData = function(callback,url){
            $http.get(url,{cache:true}).success(function (data) {
                callback(data);
            })
        }
        return this;
    }])
    .service('lateServer',['$http', function ($http) {
        this.getData = function(callback,url){
            $http.get(url,{cache:true}).success(function (data) {
                callback(data);
            })
        }
        return this;
    }])