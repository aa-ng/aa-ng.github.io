/************************************************************************/
/* lab for CPS630									*
 *Created by Alex Ng Built with and google maps		* 
 *timezone api's 														*
/************************************************************************/

var API_time_key = '&key=AIzaSyAr-rRZPA0jY7jMs0ZIwDEM6WpGGigkB-Y';

var location_search = 'Toronto';
var coordinate_search = 'location=';
var coordinates;

var today_date = new Date();
var timestamp = today_date.getTime()/1000 + today_date.getTimezoneOffset() * 60;

var units ="&units=metric"

var map_server = 'https://maps.googleapis.com/maps/api/';

var service = ['timezone/','geocode/'];

var format = 'json?';

var icon_url;

var location_text = document.getElementById("location");
var location_searchbox = document.getElementById("location_searchbox");
var city_text = document.getElementById("city");
var latitude_text = document.getElementById("latitude");
var longitude_text = document.getElementById("longitude");

var file_text = new Array();
var latitude = 79.4;
var longitude = -79.24; 
var decimal_place = 2;
var day;
var hour;

//Handles scroll events (Shrinks header when scrolled past top padding of body.)
window.onscroll = function (ev)
{
	var body = document.getElementsByTagName('body')[0];
	var header = document.getElementById("header");
	var profile_pic = document.getElementById("profile_pic");
	var home_link = document.getElementById('home_link');

	var offset = parseInt(window.getComputedStyle(body, null).getPropertyValue('padding-top').substring(1,2))+70;
	if ((window.scrollY) >= offset)
	{
		header.classList.add("header_collapse");
	}
	else
	{
		header.classList.remove("header_collapse");
	}
}


function drop_handler()
{
	var dropbox = document.getElementById("dropbox");
	dropbox.ondragenter = dragEnter;
	dropbox.ondragover = dragOver;
	dropbox.ondrop = drop;
	dropbox.onclick = onclick;
	geoLocate();
}

function dragEnter(e)
{
	e.stopPropagation();
	e.preventDefault();
}

function dragOver(e)
{
	e.stopPropagation();
	e.preventDefault();
}

function drop(e)
{
	e.stopPropagation();
	e.preventDefault();

	var data = e.dataTransfer;
	var files = data.files;
	processFiles(files);
}

function onclick(e)
{
	console.log("dropbox clicked");
}

function processFiles(files)
{
	var photo_extentions = ['gif','png','jpg','jpeg'];
	for (var i =  0; i < files.length; i++)
	{
		console.log("[processFiles] file_index: "+i);
		var reader = new FileReader();
		var file = files[i];
		var extention = files[i].name.split('.').pop().toLowerCase();
		if (!(files[i].name.includes(".")))
		{
			alert("file droped has no file extention, file not supported");
			extention = "";
		}
		console.log("[processFiles] file_extention: "+extention);
		reader.onload = function(event)
		{
			var dropbox = document.getElementById("dropbox");
			if (photo_extentions.indexOf(extention) > -1)
				dropbox.style.backgroundImage =	"url('"	+	event.target.result +	"')";
			else if (extention === "txt")
			{
				console.log("[processFiles] text_file: "+ event.target.result);
				file_text.push(event.target.result);
				initMap();
			}
		}
		if (photo_extentions.indexOf(extention) > -1)
			reader.readAsDataURL(file);
		else
			reader.readAsText(file);
	}
} 

//Toggles the header menu
function menuToggle()
{
	var menu_collection = document.getElementById("menu_collection");
	var sidebar = document.getElementById("sidebar");
	var style = window.getComputedStyle(menu_collection);
	var mode = style.getPropertyValue("display");
	var header = document.getElementById("header");

	switch (mode)
	{
		case "none":
			header.classList.add("toggle");
			menu_collection.style.display = "block";
			break;
		case "block":
			header.classList.remove("toggle");
			menu_collection.style.display = "none";
			break;
	}
}

//Locates user's geolocation
function geoLocate()
{
	if (navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(displayGPS);
	}
	else
	{
		alert("Location could not be found");
	}
}

