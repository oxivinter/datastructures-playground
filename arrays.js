// Arrays are an ordered collection of values.
/*

insert at end       O(1) constant
remove at end       O(1) constant
insert at start     O(n) linear       this is because array has to shift all indexes.
remove at start     O(n) linear       this is because array has to shift all indexes.

access              O(1) constant

  INSERT/REMOVE
array.push()        O(1) constant
array.pop()         O(1) constant
array.shift()       O(n) linear
array.unshift()     O(n) linear
array.concat()      O(n) linear  
array.slice()       O(n) linear
array.splice()      O(n) linear


  SEARCH
array.forEach()     O(n) linear
array.map()         O(n) linear
array.filter()      O(n) linear
array.reduce()      O(n) linear

*/


const odd = [1, 3, 5, 7, 9]