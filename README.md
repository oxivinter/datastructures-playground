<<<<<<< HEAD

# DSA-Playground

This repository holds notes and practice files related to these online tutorials.

https://www.youtube.com/playlist?list=PLC3y8-rFHvwiRYB4-HHKHblh3_bQNJTMa
https://www.youtube.com/playlist?list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy

## Algorithms

An algorithm is a set of well-defined instructions to solve a particular problem.
It should have well-defined inputs and outputs, and each step should be clear and unambiguous.
The sequence of instructions should be easy to implement regardless of language.

One problem can be solved in many ways using different algorithms.
Every algorithm comes with its own tradeoffs when it comes to performance.

Since the absolute running time of an algorithm cannot be predicted (as it depends on a number of factors), algorithms are evaluated on performance in terms of their **input size**.

### Time and Space Complexity

As a function of input size, an algorithm can become more or less efficient in two ways:

- Amount of time taken by an algorithm to run (_time complexity_)
- Amount of memory taken by an algorithm to run (_space complexity_)

There is no one solution that works every single time. Given your constraints, it is always good to know multiple ways to solve the problem. The same solution might be less efficient under different conditions (for example, if a hypothetical userbase grows in size or if the machine used to compute the algorithm has different specifications).

If the app needs to be very quick and has plenty of memory to work with, space complexity is not a concern. However, if there is little memory to work with, a slower solution that requires less space may be more desirable.

Complexity is represented using asymptotic notations (mathematical tools used to represent time and space complexity)

- Big-O Notation — O(n) — Worst case complexity
- Big-Ω Notation — Ω(n) — Best case complexity _(less frequently used)_
- Theta Notation - Θ(n) — Average case complexity _(less frequently used)_

#### Big-O Notation

Big-O Notation describes the complexity of an algorithm using algebraic terms. It is expressed in terms of the **input**, and it is intended to focus on the bigger picture without getting caught up in the minute details.

The worst-case time complexity of an algorithm _counts the number of times a statement executes based on the input size_.

##### Constant Time Complexity

For example, given the following JavaScript function:

```javascript
function summation(n) {
  return (n * (n + 1)) / 2;
}
```

Since this function only holds one statement, and this statement will execute only once regardless of the input provided, the complexity of this algorithm can be written down as:
**O(1)**.

##### Linear Time Complexity

For example, given the following JavaScript function:

```javascript
function summation(n) {
  //sum all the numbers from 1 to n
  //e.g. (n = 4) would do (1+2+3+4)
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
```

The statements on line 2 and line 6 are executed only once each.
The statement on line 4 is executed as many times as the loop repeats.
If n = 4, the statement on line 4 is executed 4 times.
Adding the single execution of the other two statements, we arrive at 4+2 = 6.

Since the loop will, in a worst-case scenario, execute an **n** amount of times (the whole input size), the complexity of this algorithm can be written down as:
**O(n+2)**

When n = 100, complexity is 100+2.
When n = 100000, complexity is 100000+2.
Eventually, as **n** gets higher, the **+2** becomes insignificant and can be abbreviated.
Thus, we can abbreviate _O(n+2)_ as _O(n)_.
This is called **linear time complexity**.

##### Quadratic Time Complexity

For example, given the following JavaScript snippet:

```javascript
for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    // some code
  }
}
```

This function holds two nested loops, and the time complexity can now be described as a quadratic function (eg. `3n²+5n+1`).
Much like in the previous example, the non-squared terms do not scale at a significant rate when the input size becomes very large, and thus they can be abbreviated as well. This means the Big-O notation for this algorithm becomes:
**O(n²)**.

This is called **quadratic time complexity**.

##### Other

If the function holds three nested loops, it becomes cubic: **O(n³)**.
If the input size reduces by half in every iteration, it becomes logarithmic: **O(logn)**.

## Data Structures

A data structure is a way to store and organize data so that it can be used efficiently.
A data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to that data.

Almost every application we build involves data that is modelled in a certain way.
To efficiently manage that data, you need data structures.

The difference between a function taking a few milliseconds vs. a few seconds or even minutes comes down to the selection of the right data structure.
Data structures help you solve problems in a more efficient way, both in terms of time and memory.

Learning about data structures also helps you gain a more profound understanding of things you are already aware of.
For example, the DOM (Document Object Model) is a **tree** data structure.
The browser history (e.g. using back and forward buttons) is a **stack** data structure.
OS job scheduling can be defined as a **queue** data structure.

Built-in data structures include:

- Arrays
- Objects
- Sets
- Maps

Custom data structures include:

- Stacks
- Queues
- Circular queues
- Linked lists
- Hash tables
- Trees
- Graphs

## Footnotes

Here's a small reminder to myself.
There will be frustration. This is fine.
The effort of learning is always rewarded with newfound knowledge.

# ![gif](https://media0.giphy.com/media/l49JKCSoloVTGjmWQ/giphy.gif?cid=ecf05e47rsp1kiq57sgs1430vwyckzc8ln84hol1qpfj86uh&rid=giphy.gif&ct=g)


> > > > > > > 44d97f387c1c834414415dc116acb6a6a4a382f3
