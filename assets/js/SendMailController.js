(function(){


    var app= angular.module("mail",[] );
   


    var SendMailController  =   function ($scope,$http,$interval){

    	 $scope.contactMsg="We’d love to hear from you. Get in touch with us to get your awesome App";

    	$scope.submit = function() {

    		//var url="http://www.apparbor.com:8000/sendMail";
    		//var url="node/sendMail";
    		//var url="http://localhost:8000/sendMail";
        var url="sendMail";

    		var senderName  =   $scope.userName;
		    var senderEmail =   $scope.userEmail;
		    var message     =   $scope.userMsg;

    		$scope.contactMsg="Sending Your Message";
    			/**/

			var request = $http({
					                method: "post",
					                url: url,
					                data: {
					                    name: senderName,
					                    email: senderEmail,
					                    message: message
					                }
        	});
            // Store the data-dump of the FORM scope.
            request.success(
                function(data){
                   // $scope.cfdump = data;
                   if(data.status)
                   {	
                   		console.log(data);
                   		$scope.contactMsg="Thank you for contacting us. We will get back to you soon.";
                   		$scope.userName  =   "";
					    $scope.userEmail =   "";
					    $scope.userMsg    =  "";

                   }
                   else
                   {
                   		console.log(data);
                   		$scope.contactMsg="There is some problem with sending your message. Please Try again.";

                   }

               
			});


            request.error(
                function(error){
                   // $scope.cfdump = data;
                   console.log(error);
                   $scope.contactMsg="There is some problem with sending your message. Please Try again.";

			});

    	};
    		
    	$scope.userName  =   "dsf";
	    $scope.userEmail =   "a@com";
	    $scope.userMsg    =  "adsd";


    };

    

	app.controller("SendMailController",SendMailController);




}());