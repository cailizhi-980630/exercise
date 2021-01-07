<?php
header('content-type:text/html;charset=utf-8;');

$username = $_REQUEST['username'];

$conn = mysqli_connect("127.0.0.1","root","root","sn");

$sql3 = "SELECT * FROM `cart` WHERE `un`='$username'";

$result3 = mysqli_query($conn,$sql3);

$row3 = mysqli_fetch_assoc($result3);

$arr3 = json_encode($row3);

echo $arr3;

?>