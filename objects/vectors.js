class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    
    plus(vec) {
        const sumX = this.x + vec.x;
        const sumY = this.y + vec.y;
        return new Vec(sumX, sumY);
    }

    minus(vec) {
        const diffX = this.x - vec.x;
        const diffY = this.y - vec.y;
        return new Vec(diffX, diffY);
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

// Output the result
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5