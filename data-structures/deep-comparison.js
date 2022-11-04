
const deepEqual = function (valueOne, valueTwo) {
    if (valueOne === valueTwo) 
        return true;
    if (valueOne == null || typeof valueOne != "object" || valueTwo == null || typeof valueTwo != "object") 
        return false;
    
    //go over the properties   
    let propertiesValueOne = Object.keys(valueOne);
    let propertiesValueTwo = Object.keys(valueTwo);
    
    //ensure that both objects have the same number of properties
    if (propertiesValueOne.length != propertiesValueTwo.length) 
        return false;
    //looping over one of the object’s properties to compare them
    for (let i =0; i < propertiesValueOne.length; i ++) {
        //check if all properties in one also exist in the other
        if (propertiesValueOne[i] !== propertiesValueTwo[i])
            return false;
        if (deepEqual(valueOne[propertiesValueOne[i]], valueTwo[propertiesValueTwo[i]]) == false)
            return false;
    }
        return true;
}



let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true