/*recursive function*/

const isEven = function (number) {
    if (number > 0) {
        if (number === 0) {
            return true;
        } else if (number === 1) {
            return false;
        } else {
            return isEven(number-2);
        } 
    } else {
        if (number === 0) {
            return true;
        } else if (number === -1) {
            return false;
        } else {
            return isEven(number+2);
        }
    }
  }



  console.log(isEven(50));

  console.log(isEven(75));
  
  console.log(isEven(-1));
  