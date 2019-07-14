<?php
    include "conn.php";
    $username = $_GET['user'];

    $sql = "
        SELECT `id` FROM `xiangsui` WHERE
        `xiangsui`.`username` = '$username'
    
    ";

    $result = $conn->query($sql);

    if($result->num_rows > 0){
        echo "存在";
    }else{
        echo "no";
    }

    $conn->close();



?>