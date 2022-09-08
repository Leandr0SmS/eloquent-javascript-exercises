

const range = function (start, ends, step) {
    let result = [start]; 
        if (start <= ends) { 
            if (step) {
                while (start < ends + step) {
                    start += step;
                    result.push(start);
                }
                return result;
            } else if (!step) {
                while (start < ends) {
                    start ++; 
                    result.push(start);  
                }
                return result;
            }
            } else if (start >= ends) {
            if (step) {
                while (start > ends) {
                    start += step;
                    result.push(start);
                }
                return result;
            } else if (!step) {
                while (start > ends) {
                    start --; 
                    result.push(start);  
                }
                return result;
            }
        }
    return result;
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = function (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i ++) {
        sum += numbers[i];
    }
    return sum;
};

console.log(sum(range(1, 10)));
