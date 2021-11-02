github = "https://github.com/maciekkoks"
//prntsc
function prntsc() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    const randomCharacter2 = alphabet[Math.floor(Math.random() * alphabet.length)]

    function n(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let val = n(1000, 9999);
    link = "https://prnt.sc/" + randomCharacter2 + randomCharacter + val
    console.log(link);
}
//imgur
function imgur() {
    const chars = '01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz';
    var stringlength = 5; /* could be 6 or 7 */
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
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N0F7R5NPTR');
