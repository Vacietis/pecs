<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

//define('DB_HOST', '127.0.0.1');
//define('DB_NAME', 'dragDrop');
//define('DB_USERNAME','root');
//define('DB_PASSWORD','root');
//
//
//$mysqli  = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
//if (mysqli_connect_errno()) {
// echo("Failed to connect, the error message is : ". mysqli_connect_error());
// exit();
//}>

$servername = "127.0.0.1";
$username = "root";
$password = "";
$myDB = "dragDrop";

// Create connection
//$conn = mysqli_connect($servername, $username, $password, $myDB);
$d = mysqli_connect($servername,$username,$password,$myDB) or die('Nevaru pievienoties datubāzei');

// Check connection
//if ($conn->connect_error) {
//    die("Connection failed: " . $conn->connect_error);
//    echo "error in db connection";
//} else {
//echo "Connected successfully";
//}

 $sql_vaicajums="SELECT question as jautajums, rankPoints as punkti 
     FROM questionrank";

    $result = mysqli_query($d,$sql_vaicajums);
if (mysqli_num_rows($result)<1) {
        print "</br>datu nav</br>";
    }
    else {
        
        $outp = "";
        while($rinda = mysqli_fetch_array($result)) {
            if ($outp != "") {$outp .= ",";}
            $outp .= '{"question":"'  . $rinda["jautajums"] . '",';
            $outp .= '"points":"'   . $rinda["punkti"]        . '"}';
        }
        $outp ='{"records":['.$outp.']}';
        
//        $conn->close();

        echo($outp);
    }

?>