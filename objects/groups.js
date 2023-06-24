class Group {

    constructor () {
        this.elements = [];
    }

    add (value) {
        if (!this.has(value)) {
          this.elements = [...this.elements, value];
        }
        return false;
      }

    delete (value) {
        if (this.has(value)) {
          this.elements = [...this.elements.filter(e => e !== value)];
        }
        return false;
    }

    has (value) {
        return this.elements.includes(value);
    }

    static from (iterable) {
        const newGroup = new Group();
        for (let elem of iterable) {
          newGroup.add(elem);
        }
        return newGroup;
    }
}


let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false