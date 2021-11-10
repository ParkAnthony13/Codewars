// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)


function humanReadable(seconds) {
    if (seconds > 359999) {
        return null;
    }
    let secondsLeft=seconds;

    let hh = Math.floor(seconds/60/60);
    if (hh != 0) {
        secondsLeft = seconds - (hh*60*60);
    }

    let mm = Math.floor(secondsLeft/60);
    if (mm != 0) {
        secondsLeft = secondsLeft - (mm*60);
    }

    let ss = secondsLeft

    if (hh.toString().length == 1) {
        hh = "0"+hh;
    } else if (hh.toString().length == 0) {
        hh = "00";
    }
    if (mm.toString().length == 1) {
        mm = "0"+mm;
    } else if (mm.toString().length == 0) {
        mm = "00";
    }
    if (ss.toString().length == 1) {
        ss = "0"+ss;
    } else if (ss.toString().length == 0) {
        ss = "00";
    }

    let result = hh+":"+mm+":"+ss;
    console.log(result);
    return result;

}
humanReadable(359999);
humanReadable(1000);
humanReadable(500);
humanReadable(5000);
