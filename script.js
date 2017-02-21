
window.onscroll = function (e)
{
	var brand = document.getElementById("brand");
	var header = document.getElementById("header");
	var slogan = document.getElementById("slogan");
	var body = document.getElementsByTagName("body")[0];

	var offset = parseInt(window.getComputedStyle(body, null).getPropertyValue('padding-top').substring(0,3));

	if (window.scrollY >= offset)
	{
		//header.style.padding = "5px";
		header.classList.add("expand");
		slogan.style.display = "none";
	}
	else
	{
		//header.style.padding = "28px";
		header.classList.remove("expand");
		slogan.style.display = "initial";
	}
};