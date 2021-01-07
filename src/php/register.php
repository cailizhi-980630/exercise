<?php
    $username = $_REQUEST['username'];


    $conn = mysqli_connect("127.0.0.1","root","root","sn");

    $result = mysqli_query($conn,"SELECT * FROM `snuser` WHERE `username`='$username'");

    $data = mysqli_fetch_all($result);
    
    mysqli_close($conn);

    // echo json_encode($data);

    if($data){
        echo json_encode(array("code"=>1));
    }else{
        echo json_encode(array("code"=>0));
    }

?>

