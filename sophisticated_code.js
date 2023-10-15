/**
 * Filename: sophisticated_code.js
 * Description: This code demonstrates a complex and sophisticated JavaScript program.
 */

// Define a class for creating a custom data structure - Stack
class Stack {
    constructor() {
        this.items = [];
    }

    // Method to add an element to the stack
    push(element) {
        this.items.push(element);
    }

    // Method to remove an element from the stack
    pop() {
        if (this.isEmpty())
            return "Stack Underflow";
        return this.items.pop();
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to get the top element in the stack
    peek() {
        if (this.isEmpty())
            return "No elements in the stack";
        return this.items[this.items.length - 1];
    }

    // Method to get the size of the stack
    size() {
        return this.items.length;
    }

    // Method to clear the stack
    clear() {
        this.items = [];
    }
}

// Create an instance of the Stack class
const myStack = new Stack();

// Push some elements into the stack
myStack.push(10);
myStack.push(20);
myStack.push(30);

// Print the top element of the stack
console.log("Top element of the stack:", myStack.peek());

// Pop an element from the stack
console.log("Popped element from the stack:", myStack.pop());

// Check if the stack is empty
console.log("Is the stack empty?", myStack.isEmpty());

// Print the size of the stack
console.log("Size of the stack:", myStack.size());

// Clear the stack
myStack.clear();

// Check if the stack is empty after clearing
console.log("Is the stack empty after clearing?", myStack.isEmpty());