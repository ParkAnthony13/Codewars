
// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/solutions/javascript

const word = "abba";
const words = ['aabb', 'abcd', 'bbaa', 'dada'];
const word2 = ["a", "b", "c", "d"];

function anagrams(word, words) {
    result = [];
    for (test of words) {
        if (word.length == test.length) {
            let map = {};
            let map2 = {};
            for (let i = 0; i<word.length; i++) {
                if (!map[word[i]]) {
                    map[word[i]] = 1;
                } else {
                    map[word[i]] += 1;
                }
                if (!map2[test[i]]) {
                    map2[test[i]] = 1;
                } else {
                    map2[test[i]] += 1;
                }
            }
            let isAna = true;
            for (dlet in map) {
                if (map[dlet] != map2[dlet]) {
                    isAna = false;
                }
            }
            if (isAna == true) {
                result.push(test);
            }
    
        }
    }

    return result;
}
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));
// console.log(result)