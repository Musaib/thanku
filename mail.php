<?php

$to = "connect@idothanku.com";
$subject = $_POST['subject'];
$body = $_POST['body'];
$headers = "From: webmaster@idothanku.com";

$send = mail($to,$subject,$body,$headers);

$return = array();

if($send) {
	$return['success'] = true;
	$return['message'] = "Thank you for submitting your valuable inputs.";
}
else {
	$return['success'] = false;
	$return['message'] = "Oops! Something went wrong. Please try again later";
}

echo json_encode($return);