function findMax(arr) {
  if (arr.length < 2) {
    return arr;
  } else if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  }
  let sub_max = findMax(arr.slice(1));
  return arr[0] > sub_max ? arr[0] : sub_max;
}

let arr = [1, 2, 3, 22, 45];

console.log(findMax(arr));
