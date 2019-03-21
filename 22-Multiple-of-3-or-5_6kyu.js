// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. //

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. //

//     Note: If the number is a multiple of both 3 and 5, only count it once. //

function solution(number){
  console.log(number);
  let arr = [];
  for (let i = 1; i < number; i++) {
    arr[i - 1] = i;
  }
  if (number  < 4) {
    return 0;
  }
  else {
    return arr.filter(value => value % 3 == 0 || value % 5 == 0).reduce((a, b) => a + b);;
  }
}

