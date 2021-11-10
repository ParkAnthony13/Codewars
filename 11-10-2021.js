// let string = "apples, pears # and bananas\ngrapes\nbananas !apples";

// console.log(string.split(' '));



//A perfect power is a classification of positive integers:
/////////////////////////////////////////////////////////////////////////// https://www.codewars.com/kata/54d4c8b08776e4ad92000835/train/javascript
// In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

// Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

// Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

var isPP = function(n){
    let m = [...Array(300).keys()];
    let k = [...Array(300).keys()];
    k.splice(0,2);
    for (let numM of m) {
        for (let numK of k) {
            if (Math.pow(numM,numK) == n) {
                return [numM,numK];
            }
        }
    }
    return null; // fix me
}

// m^k = n
let test = 4;
let test2 = 2;
let test3 = 9;

console.log(isPP(71008211968));
console.log(isPP(6967871));