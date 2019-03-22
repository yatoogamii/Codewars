// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let map = new Map();
  for (let i = 1; i <= A.length; i++) {
    if (A.length == 1) {
      return A[0];
    } else {
        map.set(A[i], A.filter(value => value == A[i]));
      }
  }
  for (let value of map) {
    if (value[1].length % 2 != 0) {
      return value[0];
    }
  }
}
