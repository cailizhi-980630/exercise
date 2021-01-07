var un = getCookie('user')
console.log(un)
$.ajax({
    url:"../php/register.php",
    data:{
        username:un,
        // password:$('.inppass').val(),
    },
    dataType:'json',
    type:"post",
    success:function(res){
        if(res.code==1){
            // setCookie('user',$('.inpuser').val())
            // window.location.href = "./index.html";
            $('.reg-bar-node').css('display','none')
            $('.wdyg-name').text('欢迎回来'+un)
            // $('.btn-group>p').text('Hi.'+un)
            // $('.btn-group>a').css('display','none')
            // $('.btn-group>i').css('display','none')
        }
    }
})

verify()

$('.lefta').click(function(){
    var left = $('.imgzoom-thumb-main>ul').css('left').split('px').join('');
    left = left - 69;
    if(left>0){
        left=0
    }
    if(left<-138){
        left=-138
    }
    $('.imgzoom-thumb-main>ul').css('left',left)
    console.log(left)
})

$('.righta').click(function(){
    var left = $('.imgzoom-thumb-main>ul').css('left').split('px').join('');
    left = +left + 69;
    if(left>0){
        left=0
    }
    if(left<-138){
        left=-138
    }
    $('.imgzoom-thumb-main>ul').css('left',left)
    console.log(left)
})

//鼠标移入下列表
$('.imgzoom-thumb-main>ul>li').mouseover(function(){
    var imglink = $(this).children().eq(0).children().attr('src');
    $('.imgzoom-main>a>img').attr('src',imglink);
    $('.imgzoom-pop>img').attr('src',imglink);
})

//鼠标移入
$('.imgzoom-main').mouseenter(function(){
    $('.imgzoom-shot').show()
    $('.imgzoom-pop').show()
})

//鼠标移出
$('.imgzoom-main').mouseleave(function(){
    $('.imgzoom-shot').hide()
    $('.imgzoom-pop').hide()
})

//放大镜
$('.imgzoom-main').mousemove(function(e){
    // console.log(e.pageX)
    // console.log(e.pageY)
    var left = e.pageX - $(this).offset().left - ($('.imgzoom-shot').width())/2;
    var top = e.pageY - $(this).offset().top - ($('.imgzoom-shot').height())/2;
    if (left<=0){
        left=0
    }
    if(left>=$('.imgzoom-main>a>img').width()-$('.imgzoom-shot').width())
    {
        left=200
    }
    if (top<=0){
        top=0
    }
    if(top>=$('.imgzoom-main>a>img').height()-$('.imgzoom-shot').height())
    {
        top=200
    }

    $('.imgzoom-shot').css('left',left+'px')
    $('.imgzoom-shot').css('top',top+'px')

    var x = left/$('.imgzoom-main>a>img').width()*$('.imgzoom-pop>img').width()
    var y = top/$('.imgzoom-main>a>img').height()*$('.imgzoom-pop>img').height()

    $('.imgzoom-pop>img').css('left',-x+'px')
    $('.imgzoom-pop>img').css('top',-y+'px')

})


$('.tip-infor>li').click(function(){
    $('.tip-infor>li>a').removeClass('redb')
    $(this).children().addClass('redb')
    $('.tip-infor>li>a>i').hide()
    $(this).children().children().eq(1).show()
    $('.mainprice>i').text($(this).children().attr('price'))
    $('.price-sn>dd>del>i').text($(this).children().attr('nprice'))
    $('.number').val(1)
    
})


$('.subtractA').click(function(){
    var num = $(this).next().val()
    num --
    if(num<=1){
        num=1
    }
    $(this).next().val(num)
    
})

$('.plusA').click(function(){
    var num = $(this).prev().val()
    num ++
    if(num>=99){
        num=99
    }
    $(this).prev().val(num)
})
$('.subtractA').next().focusout(function(){
    if($(this).val()>99){
        $(this).val(99)
        
    }
    // console.log($(this).val())
})







$('.btn-orange-buy').click(function(){
    // console.log($('.redb>img').attr('src'))
    console.log($('.redb>span').text())
    // console.log($('.mainprice>i').text())
    console.log($('.number').val())

    if(un){
        $.ajax({
            url:"../php/commodity.php",
            data:{
                username:un,
                // img:$('.redb>img').attr('src'),
                trade:$('.redb>span').text(),
                // price:$('.mainprice>i').text(),
                amount:$('.number').val(),
            },
            dataType:'json',
            type:"post",
            success:function(res){
                console.log(res)
                var cartnum = Number(res.amount1)+Number(res.amount2)+Number(res.amount3)+Number(res.amount4)+Number(res.amount5);
                // console.log(cartnum)
                $('.order>i').text(cartnum)
                $('.tab-cart-num').text(cartnum)
                
            }
        })
    }
})

$.ajax({
    url:"../php/commodity2.php",
    data:{
        username:un,
        // // img:$('.redb>img').attr('src'),
        // trade:$('.redb>span').text(),
        // // price:$('.mainprice>i').text(),
        // amount:$('.number').val(),
    },
    dataType:'json',
    type:"post",
    success:function(res){
        console.log(res)
        var cartnum = Number(res.amount1)+Number(res.amount2)+Number(res.amount3)+Number(res.amount4)+Number(res.amount5);
        // console.log(cartnum)
        $('.order>i').text(cartnum)
        $('.tab-cart-num').text(cartnum)
        
    }
})

function verify(){
    if (!un){
        $('.btn-orange-buy').attr('href','./login.html')
    }
}
$('.order').click(function(){
    if (un) {
        window.location.href = "./cart.html";
    }else{
        window.location.href = "./login.html";
    }
})
$('.cart').click(function(){
    if (un) {
        window.location.href = "./cart.html";
    }else{
        window.location.href = "./login.html";

    }
})

function count(){
    countDown = setInterval(function(){
       var time1 = new Date().getTime();
       var time3 = new Date(2021,0,8,22,33,33);
       var difference = parseInt((time3 - time1)/1000);
       var day = parseInt(difference/(24*60*60));
       difference = difference - 24*60*60*day;
       var hour = parseInt(difference/3600);
       difference = difference - hour*3600;
       var minute = parseInt(difference/60) 
       var second = difference - minute*60
       if ((hour)<10){
           hour="0"+hour
       }
       if (minute<10){
        minute="0"+minute
         }
        if (second<10){
            second="0"+second
          }
          if (day<10){
            day="0"+day
          }
          $('.day').text(day)
       $('.hour').text(hour)
       $('.minute').text(minute)
       $('.second').text(second)
   },1000)
   }
   count()