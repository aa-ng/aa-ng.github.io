var cards = [];
var card;
var borders = [];

//unused
$(document).ready(function(){

});

//if the window/viewport resized
$(window).resize(function() {
    getBorders(cards);
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
    var temp = getCard(scroll);

    if (card != temp)
    {
        if (card)
            $("#nav-"+card).attr("role","presentation");
        card = temp;
        $("#nav-"+card).attr("role","active");
    }
});

function scrollAnimate()
{
    $("div[class^='card']").each(function(){
        cards.push(this.id);
    });
    log("Cards",(cards.toString()));
    getBorders(cards);
}

function getCard(scroll)
{
    var totalHeight = 0;
    for (var i = 0; i < borders.length; i++)
    {
        if (scroll <= borders[i] + totalHeight - 2 * $("nav").outerHeight())
            return cards[i];
        totalHeight+=borders[i];
    }
}

function getBorders(cards)
{
    for (var i = 0; i < cards.length; i++)
    {
        var height = $("#"+cards[i]).outerHeight(true);
        borders.push(height);
        log("Borders: "+i+":"+cards[i],height);
    }
}