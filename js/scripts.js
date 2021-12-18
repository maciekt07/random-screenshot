github = "https://github.com/maciekkoks"

function select() {
    var e = document.getElementById("signs");
    var strUser = e.value;
}

//prntsc
function prntsc() {
    const chars = "abcdefghijklmnopqrstuvwxyz1234567890"
    var stringlength = 6;
    var text = '';
    for (var i = 0; i < stringlength; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        text += chars.substring(rnum, rnum + 1);
    }
    link = "https://prnt.sc/" + text;
    console.log(link);
}

//imgur
function imgur() {
    var e = document.getElementById("signs");
    var strUser = e.value;
    const chars = '01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz';
    var stringlength = strUser; /* could be 5, 6 or 7 */
    var text = '';
    for (var i = 0; i < stringlength; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        text += chars.substring(rnum, rnum + 1);
    }
    imlink = 'https://i.imgur.com/' + text + '.jpg';
    console.log(imlink);
}

//Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-N0F7R5NPTR');
