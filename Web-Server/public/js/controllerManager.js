/*
Copyright (C) 2015 Electronic Arts Inc.  All rights reserved.
 
This software is solely licensed pursuant to the Hackathon License Agreement,
Available at:  www.eapathfinders.com/license
All other use is strictly prohibited. 
*/

var tilt = function(events, connection)
{
	connection.sendMessage(events);
}

$(document).ready(function () 
{
	console.log("Document Loaded");
	$("#circle").click(function(){
		console.log("Boost");
	});

	// INIT..
	conn = new Connection();
	conn.sendMessage({"type": "connect"});

	var m_circle = new BoostButton($("#circle"));

	//send gyro data
	if (window.DeviceOrientationEvent) 
	{
    	window.addEventListener("deviceorientation", function () {
        	tilt({"type":"gyro", "alpha": event.alpha, "beta": event.beta, "gamma": event.gamma}, conn);
    	}, true);
	}
<<<<<<< HEAD
=======

	$("#circle").click(function(){
		console.log("Boost");
		conn.sendMessage({"type": "boost"});
	});

	var m_circle = new BoostButton($("#circle"));
>>>>>>> parent of 9800346... various improvements
	
	// Process incoming game messages
	$(document).on("game_message", function (e, message) 
	{
		console.log("Received Message: " + JSON.stringify(message));
		var payload = message.payload;
		switch (payload.type) 
		{
			//your code here
		}
	});
});

