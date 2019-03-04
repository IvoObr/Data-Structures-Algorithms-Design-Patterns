class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    printCollection() {
        console.log('collection :', JSON.stringify(this.collection));
    }

    enqueue(element) {
        if (this.isEmpty()) {
            this.collection.push(element);
        } else {
            let added = false;
            for (let index = 0; index < this.collection.length; index++) {
                if (element[1] < this.collection[index][1]) {
                    this.collection.splice(index, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(element);
            }
        }
    }

    dequeue() {
        let value = this.collection.shift();
        return value[0];
    }

    front() {
        return this.collection[0];
    }

    size() {
        return this.collection.length;
    }

    isEmpty() {
        return (this.collection.length === 0);
    }
}

// Testing
let priorityQ = new PriorityQueue(); 
priorityQ.enqueue(['Kino Penev', 2]); 
priorityQ.enqueue(['Lari Omari', 3]);
priorityQ.enqueue(['Iban Popov', 1])
priorityQ.enqueue(['Kalin Tonev', 2])
priorityQ.printCollection();
priorityQ.dequeue();
console.log(priorityQ.front());
priorityQ.printCollection();