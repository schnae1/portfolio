<?php 
    $to = "eric@ericsportfolio.site";
    $subject = "Email from ericsportfolio.site";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $formcontent="From: $name \n Message: $message";
    $mailheader = "From: $email \r\n";
    mail($to, $subject, $formcontent, $mailheader) or die("Error!");
    echo "Thank You!";
?>