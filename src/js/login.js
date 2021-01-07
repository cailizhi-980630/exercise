$('.QRcord-box').mouseover (function(){
    $('.phone-app').css('display','block')
})


$('.QRcord-box').mouseout (function(){
    $('.phone-app').css('display','none')
})


$('.code-landing').click(function(){
    $('.cord-box').css('display','block')
    $('.inp-box').css('display','none')
    $('.phone-box').css('display','none')
})


$('.user-landing').click(function(){
    $('.cord-box').css('display','none')
    $('.inp-box').css('display','block')
    $('.phone-box').css('display','none')
})


$('.phone-landing').click(function(){
    $('.cord-box').css('display','none')
    $('.inp-box').css('display','none')
    $('.phone-box').css('display','block')
})


$('.lock').click(function(){
    if ($(this).prev().eq(0).attr('type')=='text') {
        $(this).prev().eq(0).attr('type','password')
    }
    else{
        $(this).prev().eq(0).attr('type','text')
    }
})

$('.logInA').click(function(){
    $.ajax({
        url:"../php/login.php",
        data:{
            username:$('.inpuser').val(),
            password:$('.inppass').val(),
        },
        dataType:'json',
        type:"post",
        success:function(res){
            if(res.code==1){
                setCookie('user',$('.inpuser').val())
                window.location.href = "./index.html";
            }
        }
    })
    
})