<?php
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $conn = mysqli_connect("localhost","root","root","sn");
    
    $sql = "SELECT * FROM `snuser` WHERE `username`='$username'";

    $result = mysqli_query($conn,$sql);

    $rows = mysqli_num_rows($result);

    if($rows>0){
        $sql = "SELECT * FROM `snuser` WHERE `password`='$password'";
    }
    $result = mysqli_query($conn,$sql);
    $rows = mysqli_num_rows($result);
    if($rows){
        echo json_encode(array("code"=>1));
    }else{
        echo json_encode(array("code"=>0));
    }
?>