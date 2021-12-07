//How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

// Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:

// rot13("EBG13 rknzcyr.") == "ROT13 example.";
// rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"


function rot13(str) {
    let a = {
        'a': 'n',
        'b': 'o',
        'c': 'p',
        'd': 'q',
        'e': 'r',
        'f': 's',
        'g': 't',
        'h': 'u',
        'i': 'v',
        'j': 'w',
        'k': 'x',
        'l': 'y',
        'm': 'z',
        'n': 'a',
        'o': 'b',
        'p': 'c',
        'q': 'd',
        'r': 'e',
        's': 'f',
        't': 'g',
        'u': 'h',
        'v': 'i',
        'w': 'j',
        'x': 'k',
        'y': 'l',
        'z': 'm'
    };
    let result = '';

    for (let letter of str) {
        if (a[letter.toLowerCase()]!=undefined) {
            if (letter == letter.toUpperCase()) {
                result += a[letter.toLowerCase()].toUpperCase();
            } else {
                result += a[letter]
            }
        } else {
            result += letter
        }
    }
    return result;
}

console.log(rot13("EBG13 rknzcyr.") == "ROT13 example.")
console.log(rot13("This is my first ROT13 excercise!") == "Guvf vf zl svefg EBG13 rkprepvfr!")