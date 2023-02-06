// Given two finite non-empty sets, find their Cartesian Product.
// A Cartesian product is based on a set of ordered sets. 
// It's the set of all feasible ordered combinations that includes one member from each of those sets.

// Set A has [a,b].
// Set B has [c,d].
// Cartesian product of A and B (denoted as A×B) is [[1,3], [1,4], [2,3], [2,4]].

// Set C has [1,2].
// Set D has [3,4,5].
// Cartesian product of C and D (denoted as C×D) is [[1,3], [1,4], [1,5], [2,3], [2,4], [2,5]].

const pastaArray = ['spaghetti', 'farfalle', 'fettuccine', 'rigatoni']
const sauceArray = ['alfredo', 'carbonara', 'bolognesa', 'pesto']

const cartesianProduct = (setA, setB) => {
  const resultArray = [];
  setA.forEach(element => {
    for(let i = 0; i < setB.length; i++){
      resultArray.push([element, setB[i]]);
    }
  });
  return resultArray;
}

console.log(cartesianProduct(pastaArray, sauceArray));

/* OUTPUT

  [
    [ 'spaghetti', 'alfredo' ],
    [ 'spaghetti', 'carbonara' ],
    [ 'spaghetti', 'bolognesa' ],
    [ 'spaghetti', 'pesto' ],
    [ 'farfalle', 'alfredo' ],
    [ 'farfalle', 'carbonara' ],
    [ 'farfalle', 'bolognesa' ],
    [ 'farfalle', 'pesto' ],
    [ 'fettuccine', 'alfredo' ],
    [ 'fettuccine', 'carbonara' ],
    [ 'fettuccine', 'bolognesa' ],
    [ 'fettuccine', 'pesto' ],
    [ 'rigatoni', 'alfredo' ],
    [ 'rigatoni', 'carbonara' ],
    [ 'rigatoni', 'bolognesa' ],
    [ 'rigatoni', 'pesto' ]
  ]
  
*/