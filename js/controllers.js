/**
 * Created by Administrator on 2017/3/1.
 */
angular.module('app.controllers',['app.servers'])
    .controller('todayCtrl',['$scope','todayServer', function ($scope,todayServer) {
        var url = 'json/today.json';
        var callback = function (data) {
            $scope.data = data;
        }
        todayServer.getData(callback,url);
        var windowHeight;
        //获取窗口的宽度
        var windowWidth;
        //获取弹窗的宽度
        var popWidth;
        //获取弹窗高度
        var popHeight;
        function init(){
            windowHeight=$(window).height();
            windowWidth=$(window).width();
            popHeight=$(".window").height();
            popWidth=$(".window").width();
        }
        /*关闭窗口的方法*/
        $scope.closeWindow = function (){
            $(".title span").click(function(){
                $(this).parent().parent().parent().hide("slow");
            });
        };
        $scope.popCenterWindow = function(){
            init();
            //计算弹出窗口的左上角Y的偏移量
            var popY=(windowHeight-popHeight)/2;
            var popX=(windowWidth-popWidth)/2;
            //alert('jihua.cnblogs.com');
            //设定窗口的位置
            $("#center").css("top",popY).css("left",popX).slideToggle("slow");
            $scope.closeWindow();
        }
    }])
    .controller('lateCtrl',['$scope','lateServer', function ($scope,lateServer) {
        var url = 'json/late.json';
        var callback = function (data) {
            $scope.data = data;
        }
        lateServer.getData(callback,url);
        var windowHeight;
        //获取窗口的宽度
        var windowWidth;
        //获取弹窗的宽度
        var popWidth;
        //获取弹窗高度
        var popHeight;
        function init(){
            windowHeight=$(window).height();
            windowWidth=$(window).width();
            popHeight=$(".window").height();
            popWidth=$(".window").width();
        }
        /*关闭窗口的方法*/
        $scope.closeWindow = function (){
            $(".title span").click(function(){
                $(this).parent().parent().parent().hide("slow");
            });
        };
        $scope.popCenterWindow = function(){
            init();
            //计算弹出窗口的左上角Y的偏移量
            var popY=(windowHeight-popHeight)/2;
            var popX=(windowWidth-popWidth)/2;
            //alert('jihua.cnblogs.com');
            //设定窗口的位置
            $("#center").css("top",popY).css("left",popX).slideToggle("slow");
            $scope.closeWindow();
        }
    }])