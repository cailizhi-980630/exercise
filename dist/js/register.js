"use strict";$(".send-msg").text(randChar(6)),$(".send-msg").click(function(){$(".send-msg").text(randChar(6))});var reg1=/^[A-Z][a-zA-Z0-9-*.]{6,10}$/,reg2=/^(?=.*?[A-Za-z]+)(?=.*?[0-9]+)(?=.*?[A-Z]).*$/;function randChar(t){for(var a="",e=0;e<t;e++){var n=rand(48,122);57<n&&n<65||90<n&&n<97?e--:a+=String.fromCharCode(n)}return a}function rand(t,a){return parseInt(Math.random()*(a-t+1))+t}$(".phone").focusout(function(){if(0!=$(this).val().length)return reg1.test($(this).val())?void $.ajax({url:"../php/register.php",data:{username:$(this).val()},dataType:"json",success:function(t){1==t.code&&(alert("用户名已被注册"),$(this).val(""))}}):(alert("用户名不符合规范(大写字母开头，6-10位字符)"),void $(this).val(""))}),$(".password-inp").focusout(function(){0!=$(this).val().length&&(reg2.test($(this).val())||(alert("密码不符合规范(务必包含字母且至少一位大写字母)"),$(this).val("")))}),$(".submit-btn").click(function(){return $(".smsCode").val()!=$(".send-msg").text()?(alert("验证码错误"),$(".send-msg").text(randChar(6)),$(".phone").val(""),$(".smsCode").val(""),void $(".password-inp").val("")):void $.ajax({url:"../php/register2.php",data:{username:$(".phone").val(),password:$(".password-inp").val()},dataType:"json",type:"get",success:function(t){1==t.code&&(alert("注册成功"),window.location.href="./login.html")}})});