// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.
//

function findUniq(arr) {
  arr.sort((a, b) => a != b);
  for (let i = 0; i < arr.length; i++) {
    let firstIndex = arr[1];

    if (firstIndex == arr[i]) {}

    else {
      let uniqueValue = arr[i];
      return uniqueValue;
    }
  }
}

