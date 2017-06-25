function enableModal(){
    $(document).ready(function()
    {
        //modal windows
        var modals = $("div[type='modal']");
        //close modal spans
        var modalsClose = $("span[type='modalClose']");
        //open modal buttons
        var modalsOpen = $("button[type='modalButton']");

        modalsClose.click(function () {
            log('modalClose', this.className);
            $("#" + this.className).css('display', 'none');
        });

        modalsOpen.click(function () {
            log('modalButton', $(this).attr('name'));
            if ($("#" + $(this).attr('name')).css('display') == 'block')
                $("#" + $(this).attr('name')).css('display', 'none');
            else
                $("#" + $(this).attr('name')).css('display', 'block');
        });

        log('modals', 'enabled');
    });
}

$("button#fab").on("click", function() {
    $("body").scrollTop(0);
});

//capture tab key press for textarea
$("div.center").on('keydown', 'textarea', function(e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode == 9) {
        e.preventDefault();
        // call custom function here
    }
});

//add tabbing functionality to textarea
$(document).delegate('textarea', 'keydown', function(e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode == 9) {
        e.preventDefault();
        var start = $(this).get(0).selectionStart;
        var end = $(this).get(0).selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        $(this).val($(this).val().substring(0, start)
            + "\t"
            + $(this).val().substring(end));

        // put caret at right position again
        $(this).get(0).selectionStart =
            $(this).get(0).selectionEnd = start + 1;
    }
});

//standardized log function for consistent format in console
function log(tag,message){ console.log("["+JSON.stringify(tag)+"]"+" : "+JSON.stringify(message))}

/*
 * Converts multi spaced string to just the string before the first space
 * (Delimits by space character and returns the first token)
 */
function titleToId(title)
{
    //delimit title by spaces
    var id = title.split(" ");
    //get first word and remove extra characters such as commas for the id
    id = id[0].replace(',','');
    return id;
}