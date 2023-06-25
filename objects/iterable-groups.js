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

class GroupIterator {

    constructor(group) {
        this.elements = group.elements;
        this.index = 0;
    }

    next() {
        if (this.index == this.elements.length) return {done: true}
        let value = {value: this.elements[this.index], done: false};
        this.index++;
        return value
    }

}

Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c