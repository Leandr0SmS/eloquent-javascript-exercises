const min = function (x, y) {
    if (x < y) {
       return x;
    } else if (x > y) {
       return y;
    } else {
       return x;
    }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log(min((10, 10)))
// → 10
