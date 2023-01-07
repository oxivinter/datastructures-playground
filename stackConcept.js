// collection of items
// add to top of stack (push)
// remove from top of stack (pop)
// LAST IN FIRST OUT (LIFO)

// MAXIMALLY EFFICIENT STACK: O(1) time for push/pop

// ------------------------------//
// using an array

const stack = [];
stack.push("a"); //push A to stack = [a]
stack.push("b"); //push B to stack = [a, b]
stack.push("c"); //push C to stack = [a, b, c]
stack.pop(); //pop last from stack = [a, b]
stack.push("d"); //push D to stack = [a, b, d]
console.log(stack.pop()); // pop last from stack = [a, b], output d
console.log(stack); // output [a, b]

// ------------------------------//
// using a linked list
//
// class StackNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null; //position in stack is defined by what's behind it, initial value is null
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.size = 0;
//   }

//   push(val) {
//     if (this.size === 0) {
//       //inserting first item
//       this.top = new StackNode(val);
//     } else {
//       //chaining a new value
//       const pushedNode = new StackNode(val);
//       pushedNode.next = this.top; //current top becomes next
//       this.top = pushedNode; //pushedNode becomes new top
//     }
//     this.size++;
//   }

//   pop() {
//     if (this.size === 0) return null;
//     const poppedNode = this.top; //obtain last item from the list
//     this.top = this.top.next; //unlinking last item from the list by rerouting top to second-last item
//     this.size--;
//     return poppedNode.val;
//   }

//   getTop() {
//     if (this.top === null) return null; // escape "cannot read properties of null" (reading 'this.top.val')
//     return this.top.val;
//   }
// }

// const stack = new Stack();
// stack.push('a');
// stack.push('b');
// stack.push('c');

// //console.log(stack.top); 
// //unwanted output of full StackNode object on top of the stack

// console.log(`${stack.size} - ${stack.getTop()}`); // output 3 - c, then pop c from stack
// stack.pop();
// console.log(`${stack.size} - ${stack.getTop()}`); // output 2 - b, then pop b from stack
// stack.pop();
// console.log(`${stack.size} - ${stack.getTop()}`); // output 1 - a, then pop a from stack
// stack.pop();
// console.log(`${stack.size} - ${stack.getTop()}`); // output 0 - null, attempt to pop but return null
// stack.pop();
// console.log(`${stack.size} - ${stack.getTop()}`); // output 0 - null, attempt to pop but return null