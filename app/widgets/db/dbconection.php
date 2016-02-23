<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

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

//print " <table>
//  <tr>
//    <th>Vieta</th>
//    <th>Jautajums</th>
//    <th>Punkti</th>
//  </tr>";
//$i=1;
//    while($rinda = mysqli_fetch_array($result))
//    {  
//        print "<tr>" ;
//        print "<td>".$i.".</td>" ;
//        print "<td>".$rinda["jautajums"]."</td>" ;
//        print "<td>".$rinda["punkti"]."</td>" ;
//        $i++;
//    }
        
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