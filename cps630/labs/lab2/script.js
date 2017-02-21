/************************************************************************/
/*JavaScript, JSON, AJAX lab for CPS630									*
 *Created by Alex Ng Built with openweathermap.org and google maps		* 
 *timezone api's 														*
/************************************************************************/

var API_weather_key = '&APPID=a0376b589fd728ffccbe4ccf6e2a5a39';
var API_time_key = '&key=AIzaSyAr-rRZPA0jY7jMs0ZIwDEM6WpGGigkB-Y';

var location_search = 'Toronto';
var coordinate_search = 'location=';
var coordinates;

var today_date = new Date();
var timestamp = today_date.getTime()/1000 + today_date.getTimezoneOffset() * 60;

var units ="&units=metric"

var JSON_time_server = 'https://maps.googleapis.com/maps/api/timezone/json?';
var JSON_weather_server = 'http://api.openweathermap.org/data/2.5/weather?q=';
var JSON_forcast_server = 'http://api.openweathermap.org/data/2.5/forecast?q=';

var icon_url = "http://cake-net.zapto.org/~alex/rsc/img/weather/";

var location_text = document.getElementById("location");
var temperature_text = document.getElementById("temperature");
var location_searchbox = document.getElementById("location_searchbox");

var weather_object;
var longitude;
var latitude; 
var day;
var hour;
var sunset_hour;
var sunrise_hour;

//Handles scroll events (Shrinks header when scrolled past top padding of body.)
window.onscroll = function (ev)
{
	var body = document.getElementsByTagName('body')[0];
	var header = document.getElementById("header");
	var profile_pic = document.getElementById("profile_pic");
	var home_link = document.getElementById('home_link');

	//window.innerHeight
	//console.log(window.scrollY);
	//console.log(window.getComputedStyle(body, null).getPropertyValue('padding-top'));
	var offset = parseInt(window.getComputedStyle(body, null).getPropertyValue('padding-top').substring(1,2))+70;
	if ((window.scrollY) >= offset)
	{
		//header.style.opacity = "0.9";
		header.style.padding = "5px";
		//profile_pic.style.width = "35%";
		//home_link.style.fontSize = "18px";
	}
	else
	{
		//header.style.opacity = "1";
		header.style.padding = "24px";
		//home_link.style.fontSize = "36px";
		//profile_pic.style.width = "60%";
		//profile_pic.
	}
}

