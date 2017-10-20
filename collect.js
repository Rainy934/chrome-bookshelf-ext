var url = decodeURIComponent(location.pathname.slice(1, location.pathname.length))
var texts = url.split('/')
var title = texts[texts.length-1]
var message = {
    title: title,
    link: url,
    position: 0
}
chrome.runtime.sendMessage(JSON.stringify(message));

window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var message = {
        title: title,
        link: url,
        position: 0
    }
    chrome.runtime.sendMessage(JSON.stringify(message));
}
