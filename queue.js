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
            this.start = node
            this.end = node
            this.length = 1
        } else {
            this.last.next = node
            this.last = node
            this.length++
        }
        
        return this
    }

    dequeue() {
        if(!this.length) return undefined
        if(this.length == 1)  {
            this.start = null 
            this.end = null
            this.length = 0
            return this 
        }
        let temp = this.start
        this.start = this.start.next
        temp.next = null
        this.length --
        return this
    }

}

const queue = new Queue(100)
// console.log(queue)
console.log(queue.enqueue(200))
console.log(queue.enqueue(300))
console.log(queue.enqueue(400))
console.log(queue.dequeue())
