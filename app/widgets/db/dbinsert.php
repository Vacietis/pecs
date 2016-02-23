<?php

$servername = "127.0.0.1";
$username = "root";
$password = "";
$myDB = "dragDrop";

// Create connection
//$conn = mysqli_connect($servername, $username, $password, $myDB);
$d = mysqli_connect($servername,$username,$password,$myDB) or die('Nevaru pievienoties datubāzei');

if( isset($_POST['type']) && !empty( isset($_POST['type']) ) ){
	$type = $_POST['type'];
	
	switch ($type) {
		case "save_rank":
			save_rank($mysqli);
			break;
		case "get_rank":
			get_rank($mysqli);
			break;
		default:
			invalidRequest();
	}
}else{
	invalidRequest();
}

function save_rank($mysqli){
	try{
		$questionArray = $mysqli->real_escape_string(isset( $_POST['questionArr']['newArray'] ) ? $_POST['questionArr']['newArray'] : '');
	
		if($questionArray == ''){
			throw new Exception( "Required fields missing, Please enter and submit" );
		}
        
        while($rinda = mysqli_fetch_array($questionArray)) {
            $query = "UPDATE questionrank SET `rankPoints` = '$questionArray[i].rankPoints' WHERE `question` = $questionArray[i].question";
        }
        
        
		
	
		if( $mysqli->query( $query ) ){
			$data['success'] = true;
			if(!empty($id))$data['message'] = 'User updated successfully.';
			else $data['message'] = 'User inserted successfully.';
			if(empty($id))$data['id'] = (int) $mysqli->insert_id;
			else $data['id'] = (int) $id;
		}else{
			throw new Exception( $mysqli->sqlstate.' - '. $mysqli->error );
		}
		$mysqli->close();
		echo json_encode($data);
		exit;
	}catch (Exception $e){
		exit;
	}
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
	$data = array();
	$data['success'] = false;
	$data['message'] = "Invalid request.";
	echo json_encode($data);
	exit;
}

?>