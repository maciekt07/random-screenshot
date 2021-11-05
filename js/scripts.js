github = "https://github.com/maciekkoks"
function select() {
    var e = document.getElementById("signs");
    var strUser = e.value;
}
//prntsc
function prntsc() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    var randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    var randomCharacter2 = alphabet[Math.floor(Math.random() * alphabet.length)]

    function n(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let val = n(1000, 9999);
    link = "https://prnt.sc/" + randomCharacter2 + randomCharacter + val
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
