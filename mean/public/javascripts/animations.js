var cards = [];
var card;
var borders = [];

//unused
$(document).ready(function(){
    var scrollTo = function(top) {
        var content = $(".mdl-layout__content");
        var target = top ? 0 : $(".page-content").height();
        content.stop().animate({ scrollTop: target }, "slow");
    };

    var scrollToTop = function() {
        scrollTo(true);
    };

    $(function() {
        $("#fab").click(scrollToTop);
    });
});