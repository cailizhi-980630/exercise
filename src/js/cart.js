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
        
        // console.log(window)
        // return res;
        $.ajax({
        url:"../php/cart.php",
            data:{
                // username:un,
                amount1:res.amount1,
                amount2:res.amount2,
                amount3:res.amount3,
                amount4:res.amount4,
                amount5:res.amount5,
            },
            dataType:'json',
            type:"post",
            success:function(res1){
            $('.numb').text(cartnum)
            money = 0
            
            //   console.log(res1)
            
                
            
              res1.forEach(function(item,index){
                //   if (!($('.tbody').html())) {
                $('.tbody').append(
                    `
                    <tr>
                        <th>${item.id}</th>
                        <th>
                            <div>
                            <img src="${item.img}">
                            <span>${item.trade}</span>
                        </div>
                        </th>
                        <th>
                            <p>${item.trade}</p>
                        </th>
                        <th>${item.price}</th>
                        <th>
                        <a class="subtractA"></a>
                        <input class="number" type="text" max="99" min="1" value="${parseInt(item[0].num)}">
                        <a class="plusA"></a>
                        </th>
                        <th>${(item[0].num)*(item.price)}</th>
                        <th><a class="del">删除</a></th>
                    </tr>
                    `
                )
                money += (item[0].num)*(item.price)
              })
              $('.sn-price>em').text(money)
            }
        })
    }
})

function aj(){
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
            
            // console.log(window)
            // return res;
            $.ajax({
            url:"../php/cart.php",
                data:{
                    // username:un,
                    amount1:res.amount1,
                    amount2:res.amount2,
                    amount3:res.amount3,
                    amount4:res.amount4,
                    amount5:res.amount5,
                },
                dataType:'json',
                type:"post",
                success:function(res1){
                $('.numb').text(cartnum)
                money = 0
                  res1.forEach(function(item,index){
                    //   if (!($('.tbody').html())) {
                    money += (item[0].num)*(item.price)
                  })
                  $('.sn-price>em').text(money)
                }
            })
        }
    })
    }

$('.tbody').on('click','.subtractA',function(){
    $(this).next().val($(this).next().val()-1),
    // console.log()
    $.ajax({
        url:"../php/cart1.php",
        data:{
            username:un,
            num:$(this).next().val(),
            trade:$(this).parent().parent().children(3).children().eq(1).text()
            // password:$('.inppass').val(),
        },
        dataType:'json',
        type:"post",
    })
    if ($(this).next().val()==0){
        $(this).parent().parent().hide()
    }
    aj()
})


$('.tbody').on('click','.del',function(){
    $(this).parent().parent().hide()
    $.ajax({
        url:"../php/cart1.php",
        data:{
            username:un,
            num:0,
            trade:$(this).parent().parent().children(3).children().eq(1).text()
            // password:$('.inppass').val(),
        },
        dataType:'json',
        type:"post",
    })
    aj()
})

$('.tbody').on('click','.plusA',function(){
    $num = parseInt($(this).prev().val())
    
    $(this).prev().val($num+1)
    if($(this).prev().val()>99) {
        $(this).prev().val(99)
    }
    // console.log()
    $.ajax({
        url:"../php/cart1.php",
        data:{
            username:un,
            num:$(this).prev().val(),
            trade:$(this).parent().parent().children(3).children().eq(1).text()
            // password:$('.inppass').val(),
        },
        dataType:'json',
        type:"post",
    })
    aj()
})
  if (!($('.tbody').html())) {
      aj()
  }

// console.log(window.aes1)

// console.log(res1)