providedArray = [-5, 2, 10, 4, 6];

const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch(providedArray, 10));
console.log(linearSearch(providedArray, 6));
console.log(linearSearch(providedArray, 7));