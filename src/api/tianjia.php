<?php
    include "conn.php";

    $username = $_GET['user'];
    $password = $_GET['passwd'];
    $sql="
        INSERT INTO `xiangsui`
        (`id`,`username`,`password`,`tel`,`address`,`qq`)
        VALUES
        (NULL,'$username','$password','19905201314','qianfeng','8520741')
    ";

    $result  = $conn->query($sql);

    if($result){
        echo 'ok';
    }else{
        echo 'xxx';
    }

    $conn->close();

?>