
function CaesarCipher(str, num) {
    return str.replace(/[A-Za-z]/g, function(cipher) {
      return String.fromCharCode((cipher <= "Z" ? 90 : 122) >= (cipher = cipher.charCodeAt(0) + num) ? cipher : cipher - 26);
    });
}

function ROT13(str){
    return CaesarCipher(str, 13)
}

function Base64Dec(str){
    return atob(str)
}

function AsciiDec(str){
    return str.split(" ").map(function(c) { return String.fromCharCode(c); }).join("");
}

function HexDec(str){
    return str.split(" ").map(function(c) { return String.fromCharCode(parseInt(c, 16)); }).join("");
}


console.log(ROT13("Hello, world!"))
console.log(CaesarCipher("Hello, world!", 13))
console.log(Base64Dec("SGVsbG8sIHdvcmxkISk="))
console.log(AsciiDec("72 101 108 108 111 44 32 119 111 114 108 100 33"))
console.log(HexDec("48 65 6c 6c 6f 2c 20 77 6f 72 6c 64 21"))