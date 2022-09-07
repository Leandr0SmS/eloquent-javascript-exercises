/*recursive function*/

const isEven = function (number) {
    if (number > 0) {
        if (number === 0) {
            return console.log(true);
        } else if (number === 1) {
            return console.log(false);
        } else {
            return isEven(number-2);
        } 
    } else {
        if (number === 0) {
            return console.log(true);
        } else if (number === -1) {
            return console.log(false);
        } else {
            return isEven(number+2);
        }
    }
  }



isEven(-6);