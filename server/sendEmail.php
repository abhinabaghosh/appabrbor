<?php
ini_set('display_errors', 1); 
error_reporting(E_ALL);

require_once('/opt/bitnami/apache2/htdocs/assets/Amazon_SES/AmazonSESMailer.php');


define('AMAZON_SES_ACCESSKEY',	'AKIAJHEWGXPTXSYCDYBQ');
define('AMAZON_SES_SECRET',	'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');
// define('MAIL_FROM',	'donotreply_iobserve@inboundcrowd.com');
define('MAIL_FROM',	'sendername@inboundcrowd.com');



$toEmail ="avidon.07@gmail.com" ;



$name="test Name";
$mailFrm="ag.grandmaster@gmail.com";
$message="test message";


$mailSubject = 'Contact From Apparbor';
		
$emailBody="Name ".$name.",\n";
$emailBody.="\n";
$emailBody.="\"".$message."\"\n";
$emailBody.="\n";
$emailBody.="\n";
$emailBody.="We Hear You!\n";
$emailBody.="\n";
$emailBody.="\n";
$emailBody.="From ,\n";
$emailBody.="http://www.apparbor.com/";




// try
// {
	// Create a mailer class with your Amazon ID/Secret in the constructor
	$mailer = new AmazonSESMailer(AMAZON_SES_ACCESSKEY, AMAZON_SES_SECRET);
	
	$mailer->AddAddress($toEmail);
	$mailer->SetFrom(MAIL_FROM);
	
	$mailer->Subject = $mailSubject;

	
	$mailer->ContentType = 'text/plain'; 
	$mailer->IsHTML(false);
	$mailer->CharSet = 'utf-8';
	$mailer->Body    = $emailBody;
	
	$mailStatus = $mailer->Send();
	
	echo $mailStatus;
	
	echo "comming here";
	
	
// }
// catch(Exception $ex) 
// {
	// print_r($ex);

// }


?>