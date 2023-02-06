// BUBBLE SORT ALGORITHM

const providedArray = [6, -20, 10, -1, 3, -8];

const bubbleSort = (array) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

bubbleSort(providedArray);
console.log(providedArray);