function initMap()
{
	var uluru = {lat: latitude, lng: longitude};
	var map = new google.maps.Map(document.getElementById("map"), { zoom : 7, center : uluru });
	var marker = new google.maps.Marker({ position : uluru, map : map });
	var markers;
	for (var i = 0; i < file_text.length; i++)
	{
		var file_lon = file_text[i].split(',').pop();
		var file_lat = file_text[i].substring(0,file_text[i].indexOf(','));
		if (!(isNumber(file_lat)))
		{
			alert("File is not fomatted correctly: (lat,lng)");
			return -1;
		}
		markers = new google.maps.Marker({
        position: new google.maps.LatLng(file_lat, file_lon),
        map: map });
	}
	if (file_text.length > 0)
		getDistance();
}

function displayGPS(position)
{
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
	coordinates = latitude+","+longitude
	latitude_text.innerHTML = "Latitude: "+latitude.toFixed(decimal_place);
	longitude_text.innerHTML = "Longitude: "+longitude.toFixed(decimal_place);
	getTime();
	geoCode();
	initMap();
}

//Gets the time from google maps timezone api
function getTime()
{
	console.log("[getTime] json_time_server: "+map_server+service[0]+format+coordinate_search+coordinates+API_time_key);
	var request = new XMLHttpRequest();
	request.open('GET', map_server+service[0]+format+coordinate_search+coordinates+"&timestamp="+timestamp+API_time_key, true);
	request.onload = function() 
	{
		//Successfull request
		if (request.status >= 200 && request.status < 400) 
		{
			console.log("[getTime] json_text: "+request.responseText);
			displayTime(JSON.parse(request.responseText));
		} 
		//Unsuccessfull request
		else 
		{
			alert("Google map timezone api could not be accessed");
		}
	};

	request.onerror = function() 
	{
	// There was a connection error of some sort
	};
	request.send();
}

function displayTime(JSON_Response)
{
	
}

function geoCode()
{
	console.log("[geoCode] json_geocode_server: "+map_server+service[1]+format+"latlng="+coordinate_search+coordinates+API_time_key);
	var request = new XMLHttpRequest();
	request.open('GET', map_server+service[1]+format+"latlng="+coordinates+API_time_key);
	request.onload = function()
	{
		if (request.status >= 200 && request.status < 400)
		{
			console.log("[geoCode] json_text"+request.responseText);
			displayLocation(JSON.parse(request.responseText));
		}
		else
		{
			alert("Google map geocode API could not be accessed");
		}
	};

	request.onerror = function()
	{

	};
	request.send();
}

function displayLocation(JSON_Response)
{
	var city_text = document.getElementById("city");
	var location_text = document.getElementById("location");
	var address_text = document.getElementById("address");

	var results = JSON_Response.results;
	var address_components = results[0].address_components;
	
	var city_group = address_components[4].long_name;
	var country = address_components[5].long_name

	city_text.innerHTML = address_components[2].short_name + " " + address_components[2].types[0];
	location_text.innerHTML =  city_group+", "+ country;
	address_text.innerHTML = address_components[0].short_name + " "+address_components[1].short_name; 
}

//Handles search input
function handle_search(event)
{
	if(event.keyCode == 13)
	{
		location_search = location_searchbox.value;
		//do something
	}
}

function getDistance()
{
	/*
	var worker;
	if (typeof(Worker) !== "undefined") 
	{
		worker = new Worker("workers.js");
		worker.postMessage(file_text);
		w.onmessage = function(event) 
		{
            document.getElementById("distance").innerHTML = event.data;
        };
	} 
	else 
	{
    	alert("Web worker functionality not supported by your browser!");
	}
	*/
}

//Returns a string value associated with a week number (0=sunday,...,6=saturday)
function getDay(number)
{
	var day_text = "";
	switch (number)
	{
		case 0: 
			day_text = "Sunday";
			break;
		case 1: 
			day_text = "Monday";
			break;
		case 2: 
			day_text = "Tuesday";
			break;
		case 3: 
			day_text = "Wednesday";
			break;
		case 4: 
			day_text = "Thursday";
			break;
		case 5: 
			day_text = "Friday";
			break;
		case 6: 
			day_text = "Saturday";
			break;
	}
	return day_text;
}

//If the developer wanted they could extend this to only return true for legit coordinates.
function isNumber(n) 
{
    return parseFloat(n) == n;
}
