var coords = new Array();
var got_start = 0;
var start_lat;
var start_lon;
var message = "";

self.onmessage = function(event)
{
	console.log(got_start);
	if (got_start == 0)
	{
		start_lon = event.data[0].split(',').pop();
		start_lat = event.data[0].substring(0,event.data[0].indexOf(','));
		got_start = 1;
	}
	//else
	{
		console.log(start_lat);
		console.log(start_lon);
		console.log(got_start == 0);
		coords.push(event.data[0]);
		haversine();
	}
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
			var d_lon = toRad(end_lon-start_lon);
			var d_lat = toRad(end_lon-start_lon);
			var radius = 6371;

			var a = Math.sin(d_lat/2) * Math.sin(d_lat/2)+Math.cos(toRad(start_lat)) * Math.cos(toRad(end_lat)) * Math.sin(d_lon/2) * Math.sin(d_lon/2); 
	    	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	    	var d = radius * c;
	    	console.log(c);
	    	message = message +"coordinate "+i+" distance: "+d+"";
		}
	} 
	console.log("[worker][haversine] message: "+message);
    postMessage(message);
    //setTimeout("timedCount()",500);
}

function toRad(x) 
{
   return x * Math.PI / 180;
}