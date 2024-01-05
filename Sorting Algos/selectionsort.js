//finds the smallest value in the array and returns its index
function findSmallest(arr) {
  let smallest_index = 0;
  let smallest_value = arr[smallest_index];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest_value) {
      smallest_value = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}

function selectionSort(arr) {
  let newArr = [];
  let len = arr.length; //have to set length since the arr is being sliced resulting in a ever changing length each iteration

  for (let i = 0; i < len; i++) {
    smallest = findSmallest(arr);
    newArr.push(...arr.splice(smallest, 1));
  }
  return newArr;
}

let arr = [5, 3, 6, 2, 10];
console.log(arr);
console.log(selectionSort(arr));
