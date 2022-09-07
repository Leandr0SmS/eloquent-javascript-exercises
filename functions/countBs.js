
const countBs = function (string) {
    let counter = 0;
    for (let i =0; i < string.length; i++) {
        if (string[i] === 'B') {
            counter ++;
        }
    }
    console.log(counter); 
}

const countChar = function (string, n) {
    let counter = 0;
    for (let i =0; i < string.length; i++) {
        if (string[i] === n) {
            counter ++;
        }
    }
    console.log(counter); 
}

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));