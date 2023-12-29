/*
x= 1
[2, 3, 4, 5, 1];

x=2
[3,4,5,1,2]

x=3
[4,5,1,2,3]

x=7
[3,4,5,1,2]

x=arr.length
[1,2,3,4,5]
*/

//num times shifting left
function leftShift(arr, x) {
  let mod = x % arr.length;
  //   console.log("mod ", mod);

  if (mod === 0) {
    return arr;
  }

  let subArr = [];
  for (let i = 0; i < mod; i++) {
    subArr.push(parseInt(arr.shift()));
  }
  arr = [...arr, ...subArr];
  return arr;
}

/*
x=1
[5,1,2,3,4]

x=2
[4,5,1,2,3]

x=3
[3,4,5,1,2]


x=arr.length
[1,2,3,4,5]

x=7
[4,5,1,2,3]
*/

//y=num times shifting right
function rightShift(arr, y) {
  let mod = y % arr.length;
  //   console.log("mod", mod);

  if (mod === 0) {
    return arr;
  }

  let subArr = [];

  for (let i = 0; i < mod; i++) {
    subArr.unshift(arr.pop());
  }

  arr = [...subArr, ...arr];
  return arr;
}

console.log("\n ** Left Shift");

let arr = [1, 2, 3, 4, 5];
x = 1;
console.log(leftShift(arr, x)); //[2, 3, 4, 5, 1];

arr = [1, 2, 3, 4, 5];
x = 2;
console.log(leftShift(arr, x)); //[3,4,5,1,2]

arr = [1, 2, 3, 4, 5];
x = 3;
console.log(leftShift(arr, x)); //[4,5,1,2,3]

arr = [1, 2, 3, 4, 5];
x = 7;
console.log(leftShift(arr, x)); //[3,4,5,1,2]

arr = [1, 2, 3, 4, 5];
x = arr.length;
console.log(leftShift(arr, x)); //[1,2,3,4,5]

//-----------------------------------------------------------

console.log("\n ** Right Shift");

arr = [1, 2, 3, 4, 5];
x = 1;

console.log(rightShift(arr, x)); //[5,1,2,3,4]

arr = [1, 2, 3, 4, 5];
x = 2;
console.log(rightShift(arr, x)); //[4,5,1,2,3]

arr = [1, 2, 3, 4, 5];
x = 3;
console.log(rightShift(arr, x)); //[3,4,5,1,2]

arr = [1, 2, 3, 4, 5];
x = 7;
console.log(rightShift(arr, x)); //[4,5,1,2,3]

arr = [1, 2, 3, 4, 5];
x = arr.length;
console.log(rightShift(arr, x)); //[1,2,3,4,5]
