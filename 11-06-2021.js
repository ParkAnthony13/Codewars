// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


function rot13(message){
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    // check if letter in alphabet 6 --> 19
    // keep track of letter index
    // find new letter
    // return correct letter
    let letter = "";
    let result = "";
    const sameLetter = element => element.toLowerCase() == letter;


    for (let i=0; i<message.length; i++) {
        if (alphabet.includes(message[i].toLowerCase())) {
            letter = message[i].toLowerCase();
            let position = alphabet.findIndex(sameLetter);
            position = position + 13;
            if (position > 25) {
                position = position-26;
            }
            if (message[i] == message[i].toUpperCase()) {
                // is uppercase
                result = result + alphabet[position].toUpperCase();
            } else {
                result = result + alphabet[position];
            }
        } else {
            // put non letter/character into results string
            result = result + message[i];
        }
    }
    return result;
}

console.log(rot13("grfg"));
console.log(rot13("Grfg1"));