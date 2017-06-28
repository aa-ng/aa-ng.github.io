//Local storage object
var Storage = window.localStorage;

log('localStorage', Storage);
checkLocalStorage();

//check browser compatibility for local storage and if any items are already stored
function checkLocalStorage()
{
    //if browser supports local storage
    if (typeof(Storage) !== "undefined")
    {
        //user has locally stored notes
        if (Storage.notes)
        {
            log('notes', Storage.notes);
        }
        else
        {
            log('notes', 'no saved notes');
            localStorage.setItem('notes', new Array());
        }

    }
    //browser does not support local storage
    else
    {
        log('localStorage','not found');
        alert('Your browser does not support local storage, notes cannot be saved');
    }
}

/*
function storeNote(note)
{
    //log('note submitted', note.);
    console.log(note);
}
*/

$(document).ready( function() {
    $('form#note').submit( function() {
        var title = $("input#title").val();
        var body = $("input#body").val();
        //Storage.notes.push(new Note(title, body));
        Storage.setItem('notes', Storage.getItem('notes').push(new Note(title, body)));
        log('notes', Storage.getItem('notes'));
        return false;
    });
});
