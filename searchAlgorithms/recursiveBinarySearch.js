// given a SORTED ARRAY of N elements and a target element T, find the INDEX of T in the array.
// If the target element is not found, return -1.

providedArray = [-5, 2, 4, 6, 10];

const binarySearch = (array, target) => {
  return search(array, target, 0, (array.length - 1))
}

const search = (array, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {return -1}
  let middleIndex = Math.floor( (leftIndex + rightIndex)/2 );

  if (target === array[middleIndex]) {
    return middleIndex
  }
  
  //apply function again, changing initial parameters
  if (target < array[middleIndex]) {
    return search(array, target, leftIndex, middleIndex-1);
  } else {
    return search(array, target, middleIndex+1, rightIndex);
  }
}

console.log(binarySearch(providedArray, 10));
console.log(binarySearch(providedArray, 6));
console.log(binarySearch(providedArray, 7));