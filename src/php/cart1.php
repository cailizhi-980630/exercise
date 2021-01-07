<?php
$num = $_REQUEST['num'];
$username = $_REQUEST['username'];
$trade = $_REQUEST['trade'];

$conn = mysqli_connect("127.0.0.1","root","root","sn");

$sql = "SELECT * FROM `shop` WHERE `trade`='$trade'";

$result = mysqli_query($conn,$sql);

$row = mysqli_fetch_assoc($result);

$shu = $row['amount'];

// $arr = json_encode($row);
// echo $row['amount']
// $rows = mysqli_num_rows($result);

// if($rows>0){
$sql2 = "UPDATE `cart` SET `$shu`='$num'WHERE `un`='$username'";
// }
$result = mysqli_query($conn,$sql2);



?>