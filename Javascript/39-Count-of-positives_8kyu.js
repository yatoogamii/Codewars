// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
   let countPositives = 0;
   let sumNegatives = 0;
   let result = [];
   
   if (input !== null) {
   for (let value of input) {
   
     (value > 0) ? countPositives++ : sumNegatives += value;
     
   }
     result = [countPositives, sumNegatives];
     return (result[0] == 0 && result[1] == 0) ? [] : result; 
   }
   else { 
     return []; 
   }
}