//Handles unit conversions
function convertUnits(text_link)
{
	if (text_link.innerHTML === "Metric")
	{
		if (units != "&units=metric")
		{
			units = "&units=metric";
			//async update
			loadWeather();
		}
	}
	else if (text_link.innerHTML === "Imperial")
	{
		if (units != "&units=imperial")
		{
			units = "&units=imperial";
			loadWeather();
		}
	}
	else
	{

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

	/*
	style=document.getComputedStyle(sidebar);

	var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	
	sidebar.classList.add("toggle");
	*/
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

function loadWeather()
{
	console.log("[loadWeather] json_weather_server: "+JSON_weather_server+location_search+units+API_weather_key);
	//HTTP request to server
	var request = new XMLHttpRequest();
	request.open('GET', JSON_weather_server+location_search+units+API_weather_key, true);
	request.onload = function() 
	{
		//Successfull request
		if (request.status >= 200 && request.status < 400) 
		{
			parseJSON(request.responseText);
		} 
		//Unsuccessfull request
		else 
		{
			alert("openweathermap.org's api could not be accessed");
		}
	};

	request.onerror = function() 
	{
	// There was a connection error of some sort
	};
	request.send();
}

function parseJSON(text)
{
	console.log("[parseJSON] json_text: "+text);
	weather_object = JSON.parse(text);
	displayWeather(weather_object);
}

function displayWeather(weather_object)
{
	var weather_text = document.getElementById("weather_today");
	var humidity_text = document.getElementById("humidity");
	var wind_text = document.getElementById("wind");
	var sunrise_text = document.getElementById("sunrise");
	var sunset_text = document.getElementById("sunset");
	var today = weather_object.weather[0];
	var temperature = weather_object.main.temp;

	longitude = weather_object.coord.lon;
	latitude = weather_object.coord.lat;
	//alert("Long-Lat: "+longitude+","+latitude);
	coordinates = latitude+","+longitude;
	var sunset_date = new Date(weather_object.sys.sunset*1000);
	var sunrise_date = new Date(weather_object.sys.sunrise*1000);
	sunrise_text.innerHTML = "Sunrise at: "+sunrise_date.getHours() + ":"+ sunrise_date.getMinutes();
	sunset_text.innerHTML = "Sunset at: "+sunset_date.getHours() + ":" + sunset_date.getMinutes();
	sunset_hour = sunset_date.getTime();
	sunrise_hour = sunrise_date.getTime();
	
	//alert(new Date(weather_object.sys.sunrise*1000).getHours());
	//alert(new Date(weather_object.sys.sunset*1000).getHours());
	//alert("Sunrise hour: "+sunrise_hour);
	getTime(today);
	var weather_units_text = "";
	if (units == "&units=metric")
		weather_units_text = "°C";
	else
		weather_units_text = "°F";

	temperature_text.innerHTML = (temperature)+weather_units_text;
	humidity_text.innerHTML = "Humidity: "+weather_object.main.humidity+"%";
	var wind_units_text = "";
	if (units == "&units=metric")
		wind_units_text = " meter/second";
	else 
		wind_units_text = " miles/second";

	wind_text.innerHTML = "Wind speed: "+weather_object.wind.speed+wind_units_text;
	//alert("Wind speed: "+weather_object.wind.speed);
	weather_text.innerHTML = today.description+", "+today.main;
	location_text.innerHTML = weather_object.name;
	//timestamp_field.innerHTML = weather_object
	loadForcast();
}

function getTime(today)
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
			displayTime(JSON.parse(request.responseText), today);
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

//
function displayTime(time, today)
{
	var time_field = document.getElementById('time');
	/*
	var date = new Date('1/1/1970'); //new Date('1/1/1970');
	var timestamp = date.getTime();
	*/
	var offset = new Date().getTime();
	var date = new Date(time.dstOffset+time.rawOffset*1000+timestamp * 1000);
	console.log("[displayTime] time: "+date.toString());
	time_field.innerHTML = date.toString();
	day = date.getDay();
	hour = date.getTime();
	displayGreeting(date.getHours());
	console.log("[displayTime] today: "+today);
	//Since icon depends on time we must have it run after our async http request.
	displayIcon(today);
}

/* */
function displayGreeting(time)
{
	var greeting_text = document.getElementById("greeting");

	console.log("[displayGreeting] morning: "+(time > 5 && time < 12));

	if (time > 5 && time < 12)
		greeting_text.innerHTML = "Good morning!";
	else
		greeting_text.innerHTML = "Good evening!";
}

function displayIcon(weather)
{
	var weather_icon = document.getElementById("weather_icon");
	var code = weather.main;
	var extention = ".png";
	console.log("[displayIcon] hour: "+hour);
	//alert("Sunrise hour icon: "+sunrise_hour);
	//alert("Sunset hour icon: "+sunset_hour);
	//alert(hour > sunrise_hour);
	//alert(hour < sunset_hour);
	var time_code;
	if  (hour > sunrise_hour && hour < sunset_hour)
		time_code = "";
	else
		time_code = "_night";
	
	switch (code)
	{
		case "Clouds":
			//Cloud weather icon
			weather_icon.src = icon_url+"cloudy1"+time_code+extention;
			break;
		case "Rain":
			weather_icon.src = icon_url+"shower1"+time_code+extention;
			break;
		case "Snow":
			weather_icon.src = icon_url+"snow1"+time_code+extention;
			break;
		case "Clear":
			weather_icon.src = icon_url+"sunny"+time_code+extention;
			break;
	}
}

/* Returns temperature of main webpage to 2 decimal places */
function kelvinToCelcius(kelvin)
{
	return ((kelvin - 273.15).toFixed(2)).toString() + "°C";
}

function handle_search(event)
{
	if(event.keyCode == 13)
	{
		location_search = location_searchbox.value;
		loadWeather();
	}
}

//Sends http request to API server/backend
function loadForcast()
{
	console.log("[loadForcast] json_forcast_server: "+JSON_weather_server+location_search+units+API_weather_key);
	//HTTP request to server
	var request = new XMLHttpRequest();
	request.open('GET', JSON_forcast_server+location_search+units+"&APPID=a0376b589fd728ffccbe4ccf6e2a5a39", true);
	request.onload = function() 
	{
		//Successfull request
		if (request.status >= 200 && request.status < 400) 
		{
			console.log("[loadForcast] json_text: "+request.responseText);
			displayForcast(JSON.parse(request.responseText));
		} 
		//Unsuccessfull request
		else 
		{
			alert("openweathermap.org's api could not be accessed");
		}
	};

	request.onerror = function() 
	{
	// There was a connection error of some sort
	};
	request.send();
}

//Displays JSON object (the forcast) to the HTML document
function displayForcast(forcast_object)
{
	var forcast_text = document.getElementById("forecast");
	var today_forecast_text = document.getElementById("hour_forecast");
	var days = forcast_object.list;
	var max_temp = new Array(); 
	var forcast_today = new Array();
	var forcast_hour = new Array();
	var hour_counter = 0;

	for (var i = 0; i < days.length; i++)
	{
		var daynumber = new Date(days[i].dt*1000).getDay();

		//Can use either todays forcast (or hourly for x (12) hours.)
		if (hour_counter <= 4 /* daynumber == day */)
		{
			forcast_today[hour_counter] = (days[i].main.temp_max);
			var padding;
			if ((new Date(days[i].dt*1000).getMinutes()+"").length < 2)
			{
				padding = "0";
				forcast_hour[hour_counter] = new Date(days[i].dt*1000).getHours() + ":" + new Date(days[i].dt*1000).getMinutes()+padding;
			}
			/*
			Not necessary for this API since all times end with 0 minutes (so we always pad)
			else
				forcast_hour[hour_counter] = new Date(days[i].dt*1000).getHours() + ":" + new Date(days[i].dt*1000).getMinutes();
			*/
			hour_counter++;
		}
		//console.log("[displayForcast] days: "+daynumber);
		//console.log("[displayForcast] truth: "+max_temp[daynumber]);
		if (!(max_temp[daynumber]) || max_temp[daynumber] < days[i].main.temp_max) 
		{
			max_temp[daynumber] = (days[i].main.temp_max);
			//console.log("[displayForcast] max_temp: "+max_temp[daynumber]);
		}
	}
	
	//console.log("[displayForcast] max_temp.length: "+max_temp.length);
	var forcast = "<h1>Forecast</h1>";

	console.log("[displayForcast] day: "+day);
	var i = day;
	while (max_temp[i])
	//for (var i = 0; i < max_temp.length; i++)
	{
		if (i >= 6)	
			i = 0;
		var day_text = getDay(i);
		var units_text = "";
		if (units == "&units=metric")
			weather_units_text = "°C";
		else
			weather_units_text = "°F";
		forcast = forcast+"<p>"+day_text+": "+max_temp[i]+weather_units_text+"</p>"
		console.log("[displayForcast] max_temp: "+day_text+","+max_temp[i]+weather_units_text);
		i++;
	}

	forcast_text.innerHTML = forcast;
	var hour_forecast = "<h1>Today (Hourly) forecast</h1><p>Time : Temperature </p>";
	for (var counter = 0; counter < forcast_today.length; counter++)
	{
		hour_forecast = hour_forecast + "<p>"+forcast_hour[counter]+" : "+forcast_today[counter]+weather_units_text+"</p>";
	}
	today_forecast_text.innerHTML = hour_forecast;
}

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