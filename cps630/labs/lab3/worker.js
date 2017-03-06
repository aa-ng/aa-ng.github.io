var coords = new Array();
var got_start = 0;
var start_lat;
var start_lon;
var message;

self.onmessage = function(event)
{
	console.log(got_start);
	if (got_start == 0)
	{
		start_lon = event.data[0].split(',').pop();
		start_lat = event.data[0].substring(0,event.data[0].indexOf(','));
		got_start = 1;
	}
	coords.push(event.data[0]);
	console.log(event.data[0]);
	haversine();
	//postMessage(""+message[0]);
}

function haversine() 
{
    
    //if (typeof coords.length === null)
    { 
	    for (var i = 0; i < coords.length; i++)
	    {
	    	var end_lon = coords[i].split(',').pop();
			var end_lat = coords[i].substring(0,coords[i].indexOf(','));
	    	message = message+toRad(end_lon-end_lat);
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