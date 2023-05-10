<?php
header('Access-Control-Allow-Origin: *');

$conn = new mysqli("localhost", "root", "", "contact-portfolio");

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $name = $_POST['name'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $sql = "INSERT INTO users(name,mobile,email, message) VALUES('$name','$mobile','$email', '$message');";
    $res = mysqli_query($conn, $sql);

    if ($res) {
        echo "Votre message a bien été pris en compte.";
    } else {
        echo "Votre message n'a pas été enregistré.";
    }
    $conn->close();
}
