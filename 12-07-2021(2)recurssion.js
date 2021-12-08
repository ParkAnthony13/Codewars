//Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

// The keypad has the following layout:

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘

// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

// He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits

// Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

// Detective, we are counting on you!




// we need a recursive function that provides a part of the array everytime, until the array it only has one item left, and we let the recurssion begin.
// for example inside the main function(arr) {
// recur(item, recur(arr-1))
// }


function getPINs(observed) {
    let adjacent = {
        '1': ['1', '2', '4'],
        '2': ['1', '2', '3', '5'],
        '3': ['2', '3', '6'],
        '4': ['1', '4', '5', '7'],
        '5': ['2', '4', '5', '6', '8'],
        '6': ['3', '5', '6', '9'],
        '7': ['4', '7', '8'],
        '8': ['5', '7', '8', '9', '0'],
        '9': ['6', '8', '9'],
        '0': ['0','8']
    }
    function possible(arr,masterArr) {
        // console.log(`MasterArray ${masterArr}`)
        // console.log(`MasterArray ${masterArr.length}`)
        if (arr.length == 0) {
            return masterArr;
        } else if (arr.length > 0) {
            // console.log(`arr[0] = ${arr[0]}`)
            let hold = [];
            if (masterArr.length == 0) {
                for (let num of arr[0]) {
                    masterArr.push(num);
                }
            }
            for (let i of masterArr) {
                for (let num of arr[0]) {
                    hold.push(i+num);
                }
            }
            arr.splice(0,1);
            return possible(arr,hold);
        }
        return masterArr;
    }

    let input = [];
    let arr1 = []
    for (let digit of observed) {
        input.push(adjacent[digit]);
    }
    for (let x of input[0]) {
        arr1.push(x);
    }
    // console.log(`inputpre: ${input}`)
    // console.log(`arr1 ${arr1}`)
    input.splice(0,1);
    // console.log(`input post splice: ${input}`)
    result = possible(input,arr1);

    return result;
}

console.log(getPINs('11'));
console.log(getPINs('8'));
console.log(getPINs('0'));
