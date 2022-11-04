function arrayToList(array) {
    let listObject = null;
    for (let i = array.length -1; i >= 0; i--) {
        listObject = {value: array[i], rest: listObject};
    }
    return listObject;
};

const listToArray = function (listObject) {
    let array = [];
    for (let link = listObject; link; link = link.rest) {
        array.push(link.value);
    };
    return array;
};

const prepend = function (element, listObject) {
    return {
        value: element,
        rest: listObject
    }
};

const nth = function (listObject, number) {
    if (number === 0) {
        return listObject.value;
    } else if (listObject.rest != null) {
        return nth(listObject.rest, number -1);
    } else {
        return undefined;
    }
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
