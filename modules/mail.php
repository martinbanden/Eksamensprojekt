<?php 
    $name = $_POST ['name'];
    $phone = $_POST ['phone'];
    $forening = $_POST ['forening'];

$subject = "=?utf-8?B?".base64_encode("Beskeden send fra ...")."?=";
$headers = "From: $phone\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";


    $success =mail("khavushka@gmail.com", $subject, $message, $headers);
    echo $success;
?>