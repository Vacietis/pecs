<?php

$servername = "127.0.0.1";
$username = "root";
$password = "";
$myDB = "dragDrop";

// Create connection
//$conn = mysqli_connect($servername, $username, $password, $myDB);
$mysqli = new mysqli($servername,$username,$password,$myDB);

if( isset($_POST['questionArr']) && !empty( isset($_POST['questionArr']) ) ){
// $type = $_POST['type'];
    
    $questionArray = $_POST['questionArr'];
    
    foreach ($questionArray as $q) {
            $question = $q['question'];
            $points = $q['points'];
//            $counter++;
        
            $query = "UPDATE questionrank SET `rankPoints` = `rankPoints` + '$points' WHERE `question` = '$question'";

            if( $mysqli->query( $query ) ){
                    echo "DB UPDATED";
            }else{
                throw new Exception( $mysqli->sqlstate.' - '. $mysqli->error );
            }
    
    }   
    
    var_dump($questionArray);
 
// switch ($type) {
//  case "save_rank":
//   save_rank($mysqli);
//   break;
//  case "get_rank":
//   get_rank($mysqli);
//   break;
//  default:
//   invalidRequest();
// }
    
}else{
 invalidRequest();
}

function save_rank($mysqli){
// try{
//        
//        //$questionArray = (array)json_decode($_POST['questionObj']);
////        $questionArray = $_POST['questionObj'];
//        foreach ($questionArray as $key => $questionRank) {
//            $question = $mysqli->real_escape_string($questionRank->question);
//            $points = $mysqli->real_escape_string($questionRank->points);
//            $counter++;
//            echo $question;
//            echo "\r\n";
//            echo $points;
//            echo "\r\n";
//            echo $counter;
//            echo "\r\n";
//        //    $query = "UPDATE questionrank SET `rankPoints` = '44' WHERE `question` = 'jautajums$counter'";
//        //    $query = "UPDATE questionrank SET rankPoints='$points' WHERE question=$question";
//            $query = "UPDATE questionrank SET `rankPoints` = '$points' WHERE `question` = '$question'";
//        //    "UPDATE testimonials SET name='$name', content='$content' WHERE id=$id"
//
//        //    echo "DONE \r\n";
//        //    $question = "";
//        //    $points = "";
//
//            if( $mysqli->query( $query ) ){
//                    echo "wazaaaaaaaaaaaaaaaaa";
//            }else{
//                throw new Exception( $mysqli->sqlstate.' - '. $mysqli->error );
//            }
//    
//
//// echo json_encode($data);
//}
//        
//    
//    $mysqli->close();
//    
//}
//        }catch (Exception $e){
//            exit;
//        }
}

function get_rank($mysqli){
 try{
 
  $query = "SELECT * FROM `employee` order by id desc limit 8";
  $result = $mysqli->query( $query );
  $data = array();
  while ($row = $result->fetch_assoc()) {
   $row['id'] = (int) $row['id'];
   $data['data'][] = $row;
  }
  $data['success'] = true;
  echo json_encode($data);exit;
 
 }catch (Exception $e){
  $data = array();
  $data['success'] = false;
  $data['message'] = $e->getMessage();
  echo json_encode($data);
  exit;
 }
}

function invalidRequest()
{
// $data = array();
// $data['success'] = false;
// $data['message'] = "Invalid request.";
$servername = "127.0.0.1";
$username = "root";
$password = "root";
$myDB = "dragDrop";

// Create connection
//$conn = mysqli_connect($servername, $username, $password, $myDB);
$mysqli = new mysqli($servername,$username,$password,$myDB);

    $object1 = new stdClass();
    $object1->question = "jautajums0";
    $object1->points = "120";
    $myArray[] = $object1;
    $object2 = new stdClass();
    $object2->question = "jautajums1";
    $object2->points = "110";
    $myArray[] = $object2;
    $object3 = new stdClass();
    $object3->question = "jautajums3";
    $object3->points = "160";
    $myArray[] = $object3;
    $object4 = new stdClass();
    $object4->question = "jautajums4";
    $object4->points = "100";
    $myArray[] = $object4;
    var_dump($myArray);

    $counter = 0;
foreach ($myArray as $key => $questionRank) {
    $question = $mysqli->real_escape_string($questionRank->question);
    $points = $mysqli->real_escape_string($questionRank->points);
    $counter++;
    echo $question;
    echo "\r\n";
    echo $points;
    echo "\r\n";
    echo $counter;
    echo "\r\n";
//    $query = "UPDATE questionrank SET `rankPoints` = '44' WHERE `question` = 'jautajums$counter'";
//    $query = "UPDATE questionrank SET rankPoints='$points' WHERE question=$question";
    $query = "UPDATE questionrank SET `rankPoints` = '$points' WHERE `question` = '$question'";
//    "UPDATE testimonials SET name='$name', content='$content' WHERE id=$id"
    
//    echo "DONE \r\n";
//    $question = "";
//    $points = "";
    
    if( $mysqli->query( $query ) ){
            echo "wazaaaaaaaaaaaaaaaaa";
    }else{
        throw new Exception( $mysqli->sqlstate.' - '. $mysqli->error );
    }

}
    
    var_dump($questionArray);
        
    
    $mysqli->close();
    
}

?>