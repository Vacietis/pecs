<?
//$servername = "localhost";
//$username = "root";
//$password = "";
//
//// Create connection
//$conn = new mysqli($servername, $username, $password);
//
//// Check connection
//if ($conn->connect_error) {
//    die("Connection failed: " . $conn->connect_error);
//    echo "error in db connection";
//} 
//echo "Connected successfully";


echo "My first PHP script!";

?>

//<?php
//header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");
//
//$conn = new mysqli("myServer", "myUser", "myPassword", "Northwind");
//
//$result = $conn->query("SELECT CompanyName, City, Country FROM Customers");
//
//$outp = "";
//while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
//    if ($outp != "") {$outp .= ",";}
//    $outp .= '{"Name":"'  . $rs["CompanyName"] . '",';
//    $outp .= '"City":"'   . $rs["City"]        . '",';
//    $outp .= '"Country":"'. $rs["Country"]     . '"}'; 
//}
//$outp ='{"records":['.$outp.']}';
//$conn->close();
//
//echo($outp);
//?>