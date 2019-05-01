<?php

 include 'dbConnection.php';

 $sql = "SELECT * FROM mediaDump WHERE fileId = :fileId"; 
 $stmt = $dbConn->prepare($sql);
 $stmt->execute( array(":fileId"=> $_GET['fileId']));

 $stmt->bindColumn('fileData', $data, PDO::PARAM_LOB);
 $record = $stmt->fetch(PDO::FETCH_BOUND);
 
 if (!empty($record)){
	//specifies the mime type
    header('Content-Type:' . $record['fileType']);   
    header('Content-Disposition: inline;');
    echo $data; 
  } 
?>
