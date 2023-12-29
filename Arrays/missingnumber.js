//Given an array with values ranging from 1-n+1 with size n, find missing num
function findMissingNumber(arr) {
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i - 1] + 1;
    }
  }
}

console.log(findMissingNumber([1, 3, 4, 5, 6, 7, 8, 9]), "\n"); //2
console.log(findMissingNumber([2, 3, 1, 5, 6, 7, 8, 9, 10]), "\n"); //4
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]), "\n"); //10
console.log(findMissingNumber([8, 2, 5, 4, 3, 7, 1, 10, 6]), "\n"); // 9
console.log(
  findMissingNumber([2, 1, 4, 5, 7, 3, 8, 9, 11, 6, 12, 13, 14]),
  "\n"
); //10
