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
            // let temp = this.top
            console.log('this.top',this.top.value)
            this.top = this.top.next
            console.log('this.top',this.top.value)
            temp.next = null
            this.length --
            console.log('this.top',this.top.value)
            return this
        } else {
            return undefined
        }

    }
    
}

const newStack = new stack(11)
// console.log(newStack)
console.log(newStack.push(12))
console.log(newStack.push(14))
console.log(newStack.push(134))
console.log(newStack.pop())
console.log(JSON.stringify(newStack))
