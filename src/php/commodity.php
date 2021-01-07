<?php
header('content-type:text/html;charset=utf-8;');
$username = $_REQUEST['username'];
// $img = $_REQUEST['img'];
$trade = $_REQUEST['trade'];
// $price = $_REQUEST['price'];
$amount = $_REQUEST['amount'];



$conn = mysqli_connect("127.0.0.1","root","root","sn");

$sql = "SELECT * FROM `shop` WHERE `trade`='$trade'";

$result = mysqli_query($conn,$sql);

// $rows = mysqli_num_rows($result);

$row = mysqli_fetch_assoc($result);

// $arr = json_encode($row);

// echo $arr;

$num = $row['amount'];

$sql1 = "SELECT * FROM `cart` WHERE `un`='$username'AND `$num`>0";
// echo $num;



$result1 = mysqli_query($conn,$sql1);

$rows = mysqli_num_rows($result1);



if($rows>0){
    // $rows1 = mysqli_num_rows($result1);

    $row1 = mysqli_fetch_assoc($result1);
    
    $num1 = $row1[$row['amount']]+$amount;

    $sql2 = "UPDATE `cart` SET `$num`='$num1'WHERE `un`='$username'";
    // echo 1;
    
}else{
    // $sql2 = "INSERT INTO `cart` (`un`, `$num`) VALUES('$username', '$amount')";
    // echo 2;
    $sql4 = "SELECT * FROM `cart` WHERE `un`='$username'";
    $result4 = mysqli_query($conn,$sql4);
    $rows4 = mysqli_num_rows($result4);
    if($rows4>0){
        $sql2 = "UPDATE `cart` SET `$num`='$amount'WHERE `un`='$username'";
        // echo 2;
    }else{
        $sql2 = "INSERT INTO `cart` (`un`, `$num`) VALUES('$username', '$amount')";
        // echo 3;
    }

    
}
$result2 = mysqli_query($conn,$sql2);

if($result2){
    $sql3 = "SELECT * FROM `cart` WHERE `un`='$username'";
    $result3 = mysqli_query($conn,$sql3);
    $row3 = mysqli_fetch_assoc($result3);
    $arr3 = json_encode($row3);
    echo $arr3;
    // echo 4;
}

// $row2 = mysqli_fetch_assoc($result2);

// $arr2 = json_encode($row2);


// echo $arr2;
// echo  $result2

// $sql = "INSERT INTO `cart` (`un`, `$num`) VALUES('$username', '$amount')";

// $result = mysqli_query($conn,$sql);

// if($result2){
//     echo json_encode(array("code"=>1));
// }else{
//     echo json_encode(array("code"=>0));
// }




?>