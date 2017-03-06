var coords;

self.onmessage = function(event)
{
	coords = event.data[0];
	console.log(event.data[0].length);
	console.log(event.data[0]);
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