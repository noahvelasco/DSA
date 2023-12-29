//find the two elements that add up to target and return the two elements indices

function twoSum(arr, target) {
  let ptr1 = 0;
  let ptr2 = 0;

  for (let ptr1 = 0; ptr1 < arr.length; ptr1++) {
    for (let ptr2 = 0; ptr2 < arr.length; ptr2++) {
      if (ptr1 !== ptr2 && arr[ptr1] + arr[ptr2] === target) {
        return [ptr1, ptr2];
      }
    }
  }
}

let arr = [2, 7, 11, 15];
let target = 9;
console.log(">>>", twoSum(arr, target)); //[0,1]

arr = [3, 2, 4];
target = 6;
console.log(twoSum(arr, target)); //[1, 2]

arr = [3, 3];
target = 6;
console.log(twoSum(arr, target)); //[0, 1]

arr = [1, 4, 5, 8];
target = 9;
console.log(twoSum(arr, target)); //[0, 3]

arr = [-1, -2, -3, -4, -5];
target = -8;
console.log(twoSum(arr, target)); //[2, 4]
