<?php

	/*
		Contact Form Mail Handler — Portfolio of Adarsh Mishra
		Server-side validation included.
	*/

	$data['error'] = false;

	$name    = $_POST['name'];
	$email   = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	if ( empty($name) ) {
		$data['error'] = 'Please enter your name.';
	} elseif ( filter_var($email, FILTER_VALIDATE_EMAIL) == false ) {
		$data['error'] = 'Please enter a valid email address.';
	} elseif ( empty($subject) ) {
		$data['error'] = 'Please enter a subject.';
	} elseif ( empty($message) ) {
		$data['error'] = 'The message field is required!';
	} else {
		$formcontent = "From: $name\nSubject: $subject\nEmail: $email\nMessage: $message";

		// Adarsh Mishra — portfolio contact email
		$recipient  = "am2594137@gmail.com";
		$mailheader = "From: $email \r\n";

		if ( mail($recipient, $name, $formcontent, $mailheader) == false ) {
			$data['error'] = 'Sorry, an error occurred. Please try again.';
		} else {
			$data['error'] = false;
		}
	}

	echo json_encode($data);

?>
