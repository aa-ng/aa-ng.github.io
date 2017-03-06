var coords = new Array();

self.onmessage = function(event)
{
	coords.push(event.data[0]);
	console.log(event.data[0]);
	haversine();
	//postMessage(""+message[0]);
}

function haversine() {
    

    var message;
    //if (typeof coords.length === null)
    { 
	    for (var i = 0; i < coords.length; i++)
	    {
	    	message = message+toRad(lat2-lat1);
		}
	} 
	console.log("[worker][haversine] message: "+message);
    //postMessage("");
    //setTimeout("timedCount()",500);
}

function toRad(x) 
{
   return x * Math.PI / 180;
}