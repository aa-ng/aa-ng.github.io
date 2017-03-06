var coords;

self.onmessage = function(message)
{
	coords = message;
	console.log(message[0].length);
	console.log(message[0]);
	//postMessage(""+message[0]);
}

function haversine() {
    

    var message; 
    for (var i = 0; i < coords.length; i++)
    {
    	message = message+toRad(lat2-lat1);
    } 
    //postMessage("");
    //setTimeout("timedCount()",500);
}

function toRad(x) 
{
   return x * Math.PI / 180;
}

haversine();