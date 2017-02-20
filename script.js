
window.onscroll = function (e)
{
	var brand = document.getElementById("brand");
	var header = document.getElementById("header");
	var slogan = document.getElementById("slogan");
	var body = document.getElementsByTagName("body")[0];

	var offset = parseInt(window.getComputedStyle(body, null).getPropertyValue('padding-top').substring(1,2));

	if (window.scrollY >= offset)
	{
		header.style.padding = "5px";
		brand.style.padding = "5px";
		slogan.style.padding = "5px";
		//header.style.fontSize = "8px";
		slogan.style.display = "none";
	}
	else
	{
		header.style.padding = "28px";
		brand.style.padding = "10px";
		slogan.style.padding = "10px";
		//header.style.fontSize = "32px";
		slogan.style.display = "initial";
	}
};