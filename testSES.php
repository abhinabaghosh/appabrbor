<?php
ini_set('display_errors', 1); 
error_reporting(E_ALL);
require_once('/opt/bitnami/apache2/htdocs/assets/Amazon_SES/AmazonSESMailer.php');

$toEmail="avidon.07@gmail.com";
$subject="contact Us test";

$body="this is test body";

$mailer = new AmazonSESMailer('AKIAJHEWGXPTXSYCDYBQ', 'GoCxNYjHBtJwDDpaxb0++YCHw/CgmH8X9DRZNrRj');

			$mailer->AddAddress($toEmail);
			$mailer->SetFrom('donotreply_iobserve@inboundcrowd.com');
			
			$mailer->Subject = $subject;
			//$mailer->MsgHtml($this->mailBody);
			
			//$mailer->ContentType = 'text/plain'; 
       		$mailer->IsHTML(false);
			$mailer->Body    = $body;
			//echo get_include_path();
			$mailStatus = $mailer->Send();
			
	echo $mailStatus ;
	
	echo "no error upto this";








?>