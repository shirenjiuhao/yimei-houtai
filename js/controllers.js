/**
 * Created by Administrator on 2017/3/1.
 */
angular.module('app.controllers',['app.servers'])
    .controller('todayCtrl',['$scope','todayServer','$rootScope', function ($scope,todayServer,$rootScope) {
        var url = 'json/today.json';
        var callback = function (data) {
            $scope.data = data;
        }
        todayServer.getData(callback,url);
        /*------------------------------------------------------*/
        var selected = $('.window_right_title').find('span');
        $scope.isShow = true;
        selected.click( function () {
            $scope.isShow = true ? false : true;
            $(this).addClass('window_right_select').siblings().removeClass('window_right_select')
        });
        /*===========================*/
        $scope.sendPrivateText = function () {
            var messages = $('#info_text').val();
            console.log(messages);
            if (messages == '') {
                return false
            }
            $('#info_text').val("");
            var id = conn.getUniqueId();                 // 生成本地消息id
            var msg = new WebIM.message('txt', id);      // 创建文本消息
            msg.set({
                msg: messages,                  // 消息内容
                to: '13522870687',                          // 接收消息对象（用户id）
                roomType: false,
                success: function (id, serverMsgId) {
                    console.log('send private text Success');
                    $('.window_chat').append('<div class="window-chat-txt">' +
                        '<div class="window-chat-txt-right">' +
                        messages + '</div>' +
                        '<img src="img/WechatIMG8.png" alt="正在加载"/></div>')
                }
            });
            msg.body.chatType = 'singleChat';
            conn.send(msg.body);
        }
        /*===============================*/
        /*----------------------------------------------------*/
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
        };
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
.controller('loginCtrl',['$scope', function ($scope) {
        $scope.login = function () {
            var  username = $('#username').val();
            var password = $('#password').val();
            if (username == '' || password == '') {
                alert("用户名/验证码 不能为空");
                return;
            }
            var signIn = {
                apiUrl: WebIM.config.apiURL,
                user: username,
                pwd: password,
                appKey: WebIM.config.appkey,
                success: function (token) {
                    alert('登陆成功');
                    $('#login-btn').attr('href','#/today');
                    /* var token = token.access_token;
                     WebIM.utils.setCookie('webim_' + encryptUsername, token, 1);*/
                },
                error: function(){
                }
            };
            conn.open(signIn);
            console.log('------------------------------------------------------------')
        }
    }])