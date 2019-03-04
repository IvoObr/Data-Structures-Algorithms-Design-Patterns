class mySet {
    constructor() {
        this.collection = [];
        this.size = this.collection.length;
    }

    has(element) {
        return (this.collection.indexOf(element) !== -1);
    }

    values() {
        return this.collection;
    }

    add(element) {
        if (!this.has(element)) {
            this.collection.push(element);
            this.size++;
            return true;
        } else {
            return false;
        }
    }

    delete(element) {
        if (this.has(element)) {
            let index = this.collection.indexOf(element);
            this.collection.splice(index, 1);
            this.size--;
            return true;
        } else {
            return false;
        }
    }

    union(otherSet) {
        let unionSet = new mySet();
        let originalSet = this.values();
        let additionalSet = otherSet.values();
        
        originalSet.forEach(element => unionSet.add(element));
        additionalSet.forEach(element => unionSet.add(element));

        return unionSet;
    }

    intersection(otherSet) {
        let intersectionSet = new mySet();
        let originalSet = this.values();

        originalSet.forEach(element => {
            if (otherSet.has(element)) {
                intersectionSet.add(element);
            }
        })

        return intersectionSet;
    }

    difference(otherSet) {
        let differenceSet = new mySet();
        let originalSet = this.values();

        originalSet.forEach(element => {
            if (!otherSet.has(element)) {
                differenceSet.add(element);
            }
        })

        return differenceSet;
    }

    subset(otherSet) {
        let originalSet = this.values();
        return originalSet.every(element => otherSet.has(element));
    }
}

// Testing
const setA = new mySet();
const setB = new mySet();
setA.add('a');
setA.add('z');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('a');
setB.add('a');
setB.add('a');
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.size);
console.log(setB.delete('a'));
console.log(setB.values());
console.log(setB.size);
console.log(setA.intersection(setB).values());
console.log(setB.has('a'));
console.log(setB.add('b'));
console.log(setB.values());
console.log(setB.values());
console.log(setA.difference(setB).values());
console.log(setA.union(setB).values());

