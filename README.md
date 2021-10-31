# [random-prnt.sc-generator/](https://maciekkoks.github.io/random-prnt.sc-generator/)
idk made in 10 minutes, carefully 😳
![previev](https://raw.githubusercontent.com/maciekkoks/random-prnt.sc-generator/main/img/previev.png)
```js
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
const randomCharacter2 = alphabet[Math.floor(Math.random() * alphabet.length)]
function n(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let val = n(1000, 9999);
link = "https://prnt.sc/" + randomCharacter2 + randomCharacter + val
```
