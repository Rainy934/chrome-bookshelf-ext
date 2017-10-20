chrome.runtime.onMessage.addListener(function(message, sender, callback){
    var booklist = null
    if(localStorage.booklist) {
        var booklist = JSON.parse(localStorage.booklist)
    } else {
        booklist = []
    }
    var book = JSON.parse(message)

    var isHas = false
    for (var i = booklist.length - 1; i >= 0; i--) {
        if(booklist[i].title === book.title) {
            booklist[i] = book
            isHas = true
        }
    }
    if(!isHas) {
        booklist.push(book)
    }
    localStorage.booklist = JSON.stringify(booklist)
});

