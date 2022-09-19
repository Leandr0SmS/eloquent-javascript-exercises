const reverseArray = function (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i ++) {
        newArray.unshift(array[i]);
    }
    return newArray;
};


const reverseArrayInPlace = function (array) {
    let newArray = [];
    for (let j = 0; j < array.length; j ++) {
        newArray.unshift(array[j]);
    }
    array.splice(-Infinity);
    for (let k = 0; k < newArray.length; k ++) {
        array.push(newArray[k]);
    }
    return array;
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]





