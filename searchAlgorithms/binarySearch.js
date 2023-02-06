// given a SORTED ARRAY of N elements and a target element T, find the INDEX of T in the array.
// If the target element is not found, return -1.

providedArray = [-5, 2, 4, 6, 10];

const binarySearch = (array, target) => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    //desired outcome: value at middleIndex of array is target value
    if (target === array[middleIndex]) {
      return middleIndex;
    }
    
    //repetition of loop: value at middleIndex of array is higher or lower than target value
    //change conditions (rightIndex or leftIndex) and try again as long as the array has elements to search
    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
};

console.log(binarySearch(providedArray, 10));
console.log(binarySearch(providedArray, 6));
console.log(binarySearch(providedArray, 20));