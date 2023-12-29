const arr = [1, 2, 3, 10, 11, 0];
console.log(arr);

function search(arr, noi) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === noi) {
      return true;
    }
  }
  return false;
}

let noi = 22; //num of interest
console.log(search(arr, noi)); // should return false

noi = 1; //num of interest
console.log(search(arr, noi)); // should return true

noi = 10; //num of interest
console.log(search(arr, noi)); // should return true

noi = -1; //num of interest
console.log(search(arr, noi)); // should return false
