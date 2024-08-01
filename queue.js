class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(value) {
        const queue = new Node(value)
        this.start = queue
        this.last = queue
        this.last.next = null
        this.length = 1

    }

    enqueue(value) {
        const node = new Node(value)
        if(this.length === 0) {
            console.log(1)
            this.start = node
            this.end = node
            this.length = 1
        } else {
            console.log(2)
            this.last.next = node
            this.last = node
            this.length++
        }
        
        return this
    }

}

const queue = new Queue(100)
// console.log(queue)
console.log(queue.enqueue(200))