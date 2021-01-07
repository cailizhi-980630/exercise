// var  $num = randChar(6)


$('.send-msg').text(randChar(6));

$('.send-msg').click(function(){
        $('.send-msg').text(randChar(6));
})

var reg1=/^[A-Z][a-zA-Z0-9-*.]{6,10}$/;
var reg2=/^(?=.*?[A-Za-z]+)(?=.*?[0-9]+)(?=.*?[A-Z]).*$/;



// console.log($num)
$('.phone').focusout (function(){
    if($(this).val().length==0){
        return
    }
    // console.log()
    if(!(reg1.test($(this).val()))){
        alert('用户名不符合规范(大写字母开头，6-10位字符)')
        // console.log($(this).val())
        $(this).val('')
        return
    }
    $.ajax({
        url:"../php/register.php",
        data:{
            username:$(this).val(),
        },
        dataType:'json',
        success:function(res){
            if(res.code==1){
                alert('用户名已被注册')
                $(this).val('')
            }
        }
    })
})

$('.password-inp').focusout (function(){
    if($(this).val().length==0){
        return
    }
    if(!(reg2.test($(this).val()))){
        alert('密码不符合规范(务必包含字母且至少一位大写字母)')
        // console.log($(this).val())
        $(this).val('')
        return
    }
})

$('.submit-btn').click(function(){
    // console.log($('.smsCode').val)
    // console.log($('.smsCode').val)

    if($('.smsCode').val()!=$('.send-msg').text()){
        alert('验证码错误')
        $('.send-msg').text(randChar(6));
        $('.phone').val('')
        $('.smsCode').val('')
        $('.password-inp').val('')
        return
    }
    $.ajax({
        url:"../php/register2.php",
        data:{
            username:$('.phone').val(),
            password:$('.password-inp').val(),
        },
        dataType:'json',
        type:"get",
        success:function(res){
            if(res.code==1){
                alert('注册成功')
                // $(this).val('')
                window.location.href = "./login.html";
            }
        }
    })
})








function randChar(n){
    var str = "";
    for(var i=0;i<n;i++){	
        var code = rand(48,122)
        if((code>57&&code<65)||(code>90&&code<97)){
            i--; 
        }else{
            var char = String.fromCharCode(code);
            str+=char;
        }
    }
    return str;
}
function rand(min,max){            
    return parseInt(Math.random()*(max-min+1))+min;
}