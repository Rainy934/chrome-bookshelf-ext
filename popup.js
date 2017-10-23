var booklist = JSON.parse(localStorage.booklist?localStorage.booklist:'[]')
var html = ''
for (var i = booklist.length - 1; i >= 0; i--) {
    html = html + '<li><a position="100000" title="'+ booklist[i].title+'" href="' + booklist[i].link + '">'+ booklist[i].title+'</a><br><span style="font-size: 12px;color: #cdcdcd;">Last: ' + booklist[i].time + '</span></li></li>'
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
    }
}

