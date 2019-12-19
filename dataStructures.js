
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
    addToEnd(value) {
        let on = this
        while (on.next) {
            on = on.next
        }
        on.next = new Node(value)
    }
    getAt(index) {
        let on = this
        while(index--) {
            on = on.next
        }
        return on.value
    }
}

const LL = new Node(5);
LL.addToEnd(6)
LL.addToEnd(7)

LL.getAt(2)


class BST {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const myBST = new BST(5)
myBST.left = new BST(3)
myBST.right = new BST(7)

myBST

class Stack {
    constructor(values) {
        this.values = values
        this.size = values.length
    }
    push(value) {
        this.values.push(value)
        this.size++
    }
    pop() {
        this.values.pop()
        this.size--
    }
}

const myStack = new Stack([1,2,3])
myStack.push(4)
myStack.pop()
console.log(myStack.values)



class Queue {
    constructor(items) {
        this.items = items
    }
    enqueue(value) {
        this.items.push(value)
    }
    dequeue() {
        return this.items.shift()
    }
    peek() {
        return this.items[0]
    }
}

const myQueue = new Queue([1,2,3])
myQueue.enqueue(4)
console.log(myQueue.peek())
console.log(myQueue.dequeue())
myQueue




class HashTable {
    constructor() {
        this.items = []
    }
    _makeHash(key) {
        let hash = key[0].charCodeAt(0)
        return hash % 10;
    }
    add(key, value) {
        // hashing algorithm??
        const hash = this._makeHash(key);
        this.items[hash] = value;
    }
    get(key) {
        const hash = this._makeHash(key);
        return this.items[hash];
    }
}

const myHT = new HashTable();
myHT.add('name', 'Aaron')

console.log(myHT.get('name'))











