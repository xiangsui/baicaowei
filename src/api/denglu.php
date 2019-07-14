<?php
    include "conn.php";

    $username = $_POST['user'];
    $password = $_POST['passwd'];
    $sql = "
        SELECT `id` FROM `xiangsui`
        WHERE `xiangsui`.`username` = '$username'AND
        `xiangsui`.`password` ='$password'
    
    ";

    $result = $conn->query($sql);
   
    if($result->num_rows > 0){
       echo '{"success":true}';
       // echo "ok";

    } else{
       // echo "no";
        echo '{"success":false}';
    }
    $conn->close();



?>