<?php

// Replace this with your own email address
$siteOwnersEmail = 'contact@bhaveshpatel.xyz';
$personal = 'bhaveshpatel640@gmail.com';
$config = parse_ini_file('config.ini');

if($_POST) {

	$conn = mysqli_connect($config['servername'],$config['username'],$config['password'],$config['dbname']);
	
	// Check connection
	if (!$conn) {
	    die("Connection failed:.".$conn->connect_error);
	}


   $name        	= mysqli_real_escape_string($conn,trim(stripslashes($_POST['contactName'])));
   $email 			= mysqli_real_escape_string($conn,trim(stripslashes($_POST['contactEmail'])));
   $subject 		= mysqli_real_escape_string($conn,trim(stripslashes($_POST['contactSubject'])));
   $contact_message = mysqli_real_escape_string($conn,trim(stripslashes($_POST['contactMessage'])));



   // Check Name
	if (strlen($name) < 2) {
		$error['name'] = "Please enter your name.";
	}
	// Check Email
	if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
		$error['email'] = "Please enter a valid email address.";
	}
	// Check Message
	if (strlen($contact_message) < 15) {
		$error['message'] = "Please enter your message. It should have at least 15 characters.";
	}
   // Subject
	if ($subject == '') { $subject = "Contact Form Submission"; }


    // Set Message
    $message .= "Email from: " . $name . "<br />";
    $message .= "Email address: " . $email . "<br />";
    $message .= "Message: <br />";
    $message .= $contact_message;
    $message .= "<br /> ----- <br /> This email was sent from your site's contact form. <br />";

    // Set From: header
    $from =  $name . " <" . $email . ">";

    // Email Headers
	$headers  = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
 	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


   if (!$error) {
   	
      ini_set("sendmail_from", $siteOwnersEmail); // for windows server
	mail($personal, $name." : ".$subject, $message, $headers);
      $mail = mail($siteOwnersEmail, $subject, $message, $headers);
		if ($mail) {
		$sql = "INSERT INTO contact_form(`name`,`email`,`subject`,`message`) VALUES ('$name', '$email','$subject','$contact_message')";

				if ($conn->query($sql)) {
				   // echo $sql."Successfully Inserted";
				} else {
				   // echo $sql."Error while inserting";
				}
		$conn->close();
		echo "OK";

	$file_content = file_get_contents('thankyou.txt');
	
	$reply_email   = $email;
	$reply_subject = "Thanks for Contacting me";
	$reply_message = str_replace("USERNAME",$name,$file_content);
	
	$reply_headers  = "From: " . $siteOwnersEmail . "\r\n";
	$reply_headers .= "Reply-To: ". $personal . "\r\n";
 	$reply_headers .= "MIME-Version: 1.0\r\n";
	$reply_headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


	$mail = mail($reply_email, $reply_subject, $reply_message, $reply_headers);


	} else { 
      	 echo "Something went wrong. Please try again."; 
        }
		
	} # end if - no validation error
	else {

		$response  = (isset($error['name'])) ? $error['name'] . "<br /> \n" : null;
		$response .= (isset($error['email'])) ? $error['email'] . "<br /> \n" : null;
		$response .= (isset($error['message'])) ? $error['message'] . "<br />" : null;
		echo $response;

	} # end if - there was a validation error

}

?>
