// Taken and fixed from grokking algorithms

//returns the index of the target value you are looking for in the list
function binSearch(arr, targetVal) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log("mid index, value - ", mid, ",", arr[mid]);
    let guess = arr[mid];

    if (guess === targetVal) {
      return mid;
    } else if (guess < targetVal) {
      low = mid + 1;
    } else if (guess > targetVal) {
      high = mid - 1;
    }
  }
  return null;
}

let arr = [1, 3, 5, 7, 9];
console.log(binSearch(arr, 3)); //returns 1
console.log(binSearch(arr, -1)); //returns null
