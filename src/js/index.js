var $imgarr = $(".banner ul li ")
var $imgnum = $(".banner ul li ").size();
var $lastA = $(".leftA")
var $nextA = $(".rightA")
var $itemA = $(".item")
var index = 0;


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
            $('.btn-group>p').text('Hi.'+un)
            $('.btn-group>a').css('display','none')
            $('.btn-group>i').css('display','none')
            $('.wdyg-name').text('欢迎回来'+un)
        }
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


//轮播图定时器
function imgshow(){
  imgtimer = setInterval(function(){
      index++;
      show()
  },2000) 
}

imgshow();

//轮播图下一张按钮
$nextA.on('click',function(){
    clearTimeout(imgtimer)
    clearTimeout(ashow)
    index++;
    show();
    var ashow =  setInterval(imgshow(),5000)
})

//轮播图上一张按钮
$lastA.on('click',function(){
    clearTimeout(imgtimer)
    clearTimeout(ashow)
    index--;
    show();
    var ashow =  setInterval(imgshow(),5000)
})

//轮播图下的按钮
$itemA.click(function(){
    index =  $(this).text()
    show()
    clearTimeout(imgtimer)
    clearTimeout(ashow)
    var ashow =  setInterval(imgshow(),5000)
})

$(window).scroll(function(){
    // console.log(window.scrollY)
    if(window.scrollY>=755){
        $('.floatHc').css('display','block')
    }else{
        $('.floatHc').css('display','none')
    }
})

$('.sn-sidebar-totop').click(function(){
    $(window).scrollTop(0);
})


$('.tab-content>ul>li').click(function(){
    window.location.href = "./commodity.html";
})

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


























function show(){
    // index++;
    if(index==$imgnum){
        index=0;
    }
    if(index<0){
        index = 7;
    }
    
    $imgarr.eq(index).fadeIn(300).siblings().fadeOut(300);
    $imgarr.eq(index).css('display','block').siblings().css('display','none');;
    $itemA.eq(index).addClass('current').siblings().removeClass('current');
    // console.log(index)
    if(index==0){
        $(".banner-wrap").css("background-color","#F21534")
    }else if(index==1){
        $(".banner-wrap").css("background-color","#710000")
    }else if(index==2){
        $(".banner-wrap").css("background-color","#DF2521")
    }else if(index==3){
        $(".banner-wrap").css("background-color","#F9C1A5")
    }else if(index==4){
        $(".banner-wrap").css("background-color","#BF0900")
    }else if(index==5){
        $(".banner-wrap").css("background-color","#1245B2")
    }else if(index==6){
        $(".banner-wrap").css("background-color","#DB0425")
    }else if(index==7){
        $(".banner-wrap").css("background-color","#A92028")
    }
    // console.log(index)
}
