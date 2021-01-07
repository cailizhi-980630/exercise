<?php
    header('content-type:text/html;charset=utf-8;');
    $conn = mysqli_connect("127.0.0.1","root","root","sn");


    $amount1 = $_REQUEST['amount1'];
    $amount2 = $_REQUEST['amount2'];
    $amount3 = $_REQUEST['amount3'];
    $amount4 = $_REQUEST['amount4'];
    $amount5 = $_REQUEST['amount5'];
    $json = (array) null; 

    // echo $amount1;
    // echo $amount2;
    // echo $amount3;
    // echo $amount4;
    // echo $amount5;
    if($amount1!=null && $amount1!=0){

        $sql = "SELECT * FROM `shop` WHERE `amount`='amount1'";

        $result = mysqli_query($conn,$sql);

        $row = mysqli_fetch_assoc($result);

        $num = ["num"=>"$amount1"];

        array_push($row,$num);

        $arr = json_encode($row);
        // array_push()
        // $json += $arr;
        array_push($json,$row);
        
    }
    if($amount2!=null && $amount2!=0){

        $sql2 = "SELECT * FROM `shop` WHERE `amount`='amount2'";
    
        $result2 = mysqli_query($conn,$sql2);
    
        $row2 = mysqli_fetch_assoc($result2);

        $num2 = ["num"=>"$amount2"];

        array_push($row2,$num2);
    
        $arr2 = json_encode($row2);

        array_push($json,$row2);
    
        // $json +=$arr2;
            
        }
    if($amount3!=null && $amount3!=0){

        $sql3 = "SELECT * FROM `shop` WHERE `amount`='amount3'";

        $result3 = mysqli_query($conn,$sql3);

        $row3 = mysqli_fetch_assoc($result3);

        $num3 = ["num"=>"$amount3"];

        array_push($row3,$num3);

        $arr3 = json_encode($row3);

        array_push($json,$row3);


        // $json +=$arr3;
        
    }
    if($amount4!=null && $amount4!=0){

        $sql4 = "SELECT * FROM `shop` WHERE `amount`='amount4'";

        $result4 = mysqli_query($conn,$sql4);

        $row4 = mysqli_fetch_assoc($result4);

        $num4 = ["num"=>"$amount4"];

        array_push($row4,$num4);

        $arr4 = json_encode($row4);

        array_push($json,$row4);


        // $json +=$arr4;
        
    }
    if($amount5!=null && $amount5!=0){

        $sql5 = "SELECT * FROM `shop` WHERE `amount`='amount5'";

        $result5 = mysqli_query($conn,$sql5);

        $row5 = mysqli_fetch_assoc($result5);

        $num5 = ["num"=>"$amount5"];

        array_push($row5,$num5);

        $arr5 = json_encode($row5);

        array_push($json,$row5);


        // $json += $arr5;
        
    }
    
    // $json = array("$row1","$row2","$row3","$row4","$row5",)
    $arr6 = json_encode($json);
    echo $arr6;
?>