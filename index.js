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

    push(value) {
        const newnode = new Node(value)
        if(this.length === 0) {
            this.top = newnode
            this.top.next = null
            this.length = 1
        } else {
        let temp = this.top
        this.top = newnode
        this.top.next = temp
        this.length++
        }
        return this
    }

    pop() {
        if(this.length) {
            let temp = this.top
            this.top = this.top.next
            temp.next = null
            this.length --
            return temp
        } else {
            return undefined
        }

    }
    
}

const newStack = new stack(11)
// console.log(newStack)
console.log(newStack.push(12))
console.log(newStack.push(14))
console.log(newStack.pop())
console.log(newStack)
