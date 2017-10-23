var url = decodeURIComponent(location.pathname.slice(1, location.pathname.length))
var texts = url.split('/')
var title = texts[texts.length-1]
var message = {
    title: title,
    link: url,
    time: (new Date()).toLocaleString()
}
chrome.runtime.sendMessage(JSON.stringify(message));
