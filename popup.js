var booklist = JSON.parse(localStorage.booklist?localStorage.booklist:'[]')
var html = ''
for (var i = booklist.length - 1; i >= 0; i--) {
    html = html + '<li><a position="100000" href="' + booklist[i].link + '">'+ booklist[i].title+'</a></li>'
}

document.getElementById('book-list').innerHTML = html


var list = document.getElementById('book-list').children
for (var i = list.length - 1; i >= 0; i--) {
    list[i].onclick = function(e) {
        var a = chrome.tabs.create({
            url: e.target.href, active: true, pinned: false,
        }, function(tab){
            console.log(tab);
        });
        chrome.runtime.sendMessage(JSON.stringify(message));

        chrome.tabs.getSelected(function(tab){
            var current_tab_id = tab.id;
            chrome.tabs.executeScript(tabId, {
                code: 'document.body.style.backgroundColor="red"', allFrames: true, runAt: 'document_start' },
                function(resultArray){
                    console.log(resultArray);
                }
            );
        });
    }
}

