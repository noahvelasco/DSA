//also considered a D&C

function qsort(array) {
  console.log("rec call array is now ", array);
  if (array.length < 2) {
    return array;
  } else {
    let pivot = array[0];
    let less = array.filter((item) => item < pivot);
    let greater = array.filter((item) => item > pivot);

    console.log(less, pivot, greater);
    return [...qsort(less), pivot, ...qsort(greater)];
  }
}

let arr = [10, 5, 2, 3];
console.log(qsort(arr));
