
const countBs = function (string) {
    let counterB = 0;
    for (let i =0; i < string.length; i++) {
        if (string[i] === 'B') {
            counterB ++;
        }
    }
    return counterB
}

const countChar = function (string, n) {
    let counter = 0;
    for (let j =0; j < string.length; j++) {
        if (string[j] === n) {
            counter ++;
        }
    }
    return counter
}

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));