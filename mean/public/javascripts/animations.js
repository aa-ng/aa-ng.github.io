
$(document).ready(function(){

});

$(window).scroll(function (event){
    var scroll = $(window).scrollTop();
    if (scroll <= 2)
    {
        //$("nav").css("position","relative");
        $("#nav-title").removeClass("expand");
        $("nav").removeClass("collapse");
        $("#nav-message").css("display","initial");
    }
    else
    {
        //$("nav").css("position","fixed");
        $("nav").addClass("collapse");
        $("#nav-title").addClass("expand");
        $("#nav-message").css("display","none");
    }
});