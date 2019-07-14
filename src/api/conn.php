<?php
    $server_name = 'localhost';
    $dbms_username = 'root';
    $dbms_password = '';
    $db_name = 'fsj';

    $conn = new mysqli($server_name,$dbms_username,
    $dbms_password,$db_name);

    if($conn->connect_error){
        echo"链接失败" . $conn->connect_error;
        return;
    }

    $conn->query('set names utf8');
?>