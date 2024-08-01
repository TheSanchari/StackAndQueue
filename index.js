class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class stack {
    constructor(value) {
        const newnode = new Node(value)
        this.top = newnode
        this.length = 1
    }
    
}

const newStack = new stack(11)
console.log(newStack)