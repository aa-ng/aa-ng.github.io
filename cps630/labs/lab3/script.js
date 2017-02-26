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

var JSON_time_server = 'https://maps.googleapis.com/maps/api/timezone/json?';

var icon_url;

var location_text = document.getElementById("location");
var location_searchbox = document.getElementById("location_searchbox");
var city_text = document.getElementById("city");
var latitude_text = document.getElementById("latitude");
var longitude_text = document.getElementById("longitude");

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
		header.style.padding = "5px";
	}
	else
	{
		header.style.padding = "24px";
	}
}

window.onload = function ()
{
	var dropbox = document.getElementById("dropbox");
	dropbox.ondragenter = dragEnter;
	dropbox.ondragover = dragOver;
	dropbox.ondrop = drop;
}

function dragEnter(e)
{

}

function dragOver(e)
{

}

function drop(e)
{
	e.stopPropagation();
	e.preventDefualt();

	var data = e.dataTransfer;
	var files = data.files;
	processFiles(files);
}

function processFiles(files)
{
	for (var i =  0; i < files.length; i++)
	{
		console.log(i);
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
			menu_collection.style.display = "none";
			break;
	}
}

//Locates user's geolocation
function geoLocate()
{
	if (navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(displayLocation);
	}
}

function initMap()
{
	var uluru = {lat: latitude, lng: longitude};
	var map = new google.maps.Map(document.getElementById("map"), { zoom : 7, center : uluru });
	var marker = new google.maps.Marker({ position : uluru, map : map });
}

function displayLocation(position)
{
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
	coordinates = latitude+","+longitude
	latitude_text.innerHTML = "Latitude: "+latitude.toFixed(decimal_place);
	longitude_text.innerHTML = "Longitude: "+longitude.toFixed(decimal_place);
	getTime();
	initMap();
}

//Gets the time from google maps timezone api
function getTime()
{
	console.log("[getTime] json_time_server: "+JSON_time_server+coordinate_search+coordinates+API_time_key);
	var request = new XMLHttpRequest();
	request.open('GET', JSON_time_server+coordinate_search+coordinates+"&timestamp="+timestamp+API_time_key, true);
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

//Handles search input
function handle_search(event)
{
	if(event.keyCode == 13)
	{
		location_search = location_searchbox.value;
		//do something
	}
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
